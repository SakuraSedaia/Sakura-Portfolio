import shutil
import logging
from pathlib import Path
from tqdm import tqdm
import config_loader
from common import ensure_dir, PROJECT_ROOT

logger = logging.getLogger(__name__)

class BackupManager:
    def __init__(self, backup_dir=None):
        self.backup_dir = backup_dir or config_loader.BACKUP_DIR

    def backup_file(self, file_path: Path):
        """Backs up a single file."""
        try:
            rel_path = file_path.relative_to(PROJECT_ROOT)
            backup_path = self.backup_dir / rel_path
            ensure_dir(backup_path.parent)
            shutil.copy2(file_path, backup_path)
            logger.debug(f"Backed up: {rel_path}")
        except Exception as e:
            logger.error(f"Failed to backup {file_path}: {e}")

    def move_to_backup(self, file_path: Path):
        """Moves a file to backup."""
        try:
            rel_path = file_path.relative_to(PROJECT_ROOT)
            backup_path = self.backup_dir / rel_path
            ensure_dir(backup_path.parent)
            
            if backup_path.exists():
                file_path.unlink()
                logger.debug(f"Original removed (Backup already exists): {rel_path}")
            else:
                shutil.move(str(file_path), str(backup_path))
                logger.debug(f"Moved to backup: {rel_path}")
        except Exception as e:
            logger.error(f"Failed to move {file_path} to backup: {e}")

    def restore_backup(self, restore_src=None):
        """Restores assets from backup."""
        restore_src = Path(restore_src) if restore_src else self.backup_dir
        if not restore_src.exists():
            logger.error(f"Restore source does not exist: {restore_src}")
            return

        # Special handling for public/images - clear target first for complete overwrite
        public_images_rel = Path("public/images")
        target_public_images = PROJECT_ROOT / public_images_rel
        if (restore_src / public_images_rel).exists() and target_public_images.exists():
            logger.info(f"Clearing {target_public_images} for complete overwrite...")
            shutil.rmtree(target_public_images)
            ensure_dir(target_public_images)

        files_to_restore = []
        for root, _, files in os.walk(restore_src):
            for file in files:
                files_to_restore.append(Path(root) / file)

        if not files_to_restore:
            logger.info("No files found to restore.")
            return

        pbar = tqdm(files_to_restore, desc="Restoring assets", unit="file", dynamic_ncols=True)
        count = 0
        for backup_file_path in pbar:
            rel_path = backup_file_path.relative_to(restore_src)
            pbar.set_postfix_str(f"Restoring [original] {rel_path}")
            target_path = PROJECT_ROOT / rel_path
            ensure_dir(target_path.parent)
            shutil.copy2(backup_file_path, target_path)
            count += 1

        pbar.set_description("Finished restoring files")
        logger.info(f"Successfully restored {count} files.")

import os # Needed for os.walk in restore_backup
