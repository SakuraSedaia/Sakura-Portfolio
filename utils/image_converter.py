import argparse
import os
import shutil
from pathlib import Path

import cv2
import numpy as np
from jxlpy import JXLPyDecoder, JXLPyError

PROJECT_ROOT = Path(__file__).resolve().parents[1]
ASSET_ROOT = PROJECT_ROOT / "public"
SCRATCH_DIRECTORY = PROJECT_ROOT / ".image-backup"
IMAGE_ROOT = ASSET_ROOT / "images"
SUPPORTED_EXTENSIONS = (
    ".jpg",
    ".jpeg",
    ".png",
    ".webp",
    ".jxl",
)


def parse_args():
    parser = argparse.ArgumentParser(
        description="Convert images under public/images to PNG when transparent, otherwise JPEG."
    )
    parser.add_argument(
        "--apply",
        action="store_true",
        help="Write converted images and move originals into the backup directory. Without this, only prints the planned changes.",
    )
    parser.add_argument(
        "--backup-dir",
        type=Path,
        default=SCRATCH_DIRECTORY,
        help=f"Directory used to store original files. Defaults to {SCRATCH_DIRECTORY}.",
    )
    parser.add_argument(
        "--quality",
        type=int,
        default=75,
        help="JPEG quality to use for non-transparent images.",
    )
    return parser.parse_args()


def image_has_transparency(img):
    if len(img.shape) < 3 or img.shape[2] < 4:
        return False

    return bool(np.any(img[:, :, 3] < 255))


def read_jxl_image(file):
    decoder = JXLPyDecoder(file.read_bytes())

    try:
        info = decoder.get_info()
        if info["bits_per_sample"] != 8:
            print(f"Skipping unsupported JXL bit depth: {file}")
            return None

        colorspace = decoder.get_colorspace()
        frame = decoder.get_frame()
        if frame is None:
            print(f"Skipping JXL without decodable frame: {file}")
            return None

        width = info["xsize"]
        height = info["ysize"]

        if colorspace == "RGBA":
            img = np.frombuffer(frame, dtype=np.uint8).reshape((height, width, 4))
            return cv2.cvtColor(img, cv2.COLOR_RGBA2BGRA)

        if colorspace == "RGB":
            img = np.frombuffer(frame, dtype=np.uint8).reshape((height, width, 3))
            return cv2.cvtColor(img, cv2.COLOR_RGB2BGR)

        if colorspace == "LA":
            img = np.frombuffer(frame, dtype=np.uint8).reshape((height, width, 2))
            luminance = img[:, :, 0]
            alpha = img[:, :, 1]
            return cv2.merge((luminance, luminance, luminance, alpha))

        if colorspace == "L":
            return np.frombuffer(frame, dtype=np.uint8).reshape((height, width))

        print(f"Skipping unsupported JXL colorspace {colorspace}: {file}")
        return None
    finally:
        decoder.close()


def read_image(file):
    if file.suffix.lower() == ".jxl":
        try:
            return read_jxl_image(file)
        except JXLPyError as error:
            print(f"Skipping unreadable JXL image: {file} ({error})")
            return None

    return cv2.imread(str(file), cv2.IMREAD_UNCHANGED)


def collect_images():
    return sorted(
        path
        for path in IMAGE_ROOT.rglob("*")
        if path.is_file() and path.suffix.lower() in SUPPORTED_EXTENSIONS
    )


def backup_path_for(file, backup_dir):
    return backup_dir / file.relative_to(IMAGE_ROOT)


def file_was_backed_up(file, backup_dir):
    return backup_path_for(file, backup_dir).exists()


def source_peer_was_backed_up(file, backup_dir):
    backup_path = backup_path_for(file, backup_dir)
    return any(
        backup_path.with_suffix(suffix).exists()
        for suffix in SUPPORTED_EXTENSIONS
        if suffix != file.suffix.lower()
    )


def existing_standard_peer(file):
    for suffix in (".png", ".jpg", ".jpeg"):
        peer = file.with_suffix(suffix)
        if peer.exists() and peer != file:
            return peer

    return None


