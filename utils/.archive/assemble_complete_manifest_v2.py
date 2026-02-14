"""
This script consolidates individual image manifest JSON files into a single consolidated JSON.
Version 2: Refactored for consistency with create_render_map_v2_1.py, using pathlib and minimal nesting.
"""

import calendar
import json
import logging
from pathlib import Path

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(levelname)s: %(message)s'
)
logger = logging.getLogger(__name__)

# Constants
UTILS_DIR = Path(__file__).parent
PROJECT_ROOT = UTILS_DIR.parent
SRC_JSON_DIR = PROJECT_ROOT / "src/jsondata"

CATEGORIES = ["env", "char", "char-env"]
MANIFEST_OUTPUT_NAME = "render-map.json"

# Lib directories matching create_render_map_v2_1.py
LIB_ROOT = UTILS_DIR / "lib"
DEBUG_LIB_ROOT = UTILS_DIR / "debug_lib"

DEBUG = True

# Month name to number mapping for sorting
MONTH_TO_NUM = {name: i for i, name in enumerate(calendar.month_name) if name}


def get_image_date_key(img: dict) -> tuple[int, int]:
    """Helper to get a sortable key (year, month_number) from an image manifest."""
    year = img.get("year", 0)
    month_val = img.get("month", "")

    if isinstance(month_val, int):
        month_num = month_val
    else:
        month_num = MONTH_TO_NUM.get(month_val, 0)

    return year, month_num


def load_category_images(lib_path: Path, category: str) -> list[dict]:
    """Loads all JSON manifests for a category and returns them as a sorted list."""
    cat_dir = lib_path / category
    if not cat_dir.is_dir():
        logger.warning(f"Category directory not found: {cat_dir}")
        return []

    images = []
    for json_file in cat_dir.glob("*.json"):
        try:
            with open(json_file, 'r') as f:
                data = json.load(f)
                images.append(data)
        except (json.JSONDecodeError, IOError) as e:
            logger.error(f"Error reading {json_file}: {e}")

    # Sort images: newest first (descending year, then descending month)
    images.sort(key=get_image_date_key, reverse=True)
    return images


def assemble_manifest(debug: bool = False) -> None:
    """Consolidates individual JSON manifests into a single output file."""
    lib_path = DEBUG_LIB_ROOT if debug else LIB_ROOT
    logger.info(f"Assembling manifest from: {lib_path}")

    # Define the final structure
    # Matches original labels and paths
    combined_manifest = [
        {
            "label": "Characters in Environments",
            "path": f"/{CATEGORIES[2]}/",
            "images": load_category_images(lib_path, CATEGORIES[2]),
        },
        {
            "label": "Environments",
            "path": f"/{CATEGORIES[0]}/",
            "images": load_category_images(lib_path, CATEGORIES[0]),
        },
        {
            "label": "Character Portraits",
            "path": f"/{CATEGORIES[1]}/",
            "images": load_category_images(lib_path, CATEGORIES[1]),
        },
    ]

    output_file = SRC_JSON_DIR / MANIFEST_OUTPUT_NAME
    if debug:
        # For debug, we might want to output to the utils folder instead
        output_file = UTILS_DIR / "debug_render-map.json"

    output_file.parent.mkdir(parents=True, exist_ok=True)
    with open(output_file, 'w') as f:
        json.dump(combined_manifest, f, indent=4)

    logger.info(f"Successfully assembled manifest at {output_file}")


def main():
    if DEBUG:
        logger.setLevel(logging.DEBUG)
        assemble_manifest(debug=True)
    else:
        assemble_manifest(debug=False)


if __name__ == "__main__":
    main()
