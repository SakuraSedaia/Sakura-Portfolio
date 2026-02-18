import { Show } from "solid-js";
import rigIndex from "~/jsondata/sacr-index.json";
import StableDownloads from "./components/stable-downloads";
import DevDownloads from "./components/dev-downloads";

export default function SACRDownloads(props) {
	const stable = rigIndex.stable;
	const dev = rigIndex.dev;

	return (
		<section id={"downloads"}>
			<header>
				<h1>Downloads</h1>
			</header>
			<div class={"row-container"}>
				<StableDownloads data={stable} />
				<Show when={dev.enabled}>
					<DevDownloads data={dev} />
				</Show>
			</div>
		</section>
	);
}
