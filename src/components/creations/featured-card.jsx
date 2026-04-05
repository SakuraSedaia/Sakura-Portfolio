import { Show } from "solid-js";
import OptimizedImage from "~/components/media/optimized-image.jsx";
import { A } from "@solidjs/router";
import Tooltip from "~/components/ui/tooltip.jsx";

export default function FeaturedCard(props) {
	const json = typeof props.data === "string" ? JSON.parse(props.data) : props.data;
	const folder = json.name.toLowerCase().replaceAll(" ", "-");
	const showDesc = json.description && json.description !== "";

	const getOptimizedSrc = (filename) => {
		const lastDot = filename.lastIndexOf('.');
		const base = lastDot !== -1 ? filename.substring(0, lastDot) : filename;
		if (props.isHeader) {
			return `/images/card-headers/${base}`;
		}
		return `/images/renders${props.cat}${folder}/${base}`;
	}

	return (
		<div class={"featured-card grid-item"}>
			<h2>{json.name}{props.type ? ` - ${props.type}` : ""}</h2>
			<div class={"detail"}>
				<span>{props.detailText || `Created in ${json.month} ${json.year.toString()}`}</span>
			</div>
			<Show when={showDesc}>
				<p>{json.description}</p>
			</Show>
			
			<Tooltip text={props.tooltipText || "Click to Open"}>
				<Show
					when={props.link}
					fallback={
							<a href="#" onClick={(e) => { e.preventDefault(); props.onImageClick(json, props.cat, folder, props.isHeader); }}>
								<OptimizedImage
									src={getOptimizedSrc(json.sizes[0])}
									alt={json.name}
									fallbackExt={props.fallbackExt || ".jpg"}
								/>
							</a>
					}
				>
					<A href={props.link}>
						<OptimizedImage
							src={getOptimizedSrc(json.sizes[0])}
							alt={json.name}
							fallbackExt={props.fallbackExt || ".jpg"}
						/>
					</A>
				</Show>
			</Tooltip>
		</div>
	);
}
