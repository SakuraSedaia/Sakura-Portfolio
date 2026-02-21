import { Show, For, createSignal } from "solid-js";
import addonIndex from "~/jsondata/addon-index.json";

export default function BlenderDevDownloads() {
	const data = addonIndex.BlenderDevelopment;
	const stable = data.find(i => i.branch === "stable");
	const dev = data.find(i => i.branch === "dev");

	// GitHub Info
	const downloadPath = "releases/download/";

	// Signals
	const [stableIndex, setStableIndex] = createSignal(0);
	const [devIndex, setDevIndex] = createSignal(0);

	// Sets the active Styling
	const activeStable = (id) => (id === stableIndex() ? "tab active" : "tab");
	const activeDev = (id) => (id === devIndex() ? "tab active" : "tab");

	// Updates the page information depending on user selection
	function updateBuild(branch, index) {
		if (branch === "stable") {
			setStableIndex(index);
		} else {
			setDevIndex(index);
		}
	}

	// Stable Download URL
	const stableDownloadUrl = () => `${stable.repo}/${downloadPath}${stable.builds[stableIndex()].git_tag}/${stable.builds[stableIndex()].fileName}`;
	const devDownloadUrl = () => `${dev.repo}/${downloadPath}${dev.builds[devIndex()].git_tag}/${dev.builds[devIndex()].fileName}`;

	return (
		<section id={"downloads"}>
			<div class={"heading"}>
				<h1>Downloads</h1>
			</div>
			<div class={"row-container"}>
				<div class={"row"} id={"stable"}>
					<h2>Stable Build</h2>
					<h3>{stable.label || "Stable"}</h3>
					<div class={"stable-builds build-select"}>
						<For each={stable.builds}>
							{(build, index) => (
								<a
									class={`${activeStable(index())}`}
									onClick={() => updateBuild("stable", index())}
								>
									{build.label}
								</a>
							)}
						</For>
					</div>
					<div class={"download-info"}>
						<p>{stable.description}</p>
						<Show when={stable.builds[stableIndex()].notes}>
							<p>{stable.builds[stableIndex()].notes}</p>
						</Show>

						<div class={"download"}>
							<a href={stableDownloadUrl()} class={"btn"}>Download {stable.builds[stableIndex()].git_tag}</a>
							<Show when={stable.jetbrains_info && stable.jetbrains_info.enabled !== false}>
								<a href={stable.jetbrains_info.link} target="_blank" class={"btn"}>JetBrains Marketplace</a>
							</Show>
						</div>
						<div class={"download-spec"}>
							<table>
								<thead>
									<tr>
										<th>Date</th>
										<th>Size</th>
										<th>License</th>
										<th>Version</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td>{stable.builds[stableIndex()].date}</td>
										<td>{stable.builds[stableIndex()].size}</td>
										<td>{stable.builds[stableIndex()].license}</td>
										<td>{stable.builds[stableIndex()].git_tag}</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
				</div>

				<Show when={dev && dev.enabled !== false}>
					<div class={"row"} id={"dev"}>
						<h2>Development Builds</h2>
						<h3>{dev.label || "Development"}</h3>
						<div class={"dev-builds build-select"}>
							<For each={dev.builds}>
								{(build, index) => (
									<a class={`${activeDev(index())}`} onClick={() => updateBuild("dev", index())}>
										{build.label || "Dev Build"}
									</a>
								)}
							</For>
						</div>
						<div class={"download-info"}>
							<p>{dev.description}</p>
							<Show when={dev.builds[devIndex()].notes}>
								<p>{dev.builds[devIndex()].notes}</p>
							</Show>
							<div class={"download"}>
								<a
									href={devDownloadUrl()}
									class={"btn"}>
									Download {dev.builds[devIndex()].git_tag || "Dev"}
								</a>
							</div>
							<div class={"download-spec"}>
								<table>
									<thead>
										<tr>
											<th>Date</th>
											<th>Size</th>
											<th>License</th>
											<th>Version</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td>{dev.builds[devIndex()].date}</td>
											<td>{dev.builds[devIndex()].size}</td>
											<td>{dev.builds[devIndex()].license}</td>
											<td>{dev.builds[devIndex()].git_tag}</td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>
					</div>
				</Show>
			</div>

			<div class={"standard-container"}>
				<h3>Installation</h3>
				<p>
					Since this is an IntelliJ Platform plugin, it must be installed through PyCharm's plugin manager:
				</p>
				<ol class={"blender-dev-list"}>
					<li>Download the latest plugin distribution ZIP file from either the JetBrains Marketplace or the button above.</li>
					<li>In PyCharm, open <strong>Settings</strong> (or <strong>Preferences</strong> on macOS) &gt; <strong>Plugins</strong>.</li>
					<li>Click the gear icon (⚙️) next to the "Installed" tab and select <strong>Install Plugin from Disk...</strong>.</li>
					<li>Navigate to the downloaded ZIP file and click <strong>OK</strong>.</li>
					<li>Restart PyCharm to complete the installation.</li>
				</ol>
			</div>
		</section>
	);
}
