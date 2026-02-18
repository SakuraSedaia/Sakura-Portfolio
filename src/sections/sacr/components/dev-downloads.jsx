import { createSignal, For, onMount, createEffect } from "solid-js";

export default function DevDownloads(props) {
	const dev = props.data;
	const [devIndex, setDevIndex] = createSignal(0);
	const [indicatorStyle, setIndicatorStyle] = createSignal({});
	let containerRef;
	let tabRefs = [];

	const downloadPath = "releases/download/";
	const activeDev = (id) => (id === devIndex() ? "tab active" : "tab");

	const devDownloadUrl = () => `${dev.github}${downloadPath}${dev.builds[devIndex()].git_tag}/${dev.builds[devIndex()].fileName}`;

	const updateIndicator = () => {
		const activeTab = tabRefs[devIndex()];
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
		devIndex();
		updateIndicator();
	});

	return (
		<div class={"row"} id={"dev"}>
			<h2>Development Builds</h2>
			<h3>{dev.name} Development</h3>
			<div class={"dev-builds build-select"} ref={containerRef}>
				<div class="tab-indicator" style={indicatorStyle()} />
				<For each={dev.builds}>
					{(build, index) => (
						<a
							ref={(el) => (tabRefs[index()] = el)}
							class={`${activeDev(build.id)}`}
							onClick={() => setDevIndex(build.id)}
						>
							{build.version}
						</a>
					)}
				</For>
			</div>
			<div class={"download-info"}>
				<p>{dev.builds[devIndex()].notes}</p>
				<div class={"download"}>
					<a href={devDownloadUrl()} class={"btn"}>Download {dev.builds[devIndex()].label}</a>
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
	);
}
