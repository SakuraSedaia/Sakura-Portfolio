import { Show, For, createSignal } from "solid-js";
import addonIndex from "~/jsondata/addon-index.json";
import DownloadPlugins from "~/components/ui/download-plugins.jsx";

export default function Downloads() {
	
	const data = addonIndex.SakuraRigInterface;
	const branches = data.branches;
	
	
	return (
		<section id={"downloads"}>
			<div class={"heading"}>
				<h1>Downloads</h1>
			</div>
			<div class={"column-container"}>
				<DownloadPlugins json={JSON.stringify(branches.stable)} software={data.software} repo={data.repo}/>
				
				<Show when={branches.dev.enabled}>
					<DownloadPlugins json={JSON.stringify(branches.dev)} software={data.software} repo={data.repo}/>
				</Show>
			</div>
		</section>
	);
}
