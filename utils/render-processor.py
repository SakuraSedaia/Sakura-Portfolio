# optimizes and converts images to the desired image format. Ignores files in minecraft-renders since they will have a different process.

from pathlib import Path
import os
from PIL import Image, ImageOps
import pillow_jxl
from datetime import datetime
import logging
import json

logger = logging.getLogger(__name__)
jxl_reader = pillow_jxl  # Only to get the Linter to shut up about unused imports)

def initializeLogger():
    logging.basicConfig(
        level=logging.INFO,
        format="%(asctime)s [%(levelname)s] %(message)s",
        handlers=[
            logging.FileHandler("render-processor.log"),
            logging.StreamHandler()
        ]
    )


JSON_DATA = {
    "$schema": "http://json-schema.org/draft-07/schema",
    "images": []
}
PUBLIC_PATH = Path(os.path.abspath("../public"))
SOURCE_PATH = Path(os.path.abspath("../src"))
REPO_PATH = Path(os.path.abspath("../"))
IMAGE_PATH = Path(os.path.abspath("./images/renders"))
IMAGE_DESTINATION = Path(os.path.abspath(f"{PUBLIC_PATH}/images/renders"))
JSON_PATH = Path(os.path.abspath(f"{SOURCE_PATH}/data/json/projects/renders.json"))
IGNORED_FORMATS = (  # Ignores files with the following formats, typically project files
    ".afphoto",
    ".bbmodel",
)
OVERWRITE = False


class RenderProcessor:
    def __init__(self):
        pass

    def process(self, dry: bool = False, json_only: bool = False):
        """
        Processes the renders in the IMAGE_PATH directory and saves the JSON data to JSON_PATH.
        :return: None
        """
        logger.info("-" * 80)
        logger.info("Starting render processor")
        logger.info("-" * 80)

        path = Path(f"{IMAGE_PATH}").absolute()
        # print(category)
        for filepath, _, fileArray in os.walk(path):
            for file in fileArray:
                input_filepath = Path(f"{filepath}/{file}")
                relpath = Path(input_filepath).relative_to(path)
                output_filepath = Path(f"{IMAGE_DESTINATION}/{relpath}".replace("-lg", "")).with_suffix(".avif")

                file_exists = output_filepath.exists()

                if file.endswith(IGNORED_FORMATS):
                    logger.info("Skipping %s", input_filepath.relative_to(IMAGE_PATH))
                    continue

                if not output_filepath.parent.exists():
                    output_filepath.parent.mkdir(parents=True)

                if not output_filepath.exists() and not dry:
                    # IMAGE PROCESSING
                    self.save_web_avif(input_filepath, output_filepath)
                    logger.info(
                        f"Processing {input_filepath.relative_to(REPO_PATH)} -> {output_filepath.relative_to(REPO_PATH)}")
                elif dry:
                    logger.info(
                        f"Processing {input_filepath.relative_to(REPO_PATH)} -> {output_filepath.relative_to(REPO_PATH)}")

                self.append_render_entry(
                    json_data=JSON_DATA,
                    file_name=output_filepath.name.removesuffix(".avif"),
                    input_filepath=input_filepath,
                    final_path=output_filepath,
                    public_path=PUBLIC_PATH,
                    item_json_path=JSON_PATH
                )

        if dry == False:
            logger.info("Saving JSON data to %s", JSON_PATH)
            with open(JSON_PATH, "w", encoding="utf-8") as f:
                json.dump(JSON_DATA, f, indent=4)
        return None

    @staticmethod
    def capitalize_words(sentence: str) -> str:
        return " ".join([word.capitalize() for word in sentence.split()])

    def append_render_entry(
            self,
            json_data: dict,
            file_name: str,
            input_filepath: Path,
            final_path: Path,
            public_path: Path,
            item_json_path: str | Path
    ) -> dict:
        """
        Reads existing JSON data to preserve user-modified fields (description, tags, link, date),
        constructs a new render entry, and appends it to the provided json_data.

        Args:
            json_data: The dictionary for the current run being built (must contain an "images" list).
            file_name: The slugified name of the file (e.g., 'sakura-pride').
            input_filepath: Pathlib object of the source file (used to calculate fallback date).
            final_path: Pathlib object of the destination file.
            public_path: Pathlib object of the public directory (used for relative pathing).
            item_json_path: Path to the renders.json file to read previous states from.
        """

        # 1. Safely read the existing data to preserve old configurations
        old_data = {"images": []}
        if os.path.exists(item_json_path):
            with open(item_json_path, "r", encoding="utf-8") as f:
                try:
                    old_data = json.load(f)
                except json.JSONDecodeError:
                    pass  # Handle case where file exists but is empty/corrupt

        # 2. Search for the existing item in the array
        existing_item = {}
        for item in old_data.get("images", []):
            if file_name in item:
                existing_item = item[file_name]
                break

        # 3. Establish default values
        default_date = datetime.fromtimestamp(input_filepath.stat().st_mtime).strftime('%Y-%m-%d')
        default_tags = ["minecraft", "blender"]
        default_desc = ""

        # 4. Construct the item, using .get() to preserve old data or apply defaults
        item_json = {
            file_name: {
                "name": self.capitalize_words(file_name.replace("-", " ").replace("_", " ")),
                "filename": str(final_path.relative_to(public_path)),
                "description": existing_item.get("description", default_desc),
                "tags": existing_item.get("tags", default_tags),
                "link": existing_item.get("link", ""),
                "date": existing_item.get("date", default_date)
            }
        }

        # 5. Append to your current run's dataset
        json_data["images"].append(item_json)

        return json_data

    @staticmethod
    def save_web_avif(input_filepath: str | Path, output_filepath: str | Path) -> None:
        input_filepath = Path(input_filepath)
        output_filepath = Path(output_filepath)
        if output_filepath.exists() and not OVERWRITE:
            logger.info(f"File Exists: {output_filepath}")
            return

        with Image.open(input_filepath) as img:
            img = ImageOps.exif_transpose(img)

            # Preserve transparency for web UI assets; otherwise use RGB.
            if img.mode in ("RGBA", "LA") or "transparency" in img.info:
                img = img.convert("RGBA")
            else:
                img = img.convert("RGB")

            img.save(
                output_filepath,
                format="AVIF",
                quality=70,  # good web default; raise to 60-70 for hero images
                speed=4,  # slower than default, usually better compression
                subsampling="4:2:0",  # best default for photos/web images
                range="full",
                autotiling=True,
                max_threads=0,  # no explicit limit
            )


if __name__ == "__main__":
    initializeLogger()
    RenderProcessor().process()
