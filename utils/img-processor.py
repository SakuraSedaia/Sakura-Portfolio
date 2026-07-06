# optimizes and converts images to the desired image format. Ignores files in minecraft-renders since they will have a different process.

from pathlib import Path
import os
import pillow_jxl
from PIL import Image, ImageOps
import shutil

IMAGE_PATH = Path(os.path.abspath("./images/"))
IMAGE_DESTINATION = Path(os.path.abspath("../public/images/"))
IGNORED_FORMATS = (  # Ignores files with the following formats, typically project files
    ".afphoto",
    ".bbmodel"
)
IGNORED_DIRECTORIES = (  # Relative to IMAGE_PATH
    "renders"
)
BYPASS_FORMATS = (  # Copies files with the following formats without processing
    ".svg",
    ".ico"
)
OVERWRITE = False


class RenderProcessor:
    def __init__(self):
        pass

    def process(self):
        path = Path(f"{IMAGE_PATH}").absolute()
        # print(category)
        for filepath, _, fileArray in os.walk(path):
            for file in fileArray:
                input_filepath = Path(f"{filepath}/{file}")
                relpath = Path(input_filepath).relative_to(path)
                output_filepath = Path(f"{IMAGE_DESTINATION}/{relpath}")

                if file.endswith(IGNORED_FORMATS) | str(relpath).startswith(IGNORED_DIRECTORIES):
                    print(f"Skipping {input_filepath}")
                    continue

                if not output_filepath.parent.exists():
                    output_filepath.parent.mkdir(parents=True)

                if not output_filepath.exists():
                    # IMAGE PROCESSING
                    if file.endswith(BYPASS_FORMATS):
                        print(f"Copying {input_filepath} -> {output_filepath.parent}")
                        shutil.copy2(input_filepath, output_filepath.parent)
                        continue
                    else:
                        self.save_web_avif(input_filepath, output_filepath)
                else:
                    continue

        return None

    @staticmethod
    def save_web_avif(input_filepath: str | Path, output_filepath: str | Path) -> None:
        input_filepath = Path(input_filepath)
        output_filepath = Path(output_filepath.with_suffix(".avif"))
        print(f"Processing {input_filepath} -> {output_filepath}")
        if output_filepath.exists() and not OVERWRITE:
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
    RenderProcessor().process()
