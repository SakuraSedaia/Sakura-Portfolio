"""
This script is meant to speed up the process of adding new images to the render list.

Version 2.1:
- Refactored for simplicity, readability, and robustness.
- Improved path handling using pathlib.
- Streamlined metadata extraction and image processing.
"""

import calendar
import json
import logging
import os
from pathlib import Path

import cv2

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(levelname)s: %(message)s'
)
logger = logging.getLogger(__name__)

# Constants
RENDER_DICTIONARY_FILENAME = "RenderDictionary.json"
UTILS_DIR = Path(__file__).parent
PROJECT_ROOT = UTILS_DIR.parent

SOURCE_RENDERS_DIR = UTILS_DIR / "renders"
OUTPUT_WEB_IMAGES_DIR = PROJECT_ROOT / "public/images/renders"
OUTPUT_INDIVIDUAL_JSON_DIR = UTILS_DIR / "lib"

CATEGORIES = ["env", "char", "char-env"]
DEBUG = True
DEBUG_WEB_IMAGES_DIR = UTILS_DIR / "debug_renders"
DEBUG_INDIVIDUAL_JSON_DIR = UTILS_DIR / "debug_lib"


class ImageFile:
    """
    Handles image processing: reading, resizing, writing web versions,
    and managing JSON metadata.
    """

    def __init__(self, img_path: Path):
        self.img_path = img_path

    @staticmethod
    def ensure_dir(path: Path) -> None:
        path.mkdir(parents=True, exist_ok=True)

    def get_output_path(self, suffix: str, base_dir: Path,
                        clean_name: bool = False) -> Path:
        """Calculates output path relative to SOURCE_RENDERS_DIR."""
        rel_path = self.img_path.relative_to(
            SOURCE_RENDERS_DIR).with_suffix(suffix)
        if clean_name:
            # Replace spaces with underscores for JSON filenames or specific
            # image names
            name = rel_path.name.replace(" ", "_")
            return base_dir / rel_path.parent / name
        return base_dir / rel_path

    def cv2_write(
            self,
            max_width: int = 1920,
            label: str = None,
            subdir: bool = False,
            base_dir: Path = OUTPUT_WEB_IMAGES_DIR) -> Path:
        """Resizes and writes image as web-optimized JPEG."""
        if subdir:
            # Create a slug-like name for the subdirectory (e.g.,
            # "enchanting-room")
            name_slug = self.img_path.stem.split(
                "-")[0].replace(" ", "-").lower()
            target_dir = base_dir / \
                self.img_path.parent.relative_to(SOURCE_RENDERS_DIR) / name_slug
            file_name = self.img_path.stem.split("-")[0].replace(" ", "_")
        else:
            target_dir = base_dir / \
                self.img_path.parent.relative_to(SOURCE_RENDERS_DIR)
            file_name = self.img_path.stem

        self.ensure_dir(target_dir)
        suffix = f"-{label}.jpg" if label else ".jpg"
        target_path = target_dir / f"{file_name}{suffix}"

        if target_path.exists():
            logger.info(f"Skipping {target_path.name} (exists)")
            return target_path

        img = cv2.imread(str(self.img_path))
        if img is None:
            raise IOError(f"Could not read {self.img_path}")

        logger.info(f"Processing {self.img_path.name} -> {target_path.name}")
        h, w = img.shape[:2]
        if w > max_width:
            new_h = int(max_width * h / w)
            img = cv2.resize(img, (max_width, new_h),
                             interpolation=cv2.INTER_AREA)

        cv2.imwrite(str(target_path), img, [cv2.IMWRITE_JPEG_QUALITY, 80])
        return target_path

    def dump_json(self, data: dict, output_dir: Path) -> None:
        """Saves manifest JSON, preserving existing description if available."""
        path = self.get_output_path(".json", output_dir, clean_name=True)
        self.ensure_dir(path.parent)

        if path.exists():
            try:
                with open(path, 'r') as f:
                    old_data = json.load(f)
                if old_data.get("description") and not data.get("description"):
                    data["description"] = old_data["description"]
            except (json.JSONDecodeError, ValueError):
                pass

        with open(path, 'w') as f:
            json.dump(data, f, indent=4)
        logger.info(f"Saved Manifest: {path.name}")

    def generate_web(self, debug: bool = False) -> None:
        """Main process for an image: sizes, metadata, JSON."""
        web_dir = DEBUG_WEB_IMAGES_DIR if debug else OUTPUT_WEB_IMAGES_DIR
        json_dir = DEBUG_INDIVIDUAL_JSON_DIR if debug else OUTPUT_INDIVIDUAL_JSON_DIR

        manifest_tool = ImageManifest(self.img_path)
        logger.info(f"--- Processing: {manifest_tool.name} ---")

        sizes_paths = []
        for width, label in [(1920, 'lg'), (1600, 'md'), (1200, 'sm')]:
            saved_file = self.cv2_write(
                max_width=width,
                label=label,
                subdir=True,
                base_dir=web_dir)
            sizes_paths.append(saved_file.name)

        manifest = manifest_tool.get_json(sizes=sizes_paths)
        self.dump_json(manifest, json_dir)

        logger.debug(f"Manifest Data: {manifest}")
        logger.info(f"--- Finished: {manifest_tool.name} ---")


class ImageManifest:
    """Extracts metadata from filename: 'Name-MonthYear.ext'."""

    def __init__(self, path: Path):
        self.path = path
        stem = path.stem  # Filename without extension
        parts = stem.split("-")
        if len(parts) < 2:
            raise ValueError(
                f"Filename '{
                    path.name}' must follow 'Name-MonthYear' format.")

        self.name = parts[0]
        self.raw_date = parts[1]

    def parse_date(self) -> tuple[int, str]:
        """Parses 'Oct2023' into (2023, 'October')."""
        year_str = "".join(filter(str.isdigit, self.raw_date))
        month_part = self.raw_date.replace(year_str, "").capitalize()

        year = int(year_str) if year_str else 0
        month_name = ""

        for i, m in enumerate(calendar.month_name):
            if m and month_part.lower() in m.lower():
                month_name = m
                break

        return year, month_name

    def get_json(self, sizes: list[str]) -> dict:
        year, month = self.parse_date()
        return {
            "name": self.name,
            "year": year,
            "month": month,
            "description": "",
            "folder": self.path.parent.name,
            "sizes": sizes
        }


def process_image(img_path: Path, debug: bool = False) -> None:
    """Processes a single image file."""
    if img_path.suffix.lower() not in ['.png', '.jpg', '.jpeg']:
        return

    try:
        ImageFile(img_path).generate_web(debug=debug)
    except Exception as e:
        logger.error(f"Error processing {img_path}: {e}")


def process_category(category: str) -> None:
    """Processes all images in a given category directory."""
    cat_dir = SOURCE_RENDERS_DIR / category
    if not cat_dir.is_dir():
        return

    logger.info(f"Category: {category}")
    for img_path in cat_dir.iterdir():
        process_image(img_path)


def main():
    if DEBUG:
        logger.setLevel(logging.DEBUG)
        # Test with a specific PNG if it exists, exit out if otherwise
        test_file = SOURCE_RENDERS_DIR / "env" / "Enchanting Room-Oct2023.png"
        if not test_file.exists():
            logger.error(f"Test file not found: {test_file}")
            return

        process_image(test_file, debug=True)
        return

    for category in CATEGORIES:
        process_category(category)


if __name__ == "__main__":
    main()