def move_original_to_backup(file, backup_dir):
    backup_path = backup_path_for(file, backup_dir)
    backup_path.parent.mkdir(parents=True, exist_ok=True)

    if backup_path.exists():
        raise FileExistsError(f"Backup already exists: {backup_path}")

    shutil.move(file, backup_path)
    return backup_path


def save_converted_image(img, target, quality):
    tmp_target = target.with_name(f".{target.stem}.tmp{target.suffix}")

    try:
        if target.suffix == ".png":
            ok = cv2.imwrite(str(tmp_target), img, [cv2.IMWRITE_PNG_COMPRESSION, 9])
        else:
            if len(img.shape) == 3 and img.shape[2] == 4:
                img = cv2.cvtColor(img, cv2.COLOR_BGRA2BGR)

            ok = cv2.imwrite(
                str(tmp_target),
                img,
                [cv2.IMWRITE_JPEG_QUALITY, quality, cv2.IMWRITE_JPEG_OPTIMIZE, 1],
            )

        if not ok:
            raise RuntimeError(f"OpenCV failed to write image: {target}")

        os.replace(tmp_target, target)
    finally:
        if tmp_target.exists():
            tmp_target.unlink()


def convert_image(file, backup_dir, quality, dry_run):
    if file.suffix.lower() in (".jxl", ".webp"):
        peer = existing_standard_peer(file)
        if peer is not None:
            backup_path = backup_path_for(file, backup_dir)
            if backup_path.exists():
                print(f"Skipping already backed up image: {file}")
                return False

            print(f"Move stale source: {file}")
            print(f"Existing standard peer: {peer}")
            print(f"Backup: {backup_path}")

            if not dry_run:
                move_original_to_backup(file, backup_dir)

            return True

    img = read_image(file)
    if img is None:
        peer = existing_standard_peer(file)
        if peer is None:
            print(f"Skipping unsupported or unreadable image: {file}")
            return False

        backup_path = backup_path_for(file, backup_dir)
        if backup_path.exists():
            print(f"Skipping already backed up image: {file}")
            return False

        print(f"Move stale source: {file}")
        print(f"Existing standard peer: {peer}")
        print(f"Backup: {backup_path}")

        if not dry_run:
            move_original_to_backup(file, backup_dir)

        return True

    target = file.with_suffix(".png" if image_has_transparency(img) else ".jpg")
    backup_path = backup_path_for(file, backup_dir)

    if file_was_backed_up(file, backup_dir) or source_peer_was_backed_up(file, backup_dir):
        print(f"Skipping already backed up image: {file}")
        return False

    if target.exists() and target != file:
        print(f"Skipping existing target: {target}")
        return False

    action = "Optimize" if target == file else "Convert"
    print(f"{action}: {file} -> {target}")
    print(f"Backup: {backup_path}")

    if dry_run:
        return True

    if backup_path.exists():
        raise FileExistsError(f"Backup already exists: {backup_path}")

    if target == file:
        backup_path.parent.mkdir(parents=True, exist_ok=True)
        shutil.copy2(file, backup_path)
        save_converted_image(img, target, quality)
    else:
        save_converted_image(img, target, quality)
        move_original_to_backup(file, backup_dir)

    return True


if __name__ == "__main__":
    args = parse_args()
    dry_run = not args.apply
    images_to_convert = collect_images()

    print(f"Mode: {'dry run' if dry_run else 'apply'}")
    print(f"Found {len(images_to_convert)} image files under {IMAGE_ROOT}")

    converted = 0
    for i, file in enumerate(images_to_convert, start=1):
        print(f"\n[{i}/{len(images_to_convert)}]")
        if convert_image(file, args.backup_dir, args.quality, dry_run):
            converted += 1

    summary_action = "Planned" if dry_run else "Applied"
    print(f"\n{summary_action} {converted} image updates.")
    if dry_run:
        print("Run again with --apply to write files.")
