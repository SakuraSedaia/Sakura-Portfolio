import { Show, For, createSignal } from "solid-js";
import addonIndex from "~/jsondata/addon-index.json";
import DownloadAssets from "~/components/ui/download-assets.jsx";

export default function SRIDownloads() {
	
	const data = addonIndex.SakuraRigInterface;
	const branches = data.branches;
	
	
	return (
		<section id={"downloads"}>
			<div class={"heading"}>
				<h1>Downloads</h1>
			</div>
			<div class={"column-container"}>
				<DownloadAssets json={JSON.stringify(branches.stable)} software={data.software} />
				
				<Show when={branches.dev.enabled}>
					<DownloadAssets json={JSON.stringify(branches.dev)} software={data.software} />
				</Show>
			</div>
		</section>
	);
}
