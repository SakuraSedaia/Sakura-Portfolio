import json
import logging
from pathlib import Path
from PIL import Image
import jxlpy
from tqdm import tqdm
import calendar

import config_loader
from common import ensure_dir, is_transparent, setup_logging, save_jxl

logger = logging.getLogger(__name__)

class ImageFile:
    def __init__(self, img_path: Path, source_renders_dir: Path):
        self.img_path = img_path
        self.source_renders_dir = source_renders_dir
        self.name, self.month, self.year = self._parse_filename(img_path.name)
        self.slug = self.name.lower().replace(" ", "-")

    def _parse_filename(self, filename: str):
        """Parses Name-MonthYear.png format."""
        stem = Path(filename).stem
        parts = stem.split("-")
        if len(parts) < 2:
            return stem, "Unknown", 2000
        
        name = "-".join(parts[:-1])
        date_part = parts[-1]
        
        # Split Month and Year
        month_str = ""
        year_str = ""
        for i, char in enumerate(date_part):
            if char.isdigit():
                month_str = date_part[:i]
                year_str = date_part[i:]
                break
        
        try:
            year = int(year_str)
        except ValueError:
            year = 2000
            
        return name, month_str.capitalize(), year

    def save_image(self, max_width: int, label: str, target_dir: Path, pbar=None, skip_save=False):
        """Resizes and saves image as JXL with fallback."""
        if pbar:
            rel_path = self.img_path.relative_to(self.source_renders_dir)
            pbar.set_postfix_str(f"Rendering [{label}.jxl] {rel_path}")

        target_base = target_dir / self.slug / f"{self.name.replace(' ', '_')}-{label}"
        jxl_path = target_base.with_suffix(".jxl")
        
        if jxl_path.exists():
            logger.debug(f"Skipping: {jxl_path.name} (exists)")
            # Return filenames even if skipped for manifest completeness
            with Image.open(self.img_path) as img:
                ext = ".png" if is_transparent(img) else ".jpg"
            return [jxl_path.name, target_base.with_suffix(ext).name]

        if skip_save:
            return []

        ensure_dir(target_base.parent)
        
        with Image.open(self.img_path) as img:
            # Resize
            ratio = max_width / float(img.width)
            height = int(float(img.height) * float(ratio))
            img_resized = img.resize((max_width, height), Image.LANCZOS)
            
            # Save JXL using common utility
            save_jxl(img_resized, jxl_path, quality=config_loader.QUALITY)
            
            # Save Fallback
            if is_transparent(img_resized):
                fallback_path = target_base.with_suffix(".png")
                img_resized.save(fallback_path, optimize=True)
            else:
                img_resized = img_resized.convert("RGB")
                fallback_path = target_base.with_suffix(".jpg")
                img_resized.save(fallback_path, "JPEG", quality=config_loader.QUALITY, optimize=True)
            
            return [jxl_path.name, fallback_path.name]

    def dump_json(self, sizes_dict: dict, lib_dir: Path, skip_save=False):
        """Generates individual JSON manifest."""
        target_path = lib_dir / f"{self.slug}.json"
        
        # Preserve existing description
        description = ""
        if target_path.exists():
            try:
                with open(target_path, "r") as f:
                    old_data = json.load(f)
                    description = old_data.get("description", "")
            except: pass

        data = {
            "name": self.name,
            "year": self.year,
            "month": self.month,
            "description": description,
            "sizes": sizes_dict
        }

        if skip_save:
            return

        ensure_dir(target_path.parent)
        with open(target_path, "w") as f:
            json.dump(data, f, indent=4)

def process_category(cat_config: dict):
    """Processes a render category."""
    label = cat_config["label"]
    folder = cat_config["folder"]
    
    if config_loader.DEBUG:
        source_dir = config_loader.TESTING_SOURCE_DIR / "renders" / folder
        output_dir = config_loader.DEBUG_RENDERS_DIR / folder
        lib_dir = config_loader.DEBUG_LIB_DIR / folder
    else:
        source_dir = config_loader.SOURCE_RENDERS_DIR / folder
        output_dir = config_loader.PUBLIC_IMAGES_DIR / "renders" / folder
        lib_dir = config_loader.LIB_DIR / folder

    if not source_dir.exists():
        logger.warning(f"Category source not found: {source_dir}")
        return

    images = list(source_dir.glob("*.png")) + list(source_dir.glob("*.jpg"))
    if not images:
        return

    pbar = tqdm(images, desc=f"Processing Category: {label}", unit="img", dynamic_ncols=True)
    processed_count = 0
    
    for img_path in pbar:
        img_file = ImageFile(img_path, source_dir.parent.parent)
        
        skip_save = False
        if config_loader.DEBUG and processed_count > 0:
            skip_save = True
            logger.debug(f"DEBUG Mode: Skipping save for {img_path.name}")

        sizes_manifest = []
        for size_label, width in config_loader.RENDER_SIZES.items():
            files = img_file.save_image(width, size_label, output_dir, pbar, skip_save)
            sizes_manifest.extend(files)
        
        img_file.dump_json(sizes_manifest, lib_dir, skip_save)
        
        if not skip_save:
            processed_count += 1

    pbar.set_description(f"Finished Category: {label}")

def run():
    setup_logging()
    logger.info("Starting Render Map V2.2 Pipeline")
    for cat in config_loader.RENDER_CATEGORIES:
        process_category(cat)
    logger.info("Render Map processing complete.")

if __name__ == "__main__":
    run()
