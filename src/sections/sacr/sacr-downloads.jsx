import { Show } from "solid-js";
import rigIndex from "~/jsondata/sacr-index.json";
import DownloadAssets from "~/components/ui/download-assets.jsx";

export default function SACRDownloads(props) {
	const data = rigIndex.SACR;
	const branches = data.branches;

	return (
		<section id={"downloads"}>
			<div class={"heading"}>
				<h1>Downloads</h1>
			</div>
			<div class={"column-container"}>
				<DownloadAssets json={JSON.stringify(branches.stable)} software={data.software} repo={data.repo}/>
				<Show when={branches.dev.enabled}>
					<DownloadAssets json={JSON.stringify(branches.dev)} software={data.software} repo={data.repo}/>
				</Show>
			</div>
		</section>
	);
}
