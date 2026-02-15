"""
This script is meant to speed up the process of adding new images to the render list.

This is Version 2, which represents a significant overhaul of the original script (v1). It transitions from a procedural approach to a more robust, class-based structure, improving maintainability and extensibility.

Key Changes and Improvements from v1:
- Structural Overhaul: Migrated from a linear procedural script to an Object-Oriented (OOP) design using `ImageFile` and `ImageManifest` classes.
- Image Optimization & Processing:
    - Introduced automatic conversion from large PNG files to web-optimized JPEGs using OpenCV (cv2).
    - Implemented multi-size generation (lg: 1920px, md: 1600px, sm: 1200px) to support responsive design and improve page load times.
- Robust Path Handling: Replaced manual string-based path manipulation with `pathlib` for better cross-platform compatibility and cleaner code.
- Metadata Preservation:
    - Added logic to extract and preserve manually added descriptions from existing JSON manifests, ensuring user-defined content is not lost during regeneration.
    - Implemented graceful recovery for empty or malformed JSON files.
- Improved Date Parsing:
    - Replaced hardcoded month mapping with a dynamic, case-insensitive logic using the `calendar` module.
    - Standardized date extraction from filenames (format: "Name-MonthYear").
- Decoupling & Modularization:
    - Individual image manifests are now generated as separate JSON files in a library directory (`utils/lib`).
    - The final `RenderDictionary.json` assembly is now decoupled from the image processing logic, allowing for faster updates and better organization.
- Standardized Configuration: Introduced global constants for directory paths and categories, making the script easier to configure for different environments.
"""
from pathlib import Path
import json
import cv2
import calendar
import os
import logging

# Configure logging
logging.basicConfig(
	level=logging.INFO,
	format='%(levelname)s: %(message)s'
)
logger = logging.getLogger(__name__)

RENDER_DICTIONARY_FILENAME = "RenderDictionary.json"
SOURCE_RENDERS_DIR = Path(__file__).parent / "renders"
OUTPUT_WEB_IMAGES_DIR = Path(__file__).parent.parent / "public/images/renders"
OUTPUT_INDIVIDUAL_JSON_DIR = Path(__file__).parent / "lib"
CATEGORIES = ["env", "char", "char-env"]
DEBUG = True
DEBUG_WEB_IMAGES_DIR = Path(__file__).parent / "debug_renders"
DEBUG_INDIVIDUAL_JSON_DIR = Path(__file__).parent / "debug_lib"


