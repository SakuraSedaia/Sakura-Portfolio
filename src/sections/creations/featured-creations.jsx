import OptimizedImage from "~/components/media/optimized-image.jsx";
import renderMap from "~/jsondata/render-map.json";

export default function FeaturedCreations() {
	const featuredRender = "Frozen Phoenix"
	
	let groupMap = {
		"label": "Initializing...",
		"path": "",
		"images": [
			{
				"name": "Initializing...",
				"sizes": []
			}
		]
	}
	let json = groupMap.images[0]
	let renderName = json.name;
	let renderFolder = renderName.toLowerCase().replaceAll(" ", "-");
	let renderCat = groupMap.path;
	let fallbackExt = ".jpg"
	
	for (const group of renderMap) {
		for (const render of group.images) {
			if (render.name.includes(featuredRender)) {
				json = render
				renderName = render.name;
				renderFolder = renderName.toLowerCase().replaceAll(" ", "-");
				renderCat = group.path;
				fallbackExt = json.sizes[1]?.substring(json.sizes[1].lastIndexOf('.')) ?? fallbackExt;
				break;
			}
		}
	}
	
	const getOptimizedSrc = (filename) => {
		const base = filename.substring(0, filename.lastIndexOf('.'));
		// Ensure the folder is correct - the pipeline uses slug-named subdirectories
		return `/images/renders${renderCat}${renderFolder}/${base}`;
	}
	
	return (
		<section id={"featuredCreations"}>
			<div class={"heading"}>
				<h1>Featured Creations</h1>
			</div>
			
			<div class={"grid-container"}>
				<div class={"grid-item"}>
					<h2>{renderName}</h2>
					<a href="#" onClick={(e) => { e.preventDefault(); props.onImageClick(json, props.cat, renderFolder); }}>
						<OptimizedImage
							src={getOptimizedSrc(json.sizes[0])}
							alt={renderName}
							fallbackExt={fallbackExt}
						/>
					</a>
				</div>
			</div>
		</section>
	)
}