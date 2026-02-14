import { For } from "solid-js";
import renderData from "~/jsondata/render-map.json";
import DisplayCard from "~/components/display-card";

export default function CharGallery() {
  return (
	  <For each={renderData} fallback={<p>Loading...</p>}>
			{(group) => (
				// HTML
				<section id={"char-gallery"}>
					<heading>
						<h2>{group.label}</h2>
					</heading>
					
					<grid-container>
						<For each={group.images}>
							{(render) => (
								<div class={"render-card"}>
									<h2>{render.name}</h2>
									<a href="#">
										{/* The Images are loaded from smallest to largest, depending on screen width */}
										<img
											src={`/images/renders${group.path}${render.sizes[0]}`}
											srcSet={`/images/renders${group.path}${render.sizes[0]} 320w, /images/renders${group.path}${render.sizes[1]} 800w, /images/renders${group.path}${render.sizes[2]} 1200w`}
											alt={render.name}
											/>
									</a>
									<p>{render.description}</p>
								</div>
							)}
						</For>
					</grid-container>
				</section>
				// <DisplayCard data={JSON.stringify(render)} />
			)}
			
		</For>
	      
  );
}