class ImageFile:
	"""
	Handles the physical image files on disk, including reading, resizing,
	writing web-optimized versions, and managing their associated JSON metadata.
	"""
	def __init__(self, img_path: Path = None):
		"""
		Initialize an ImageFile object.

		Args:
			img_path (Path): The path to the source image file.
		"""
		self.img_path = img_path
	
	@staticmethod
	def mkdir(path: Path | str) -> None:
		"""
		Creates a directory and any necessary parent directories if they don't already exist.

		Args:
			path (Path | str): The directory path to create.
		"""
		if not Path(path).exists():
			Path(path).mkdir(parents=True, exist_ok=True)
	
	@staticmethod
	def exists(path: Path | str) -> bool:
		"""
		Checks if a given path exists.

		Args:
			path (Path | str): The path to check.

		Returns:
			bool: True if the path exists, False otherwise.
		"""
		return Path(path).exists()
	
	def filepath(self, suffix: str, base_dir: Path = OUTPUT_INDIVIDUAL_JSON_DIR) -> Path:
		"""
		Calculates the output path for the individual JSON manifest file.

		Args:
			suffix (str): The file extension to use (usually ".json").
			base_dir (Path): The base directory for the output JSON.

		Returns:
			Path: The full path to the intended JSON manifest file.
		"""
		relative_path = self.img_path.relative_to(SOURCE_RENDERS_DIR).with_suffix(suffix)
		# Replace spaces with underscores in the filename part
		return Path(base_dir) / relative_path.parent / relative_path.name.replace(" ", "_")
	
	def imagepath(self, suffix: str, base_dir: Path = OUTPUT_WEB_IMAGES_DIR) -> Path:
		"""
		Calculates the output path for the web-optimized image file.

		Args:
			suffix (str): The file extension or suffix to use (e.g., ".jpg").
			base_dir (Path): The base directory for the output image.

		Returns:
			Path: The full path to the intended web image file.
		"""
		return Path(base_dir) / self.img_path.relative_to(SOURCE_RENDERS_DIR).with_suffix(suffix)
	
	def cv2_read(self):
		"""
		Reads the source image using OpenCV.

		Returns:
			numpy.ndarray: The image data if successful.
		
		Raises:
			IOError: If the image cannot be read.
		"""
		return cv2.imread(self.img_path)
	
	def cv2_write(self, max_width: int = 1920, label: str = None, subdir: bool = False, base_dir: Path = OUTPUT_WEB_IMAGES_DIR) -> Path:
		"""
		Converts, resizes, and writes the image as a web-optimized JPEG.

		Args:
			max_width (int): The maximum width allowed for the image. Resizing preserves aspect ratio.
			label (str, optional): A suffix to append to the filename (e.g., 'lg', 'md', 'sm').
			subdir (bool): If True, creates a named subdirectory for the image sizes.
			base_dir (Path): The base directory for the output image.

		Returns:
			Path: The path where the image was written.

		Raises:
			IOError: If the image cannot be read or written.
		"""
		if not subdir:
			target_path = self.imagepath(".jpg", base_dir=base_dir)
			logger.debug(f"Set Target to {target_path}")
		else:
			name = self.filepath(suffix="").name.split("-")[0].replace("_", "-").lower()
			absolute = self.imagepath("", base_dir=base_dir).parent / name
			relative = absolute.relative_to(base_dir)
			
			self.mkdir(absolute)
			
			new_path = Path(base_dir) / relative
			file_name_clean = self.img_path.with_suffix("").name.split("-")[0].replace(" ", "_")
			target_path = new_path / file_name_clean
			logger.debug(f"Set Target to {target_path}")
			
		if label is not None:
			target_path = Path(f"{target_path}-{label}.jpg")
		else:
			target_path = Path(f"{target_path}.jpg")
			
		try:
			does_file_exist = target_path.exists()
			if does_file_exist:
				logger.info(f"Skipping {target_path.name} (already exists)")
				return target_path
			
			self.mkdir(target_path.parent)
			img = self.cv2_read()
			logger.info(f"Processing {self.img_path.name} -> {target_path.name}")
			if img is None:
				raise IOError(f"Failed to read image at {self.img_path}")
			
			# Resize the image and maintain an aspect ratio if width is over the specified maximum
			height, width = img.shape[:2]
			
			if width > max_width:
				aspect_ratio = width / height
				new_width = max_width
				new_height = int(new_width / aspect_ratio)
				img = cv2.resize(img, (new_width, new_height), interpolation=cv2.INTER_AREA)
				logger.debug(f"Resized to {new_width}x{new_height}")
				
			cv2.imwrite(str(target_path), img, [cv2.IMWRITE_JPEG_QUALITY, 80])
			
		except Exception as e:
			logger.error(f"Failed to write image to {target_path}: {e}")
			raise IOError(f"Failed to write image to {target_path}: {e}")
		
		return target_path
		
	def dump_json(self, data: dict, indent: int = 4, debug: bool = False, output: Path = OUTPUT_INDIVIDUAL_JSON_DIR) -> None:
		"""
		Writes the manifest data to a JSON file.
		If an existing manifest has a description, it preserves it.

		Args:
			data (dict): The manifest data to save.
			indent (int): Number of spaces for JSON indentation.
			debug (bool): If True, runs in debug mode.
			output (Path): The output directory for the JSON manifest.
		"""
		path = self.filepath(".json", base_dir=output)
		
		# Check if the file already exists to preserve the description
		if path.exists() and not data.get("description"):
			try:
				with open(path, 'r') as f:
					existing_data = json.load(f)
				if existing_data.get("description") is not None:
					data["description"] = existing_data.get("description", "")
			except (json.JSONDecodeError, ValueError):
				# If file is empty or invalid JSON, we just skip preservation and overwrite later
				pass
		
		self.mkdir(path.parent)
		with open(path, 'w') as f:
			json.dump(data, f, indent=indent)
			
		logger.info(f"Saved Manifest: {path.name}")
	
	def generate_web(self, debug: bool = False, path: Path = OUTPUT_WEB_IMAGES_DIR) -> None:
		"""
		The main orchestration method for processing an image.
		- Generates three sizes (lg, md, sm).
		- Extracts metadata.
		- Generates and saves the individual JSON manifest.

		Args:
			debug (bool): If True, runs in debug mode (uses debug path, potentially skips JSON dump).
			path (Path): The output directory for the web images.
		"""
		sizes: tuple = (
			[1920, 'lg'],
			[1600, 'md'],
			[1200, 'sm']
		)
		img_paths  = []
		
		logger.info(f"--- Processing: {ImageManifest(self.img_path).get_name()} ---")
		
		for s, l in sizes:
			img_paths.append(str(self.cv2_write(max_width=s, label=l, subdir=True, base_dir=path).name))
		
		manifest = ImageManifest(self.img_path).get_json(sizes=img_paths)
	
		
		if debug:
			self.dump_json(data=manifest, debug=DEBUG, output=DEBUG_INDIVIDUAL_JSON_DIR)
		else:
			self.dump_json(data=manifest)
			
		logger.info(f"Generated Manifest: {manifest}")
		logger.info(f"--- Finished Processing: {ImageManifest(self.img_path).get_name()} ---")
		
		
