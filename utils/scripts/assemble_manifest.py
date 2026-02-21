import json
import logging
from pathlib import Path
from tqdm import tqdm
import calendar

import config_loader
from common import ensure_dir, setup_logging

logger = logging.getLogger(__name__)

def assemble_manifest():
    if config_loader.DEBUG:
        lib_path = config_loader.DEBUG_LIB_DIR
        output_file = config_loader.DEBUG_MANIFEST_PATH
    else:
        lib_path = config_loader.LIB_DIR
        output_file = config_loader.RENDER_MAP_OUTPUT

    if not lib_path.exists():
        logger.error(f"Lib directory not found: {lib_path}")
        return

    final_manifest = []
    
    # Track categories in order from config
    cat_configs = {cat["path"]: cat["label"] for cat in config_loader.RENDER_CATEGORIES}
    
    pbar_cat = tqdm(config_loader.RENDER_CATEGORIES, desc="Assembling categories", unit="cat", dynamic_ncols=True)
    for cat in pbar_cat:
        cat_label = cat["label"]
        cat_rel_path = cat["path"]
        cat_folder = cat["folder"]
        
        cat_lib_path = lib_path / cat_folder
        if not cat_lib_path.exists():
            continue

        images_in_cat = []
        json_files = list(cat_lib_path.glob("*.json"))
        
        seen_images = set() # For deduplication
        
        pbar_files = tqdm(json_files, desc=f"Reading: {cat_label}", unit="json", leave=False, dynamic_ncols=True)
        for json_path in pbar_files:
            rel_json_path = json_path.relative_to(lib_path)
            pbar_files.set_postfix_str(f"Reading [.json] {rel_json_path}")
            
            try:
                with open(json_path, "r") as f:
                    data = json.load(f)
                
                # Deduplication key
                img_key = (data["name"], data["year"], data["month"])
                if img_key in seen_images:
                    continue
                seen_images.add(img_key)
                
                images_in_cat.append(data)
            except Exception as e:
                logger.error(f"Error reading {json_path}: {e}")

        # Sort images by date (Descending)
        month_map = {name: i for i, name in enumerate(calendar.month_name)}
        images_in_cat.sort(
            key=lambda x: (x["year"], month_map.get(x["month"], 0)),
            reverse=True
        )

        final_manifest.append({
            "label": cat_label,
            "path": f"/{cat_rel_path}/",
            "images": images_in_cat
        })
        
        pbar_files.set_description(f"Finished: {cat_label}")

    ensure_dir(output_file.parent)
    with open(output_file, "w") as f:
        json.dump(final_manifest, f, indent=4)
    
    pbar_cat.set_description("Finished assembling all categories")
    logger.info(f"Manifest assembled successfully: {output_file}")

if __name__ == "__main__":
    setup_logging()
    assemble_manifest()
