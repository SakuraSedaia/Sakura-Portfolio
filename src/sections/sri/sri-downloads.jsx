import { Show, For, createSignal } from "solid-js";
import addonIndex from "~/jsondata/addon-index.json";

export default function SRIDownloads() {
	const stable = addonIndex.stable;
	const dev = addonIndex.dev;

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
	const stableDownloadUrl = () => `${stable.github}/${downloadPath}${stable.builds[stableIndex()].git_tag}/${stable.builds[stableIndex()].fileName}`;
	const devDownloadUrl = () => `${dev.github}/${downloadPath}${dev.builds[devIndex()].git_tag}/${dev.builds[devIndex()].fileName}`;

	return (
		<section id={"downloads"}>
			<header>
				<h1>Downloads</h1>
			</header>
			<div class={"row-container"}>
				<div class={"row"} id={"stable"}>
					<h2>Stable Build</h2>
					<h3>{stable.label}</h3>
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
							<Show when={stable.blender_ext}>
								<a href={stable.blender_ext} target="_blank" class={"btn"}>Blender Extensions</a>
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

				<Show when={dev.enabled}>
					<div class={"row"} id={"dev"}>
						<h2>Development Builds</h2>
						<h3>{dev.label}</h3>
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
		</section>
	);
}
