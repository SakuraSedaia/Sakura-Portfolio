import os
import logging
import platform
from pathlib import Path
import jxlpy
from tqdm import tqdm

SCRIPTS_DIR = Path(__file__).parent
PROJECT_ROOT = SCRIPTS_DIR.parent.parent

def clear_screen():
    """Clears the terminal screen."""
    if platform.system() == "Windows":
        os.system("cls")
    else:
        os.system("clear")

def setup_logging(level=None):
    """Configures global logging for the pipeline."""
    from config_loader import DEBUG
    if level is None:
        level = logging.DEBUG if DEBUG else logging.INFO
        
    # Remove existing handlers to avoid duplicates
    root_logger = logging.getLogger()
    for handler in root_logger.handlers[:]:
        root_logger.removeHandler(handler)

    # Disable PIL and other verbose libraries
    logging.getLogger("PIL").setLevel(logging.INFO)
    logging.getLogger("moviepy").setLevel(logging.INFO)

    class TqdmLoggingHandler(logging.Handler):
        def emit(self, record):
            try:
                msg = self.format(record)
                tqdm.write(msg)
                self.flush()
            except Exception:
                self.handleError(record)

    handler = TqdmLoggingHandler()
    formatter = logging.Formatter('%(asctime)s | %(levelname)s | %(message)s', datefmt='%H:%M:%S')
    handler.setFormatter(formatter)
    
    root_logger.addHandler(handler)
    root_logger.setLevel(level)

def ensure_dir(path: Path):
    """Ensures a directory exists."""
    path.mkdir(parents=True, exist_ok=True)

def is_transparent(img):
    """Checks if a PIL Image has transparency."""
    if img.mode in ('RGBA', 'LA') or (img.mode == 'P' and 'transparency' in img.info):
        return True
    return False

def save_jxl(img, path, quality=85):
    """Saves a PIL Image as JXL using jxlpy encoder directly."""
    # Convert image to bytes
    if img.mode != "RGBA" and img.mode != "RGB":
        img = img.convert("RGBA") if "A" in img.getbands() else img.convert("RGB")
    
    num_channels = len(img.getbands())
    # JXLPyEncoder(quality, (width, height), num_channels)
    encoder = jxlpy.JXLPyEncoder(quality, img.size, num_channels)
    encoder.add_frame(img.tobytes())
    
    with open(path, "wb") as f:
        f.write(encoder.get_output())
    encoder.close()

def check_dependencies():
    """Checks if all modules in requirements.txt are installed."""
    import importlib.util
    req_file = SCRIPTS_DIR / "requirements.txt"
    if not req_file.exists():
        return []
    
    missing = []
    with open(req_file, "r") as f:
        for line in f:
            line = line.strip()
            if not line or line.startswith("#"):
                continue
            # Simple package name extraction
            pkg = line.split("==")[0].split(">")[0].split("<")[0].strip().lower()
            if pkg == "pillow":
                pkg = "PIL"
            elif pkg == "jxlpy":
                pkg = "jxlpy"
            elif pkg == "moviepy":
                pkg = "moviepy"
            
            if importlib.util.find_spec(pkg) is None:
                missing.append(line)
    return missing