class ImageManifest:
	"""
	Handles the extraction of metadata from an image's filename and the generation
	of the manifest dictionary structure.
	"""
	def __init__(self, path: Path):
		"""
		Initialize an ImageManifest object.

		Args:
			path (Path): The path to the source image file.
		"""
		self.path = path
		
		file_name = path.name.strip(path.suffix)
		file_name_split = file_name.split("-")
		self.raw_date = file_name_split[1]
		self.name = file_name_split[0]
	
	def get_name(self) -> str:
		"""
		Returns the extracted name of the render.

		Returns:
			str: The name of the render (e.g., "Enchanting Room").
		"""
		return self.name
	
	def get_date(self) -> tuple[int, str]:
		"""
		Parses the raw date string from the filename into a year and a full month name.
		Expected filename format: "Name-MonthYear.ext" (e.g., "Enchanting Room-Oct2023.png")

		Returns:
			tuple[int, str]: A tuple containing (year, month_name).
		"""
		# Standardize Date Format
		raw_date = self.raw_date
		file_year = int("".join(filter(str.isdigit, raw_date)))
		file_month = raw_date.strip(str(file_year)).capitalize()
		month_str = ""
		for month in enumerate(list(calendar.month_name)):
			x = month[1].lower().find(file_month.lower())
			if x != -1:
				# Converts the month name to a base 10 integer
				month_int = month[0]
				month_str = list(calendar.month_name)[month_int]
				break
			else:
				continue
		return file_year, month_str
	
	def get_json(self, sizes: list[str] = None) -> dict:
		"""
		Constructs the final manifest dictionary for the image.

		Args:
			sizes (list[str], optional): A list of relative paths to the generated image sizes.

		Returns:
			dict: A dictionary containing all metadata for the image.
		"""
		if sizes is None:
			sizes = []
			
		data = {
			"name": self.get_name(),
			"year": self.get_date()[0],
			"month": self.get_date()[1],
			"description": "",
			"folder": self.path.parent.name,
			"sizes": sizes
		}
		return data
		
if __name__ == "__main__":
	if DEBUG:
		logger.setLevel(logging.DEBUG)
		img = Path(SOURCE_RENDERS_DIR) / "env" / "Enchanting Room-Oct2023.png"
		ImageFile(img).generate_web(debug=DEBUG, path=DEBUG_WEB_IMAGES_DIR)
		# Example Desc: This is an enchanting room, originally made for the Chronicles of Ardonia Server.
	else:
		for dir_index, dir in enumerate(os.listdir(SOURCE_RENDERS_DIR)):
			d = Path(f"{SOURCE_RENDERS_DIR}/{dir}")
			if os.path.isdir(d):
				logger.info(f"Entering Category: {dir}")
				for image_index, image in enumerate(os.listdir(d)):
					img = d/image
					ImageFile(img).generate_web()
			else:
				continue
