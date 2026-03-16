import renderMap from "~/json-data/render-map.json";
import ImageModal from "~/components/creations/image-modal.jsx";
import FeaturedCard from "~/components/creations/featured-card.jsx";
import { createSignal } from "solid-js";

export default function FeaturedCreations() {
	const [modalOpen, setModalOpen] = createSignal(false);
	const [currentImage, setCurrentImage] = createSignal({ src: "", alt: "", description: "" });
	const featuredRender = "Frozen Phoenix"
	
	let renderJson = {
		"name": "Initializing...",
		"sizes": [""],
		"description": ""
	}
	let renderCat = "";
	let fallbackExt = ".jpg"
	
	for (const group of renderMap) {
		for (const render of group.images) {
			if (render.name.includes(featuredRender)) {
				renderJson = render;
				renderCat = group.path;
				fallbackExt = renderJson.sizes[1]?.substring(renderJson.sizes[1].lastIndexOf('.')) ?? fallbackExt;
				break;
			}
		}
	}

	const openModal = (json, cat, folder, isHeader) => {
		const filename = json.sizes[0].split('.')[0];
		setCurrentImage({
			src: isHeader ? `/images/card-headers/${filename}` : `/images/renders${cat}${folder}/${filename}`,
			alt: json.name,
			description: json.description
		});
		setModalOpen(true);
	};
	
	const FrostlightJson = {
		"name": "Frostlight Website",
		"sizes": [
			"frostlight-studios-org-preview.jxl",
			"frostlight-studios-org-preview.png"
		],
		"description": "",
		"month": "February 22",
		"year": 2026,
		"tags": [
			"",
		]
	}

	return (
		<section id={"featuredCreations"}>
			<div class={"heading"}>
				<h1>Featured Creations</h1>
			</div>
			
			<div class={"grid-container"}>
				<FeaturedCard 
					data={renderJson} 
					cat={renderCat} 
					type="Render" 
					fallbackExt={fallbackExt} 
					onImageClick={openModal}
					tooltipText={"Click to Open"}
				/>
				
				<FeaturedCard 
					data={FrostlightJson}
					isHeader={true} 
					fallbackExt=".png" 
					detailText="Last Updated: Feb 22, 2026"
					link="https://frostlight-studios.org"
					tooltipText={"Click to Open"}
				/>
			</div>

			<ImageModal
				show={modalOpen()}
				onClose={() => setModalOpen(false)}
				imageSrc={currentImage().src}
				imageAlt={currentImage().alt}
				description={currentImage().description}
			/>
		</section>
	)
}