import { createSignal, For } from "solid-js";

export default function DevDownloads(props) {
	const dev = props.data;
	const [devIndex, setDevIndex] = createSignal(0);

	const downloadPath = "releases/download/";
	const activeDev = (id) => (id === devIndex() ? "tab active" : "tab");

	const devDownloadUrl = () => `${dev.github}${downloadPath}${dev.builds[devIndex()].git_tag}/${dev.builds[devIndex()].fileName}`;

	return (
		<div class={"row"} id={"dev"}>
			<h2>Development Builds</h2>
			<h3>{dev.name} Development</h3>
			<div class={"dev-builds build-select"}>
				<For each={dev.builds}>
					{(build) => (
						<a
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
