import { Show, For, createSignal } from "solid-js";
import { A } from "@solidjs/router";
import rigIndex from "~/jsondata/sacr-index.json";

export default function SACRDownloads(props) {
	const stable = rigIndex.stable;
	const stableInfo = stable.styles;
	const dev = rigIndex.dev;
	const devInfo = dev.styles;

	// GitHub Info
	const githubLink = "https://www.github.com/SakuraSedaia/Sakura-Character-Rig/";
	const downloadPath = "releases/download/";
	const tagPath = "releases/tag/";

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
	const stableDownloadUrl = () => `${stable.github}${downloadPath}${stable.version}/${stable.name}_${stable.version}${stable.builds[stableIndex()].suffix}`;
	const devBuild = dev.builds[devIndex()];
	const devDownloadUrl = () => `${dev.github}${downloadPath}${dev.builds[devIndex()].git_tag}/${dev.builds[devIndex()].fileName}`;

	return (
    <section id={"downloads"}>
      <header>
        <h1>Downloads</h1>
      </header>
      <div class={"row-container"}>
        <div class={"row"} id={"stable"}>
          <h2>Stable Build</h2>
          <h3>{stable.name} Stable</h3>
					<div class={"stable-builds build-select"}>
						<For each={stable.builds}>
							{(build) => (
								<a
									class={`${activeStable(build.id)}`}
									onClick={() => updateBuild("stable", build.id)}
								>
									{build.label}
								</a>
							)}
						</For>
					</div>
          <div class={"download-info"}>
						<p>{stable.builds[stableIndex()].notes}</p>

						<div class={"download"}>
							<a href={stableDownloadUrl()} class={"btn"}>Download {stable.version}{stable.builds[stableIndex()].suffix}</a>
						</div>
						<br />
						<div class={"changelog"}>
							<A href={`/changelog/SACR_${stable.version}`} class={"link"}>View Changelog</A>
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
										<td>{stable.version}</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
        </div>

        <Show when={dev.enabled}>
          <div class={"row"} id={"dev"}>
            <h2>Development Builds</h2>
						<h3>{dev.name} Development</h3>
						<div class={"dev-builds build-select"}>
							<For each={dev.builds}>
								{(build) => (
									<a class={`${activeDev(build.id)}`} onClick={() => updateBuild("dev", build.id)}>
										{build.version}
									</a>
								)}
							</For>
						</div>
						<div class={"download-info"}>
							<p>{dev.builds[devIndex()].notes}</p>
							<div class={"download"}>
								<a
									href={devDownloadUrl()}
									class={"btn"}>
									Download {dev.builds[devIndex()].label}
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
										<td>{dev.builds[devIndex()].version}</td>
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
