import { Show, For, createSignal } from "solid-js";
import addonIndex from "~/jsondata/addon-index.json";
import DownloadPlugin from "~/components/ui/download-plugin.jsx";

export default function BlendCharmDownloads() {
	
	const data = addonIndex.BlenderDevelopment;
	const branches = data.branches;
	
	
	return (
		<section id={"downloads"}>
			<div class={"heading"}>
				<h1>Downloads</h1>
			</div>
			<div class={"column-container"}>
				<DownloadPlugin json={JSON.stringify(branches.stable)} software={data.software} />
				
				<Show when={branches.dev.enabled}>
					<DownloadPlugin json={JSON.stringify(branches.dev)} software={data.software} />
				</Show>
			</div>
		</section>
	);
}
