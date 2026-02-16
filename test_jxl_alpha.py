import jxlpy
from PIL import Image
from pathlib import Path
import sys

def test_jxl_alpha():
    source_path = Path('utils/pipeline_sources/images/rig-headers/SACR/E7.2 Full.png')
    output_path = Path('test_alpha.jxl')

    if not source_path.exists():
        print(f"Source not found: {source_path}")
        return

    img = Image.open(source_path)
    print(f"Mode: {img.mode}, Size: {img.size}")

    # The current save_jxl logic:
    if img.mode != "RGBA" and img.mode != "RGB":
        img = img.convert("RGBA") if "A" in img.getbands() else img.convert("RGB")
    
    num_channels = len(img.getbands())
    print(f"Channels: {num_channels}")

    try:
        # Test with direct pixel passing and correct channels
        pixels = img.tobytes()
        print(f"Pixel data length: {len(pixels)}")
        
        # Try quality=100 (lossless)
        encoder = jxlpy.JXLPyEncoder(100, img.size, 4)
        encoder.add_frame(pixels)
        out = encoder.get_output()
        encoder.close()
        
        with open("test_lossless.jxl", "wb") as f:
            f.write(out)

        dec = jxlpy.JXLPyDecoder(out)
        print(f"Lossless info: {dec.get_info()}")
    except Exception as e:
        print(f"Error: {e}")

if __name__ == "__main__":
    test_jxl_alpha()
