import { createSignal, For, onMount, createEffect } from "solid-js";
import { A } from "@solidjs/router";

export default function StableDownloads(props) {
	const stable = props.data;
	const [stableIndex, setStableIndex] = createSignal(0);
	const [indicatorStyle, setIndicatorStyle] = createSignal({});
	let containerRef;
	let tabRefs = [];

	const downloadPath = "releases/download/";
	const activeStable = (id) => (id === stableIndex() ? "tab active" : "tab");

	const stableDownloadUrl = () => `${stable.github}${downloadPath}${stable.version}/${stable.name}_${stable.version}${stable.builds[stableIndex()].suffix}`;

	const updateIndicator = () => {
		const activeTab = tabRefs[stableIndex()];
		if (activeTab && containerRef) {
			setIndicatorStyle({
				left: `${activeTab.offsetLeft}px`,
				width: `${activeTab.offsetWidth}px`,
				height: `${activeTab.offsetHeight}px`
			});
		}
	};

	onMount(() => {
		updateIndicator();
		window.addEventListener("resize", updateIndicator);
	});

	createEffect(() => {
		stableIndex();
		updateIndicator();
	});

	return (
		<div class={"row"} id={"stable"}>
			<h2>Stable Build</h2>
			<h3>{stable.name} Stable</h3>
			<div class={"stable-builds build-select"} ref={containerRef}>
				<div class="tab-indicator" style={indicatorStyle()} />
				<For each={stable.builds}>
					{(build, index) => (
						<a
							ref={(el) => (tabRefs[index()] = el)}
							class={`${activeStable(build.id)}`}
							onClick={() => setStableIndex(build.id)}
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
	);
}
