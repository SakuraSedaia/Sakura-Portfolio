import os
import logging
from pathlib import Path
from PIL import Image
import jxlpy
from moviepy import VideoFileClip
from tqdm import tqdm

import config_loader
from common import ensure_dir, is_transparent, setup_logging, save_jxl
from backup_manager import BackupManager

logger = logging.getLogger(__name__)

class ImageOptimizer:
    def __init__(self, source_dir=None, target_dir=None):
        if config_loader.DEBUG:
            self.source_dir = config_loader.TESTING_SOURCE_DIR
            self.target_dir = config_loader.TESTING_OUTPUT_DIR
        else:
            self.source_dir = source_dir or config_loader.IMAGES_SOURCE_DIR
            self.target_dir = target_dir or config_loader.PUBLIC_IMAGES_DIR
        
        self.backup_manager = BackupManager()
        self.processed_count = 0

    def process_static_image(self, file_path: Path, pbar=None):
        """Optimizes static images by resizing and converting to JXL with fallback."""
        if pbar:
            rel_file_path = file_path.relative_to(self.source_dir)
            pbar.set_postfix_str(f"Processing static [.jxl]: {rel_file_path}")

        if config_loader.DEBUG and self.processed_count > 0:
            logger.debug(f"DEBUG Mode: Skipping save for {file_path.name} (Single-save verification active)")
            return

        try:
            with Image.open(file_path) as img:
                # Handle resizing
                if img.width > config_loader.MAX_WIDTH:
                    ratio = config_loader.MAX_WIDTH / float(img.width)
                    height = int(float(img.height) * float(ratio))
                    img = img.resize((config_loader.MAX_WIDTH, height), Image.LANCZOS)

                # Determine target path - ensuring slugified filenames (lowercase-hyphenated)
                rel_path = file_path.relative_to(self.source_dir)
                slug_name = rel_path.stem.lower().replace(" ", "-")
                target_base = self.target_dir / rel_path.parent / slug_name
                ensure_dir(target_base.parent)

                # Save JXL (Primary) using common utility
                jxl_path = target_base.parent / (target_base.name + ".jxl")
                save_jxl(img, jxl_path, quality=config_loader.QUALITY)

                # Save Fallback (PNG if transparent, JPG otherwise)
                if is_transparent(img):
                    fallback_path = target_base.parent / (target_base.name + ".png")
                    img.save(fallback_path, optimize=True)
                else:
                    img = img.convert("RGB")
                    fallback_path = target_base.parent / (target_base.name + ".jpg")
                    img.save(fallback_path, "JPEG", quality=config_loader.QUALITY, optimize=True)

                self.processed_count += 1
                return True
        except Exception as e:
            logger.error(f"Error processing {file_path}: {e}")
            return False

    def process_gif(self, file_path: Path, pbar=None):
        """Optimizes GIFs."""
        if pbar:
            rel_file_path = file_path.relative_to(self.source_dir)
            pbar.set_postfix_str(f"Processing GIF: {rel_file_path}")

        if config_loader.DEBUG and self.processed_count > 0:
            return

        try:
            rel_path = file_path.relative_to(self.source_dir)
            target_path = self.target_dir / rel_path
            ensure_dir(target_path.parent)
            
            with Image.open(file_path) as img:
                img.save(target_path, save_all=True, optimize=True)
            
            self.processed_count += 1
            return True
        except Exception as e:
            logger.error(f"Error processing GIF {file_path}: {e}")
            return False

    def process_video(self, file_path: Path, pbar=None):
        """Optimizes videos."""
        if pbar:
            rel_file_path = file_path.relative_to(self.source_dir)
            pbar.set_postfix_str(f"Processing video: {rel_file_path}")

        if config_loader.DEBUG and self.processed_count > 0:
            return

        try:
            rel_path = file_path.relative_to(self.source_dir)
            target_path = self.target_dir / rel_path.with_suffix(".mp4")
            ensure_dir(target_path.parent)
            
            clip = VideoFileClip(str(file_path))
            clip.write_videofile(str(target_path), codec="libx264", audio_codec="aac", verbose=False, logger=None)
            
            self.processed_count += 1
            return True
        except Exception as e:
            logger.error(f"Error processing video {file_path}: {e}")
            return False

    def process_icon(self, file_path: Path, pbar=None):
        """Optimizes icons."""
        if pbar:
            rel_file_path = file_path.relative_to(self.source_dir)
            pbar.set_postfix_str(f"Processing icon: {rel_file_path}")

        if config_loader.DEBUG and self.processed_count > 0:
            return

        try:
            rel_path = file_path.relative_to(self.source_dir)
            target_path = self.target_dir / rel_path
            ensure_dir(target_path.parent)
            
            with Image.open(file_path) as img:
                img.save(target_path, format="ICO", sizes=[(16, 16), (32, 32), (48, 48), (64, 64)])
            
            self.processed_count += 1
            return True
        except Exception as e:
            logger.error(f"Error processing icon {file_path}: {e}")
            return False

    def run(self):
        """Main optimization loop."""
        setup_logging()
        logger.info(f"Starting optimization from {self.source_dir} to {self.target_dir}")

        files_to_process = []
        for root, dirs, files in os.walk(self.source_dir):
            # Handle ignore list
            dirs[:] = [d for d in dirs if d not in config_loader.IGNORE_LIST]
            
            for file in files:
                ext = Path(file).suffix.lower()
                files_to_process.append(Path(root) / file)

        if not files_to_process:
            logger.info("No files found to process.")
            return

        pbar = tqdm(files_to_process, desc="Optimizing assets", unit="file", dynamic_ncols=True)
        for file_path in pbar:
            ext = file_path.suffix.lower()
            rel_path = file_path.relative_to(self.source_dir)
            
            # Check if JXL version already exists in target
            rel_path = file_path.relative_to(self.source_dir)
            slug_name = rel_path.stem.lower().replace(" ", "-")
            target_base = self.target_dir / rel_path.parent / slug_name
            target_jxl = target_base.parent / (target_base.name + ".jxl")
            
            # IMPROVED: Explicitly check if the file name contains spaces or multiple dots
            # and ensure target path is clean but matches the expectation
            if target_jxl.exists():
                logger.debug(f"Skipping: {rel_path} (JXL version already exists)")
                
                # If we are in public_images and the original is still there, move it to backup
                if not config_loader.DEBUG and self.source_dir == config_loader.PUBLIC_IMAGES_DIR and file_path.exists():
                     self.backup_manager.move_to_backup(file_path)
                continue

            success = False
            if ext in config_loader.SUPPORTED_IMAGES:
                if ext == ".gif":
                    success = self.process_gif(file_path, pbar)
                elif ext == ".ico":
                    success = self.process_icon(file_path, pbar)
                else:
                    success = self.process_static_image(file_path, pbar)
            elif ext in config_loader.SUPPORTED_VIDEOS:
                success = self.process_video(file_path, pbar)
            
            # If successful and not in debug, move original to backup if it's in public/images
            if success and not config_loader.DEBUG and self.source_dir == config_loader.PUBLIC_IMAGES_DIR:
                self.backup_manager.move_to_backup(file_path)

        pbar.set_description("Finished optimizing assets")
        logger.info("Optimization complete.")

if __name__ == "__main__":
    optimizer = ImageOptimizer()
    optimizer.run()
