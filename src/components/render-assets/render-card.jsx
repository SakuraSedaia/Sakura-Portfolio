import { Show } from "solid-js";
import OptimizedImage from "~/components/media/optimized-image.jsx";

export default function RenderCard(props) {
	const json = typeof props.data === "string" ? JSON.parse(props.data) : props.data;
	const folder = json.name.toLowerCase().replaceAll(" ", "-");
	let showDesc = false
	if (json.description !== "") {
		showDesc = true
	}

	// The render manager saves sizes as file names (e.g., "Name-lg.jxl")
	// We need to get the base name and path
	const getOptimizedSrc = (filename) => {
		const base = filename.substring(0, filename.lastIndexOf('.'));
		// Ensure folder is correct - the pipeline uses slug-named subdirectories
		return `/images/renders${props.cat}${folder}/${base}`;
	}

  return (
    <div 
			class={"render-card grid-item"} 
			style={props.maxHeight ? { "--render-card-max-height": props.maxHeight } : {}}
		>
      <h2>{json.name}</h2>
			<a href="#" onClick={(e) => { e.preventDefault(); props.onImageClick(json, props.cat, folder, false); }}>
				<OptimizedImage 
					src={getOptimizedSrc(json.sizes[0])} 
					alt={json.name} 
					fallbackExt=".jpg"
				/>
			</a>
	    <div class={"detail"}>
		    <span>Created in {json.month} {json.year.toString()}</span>
	    </div>
	    <Show when={props.debug}>
		    <pre>/images/renders{props.cat}{folder}/{json.sizes[0]}</pre>
		    <pre>{JSON.stringify(json, null, 2)}</pre>
	    </Show>
    </div>
  );
}