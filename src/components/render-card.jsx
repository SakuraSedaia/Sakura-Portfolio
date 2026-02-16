import { Show } from "solid-js";

export default function RenderCard(props) {
	const json = JSON.parse(props.data)
	const folder = json.name.toLowerCase().replaceAll(" ", "-");
	let showDesc = false
	if (json.description !== "") {
		showDesc = true
	}
  return (
    <div 
			class={"render-card grid-item"} 
			style={props.maxHeight ? { "--render-card-max-height": props.maxHeight } : {}}
		>
      <h2>{json.name}</h2>
			<a href="#" onClick={(e) => { e.preventDefault(); props.onImageClick(json, props.cat, folder); }}>
				<img src={`/images/renders${props.cat}${folder}/${json.sizes[0]}`} alt={json.name} />
				
			</a>
	    <div class={"detail"}>
		    <span>Created in {json.month} {json.year.toString()}</span>
	    </div>
	    <Show when={showDesc}>
	      <p>{json.description}</p>
	    </Show>
	    <Show when={props.debug}>
		    <pre>/images/renders{props.cat}{folder}/{json.sizes[0]}</pre>
		    <pre>{JSON.stringify(json, null, 2)}</pre>
	    </Show>
    </div>
  );
}