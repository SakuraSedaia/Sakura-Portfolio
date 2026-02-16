import { Show } from "solid-js";

export default function RenderCard(props) {
	const json = JSON.parse(props.data)
	const folder = json.name.toLowerCase().replace(" ", "-");
	
  return (
    <div class={"render-card"}>
      <h2>{json.name}</h2>
			<a href="#">
				<img src={`/images/renders${props.cat}${folder}/${json.sizes[0]}`} alt={json.name} />
				
			</a>
	    <div class={"detail"}>
		    <span>Release Date: {json.month} {json.year.toString()}</span>
	    </div>
	    <p>{json.description}</p>
	    
	    <Show when={props.debug}>
		    <pre>/images/renders{props.cat}{folder}/{json.sizes[0]}</pre>
		    <pre>{JSON.stringify(json, null, 2)}</pre>
	    </Show>
	    
	    <hr />
    </div>
  );
}