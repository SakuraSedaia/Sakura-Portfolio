"""
This script consolidates individual image manifest JSON files into a single RenderDictionary.json.
The resulting file is structured for easy loading by a SolidJS component.
"""
import json
from pathlib import Path
import calendar
import logging

# Configure logging
logging.basicConfig(
	level=logging.INFO,
	format='%(levelname)s: %(message)s'
)
logger = logging.getLogger(__name__)

# Paths matching create_render_map_v2.py
LIB_ROOT = Path(__file__).parent / "lib"
OUTPUT_JSON_DIR = Path(__file__).parent.parent / "src/jsondata"
CATEGORIES = ["env", "char", "char-env"]
MANIFEST_OUTPUT_NAME = "render-map.json"
def assemble_manifest() -> None:
	"""
	Reads all individual JSON manifests from the library directory,
	groups them by category, sorts them by date (newest first),
	and writes a consolidated RenderDictionary.json file.
	"""
	# Define the final structure based on the desired output format
	combined_manifest = [
		{
			"label": "Characters in Environments",
			"path": f"/{CATEGORIES[2]}/",
			"images": [],
		},
		{
			"label": "Environments",
			"path": f"/{CATEGORIES[0]}/",
			"images": [],
		},
		{
			"label": "Character Portraits",
			"path": f"/{CATEGORIES[1]}/",
			"images": [],
		},
	]
	
	# Map paths to their corresponding index in combined_manifest
	category_to_index = {
		"char-env": 0,
		"env": 1,
		"char": 2
	}
	
	# Helper to convert month names to numbers for sorting
	month_name_to_num = {name: i for i, name in enumerate(list(calendar.month_name)) if name}
	
	for category in CATEGORIES:
		category_path = LIB_ROOT / category
		if not category_path.exists():
			logger.warning(f"Category path {category_path} does not exist. Skipping.")
			continue
		
		logger.info(f"Processing Category: {category}")
		idx = category_to_index[category]
		images_list = []
		
		# Find all .json files in the category directory
		for json_file in category_path.glob("*.json"):
			try:
				with open(json_file, 'r') as f:
					data = json.load(f)
					
					# Fix double-encoding if it exists (legacy support)
					if isinstance(data.get("sizes"), str):
						try:
							data["sizes"] = json.loads(data["sizes"])
						except json.JSONDecodeError:
							pass
					
					images_list.append(data)
			except (json.JSONDecodeError, IOError) as e:
				logger.error(f"Error reading {json_file}: {e}")
		
		logger.info(f"Found {len(images_list)} images in {category}")
		
		# Sorting function to order images by year (descending) and then month (descending)
		def sort_by_date(img: dict):
			"""
			Key function for sorting images by year and month.

			Args:
					img (dict): The image manifest data.

			Returns:
					tuple: (year, month_number) for sorting.
			"""
			year = img.get("year", 0)
			month_val = img.get("month", "")
			# Handle month as a string or number
			if isinstance(month_val, int):
				month_num = month_val
			else:
				month_num = month_name_to_num.get(month_val, 0)
			return year, month_num
		
		images_list.sort(key=sort_by_date, reverse=True)
		combined_manifest[idx]["images"] = images_list
	
	# Output the consolidated manifest
	output_file = OUTPUT_JSON_DIR / MANIFEST_OUTPUT_NAME
	
	# Ensure output directory exists
	output_file.parent.mkdir(parents=True, exist_ok=True)
	
	with open(output_file, 'w') as f:
		json.dump(combined_manifest, f, indent=4)
	
	logger.info(f"Successfully assembled complete manifest at {output_file}")

if __name__ == "__main__":
	assemble_manifest()