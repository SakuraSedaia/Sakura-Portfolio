import { createSignal, For, createMemo, Show, onMount, onCleanup, createEffect } from "solid-js";
import { A } from "@solidjs/router";
import DownloadLink from "./download-link";

export default function DownloadAssets(props) {
	const branch = JSON.parse(props.json);
	
	// Group builds by version
	const versionsMap = createMemo(() => {
		const map = new Map();
		const versions = branch.versions || [];
		
		versions.forEach(v => {
			map.set(v.version, v.builds.map(b => ({
				...b,
				version: v.version,
				fileName: b.fileName || v.fileName,
				date: b.date || v.date,
				changelog: b.changelog || v.changelog,
				compatibility: b.compatibility || v.compatibility
			})));
		});
		
		return map;
	});

	const versionList = createMemo(() => Array.from(versionsMap().keys()));
	
	const [selectedVersion, setSelectedVersion] = createSignal(versionList()[0]);
	const [variationIndex, setVariationIndex] = createSignal(0);
	const [isOpen, setIsOpen] = createSignal(false);
	
	const currentVariations = createMemo(() => versionsMap().get(selectedVersion()) || []);
	const build = createMemo(() => currentVariations()[variationIndex()] || currentVariations()[0]);

	const filePath = createMemo(() => {
		if (!build()) return "";
		return `${branch.path}/${build().fileName}`;
	});

	let dropdownRef;
	let tabContainerRef;
	const [indicatorStyle, setIndicatorStyle] = createSignal({});

	const handleClickOutside = (e) => {
		if (dropdownRef && !dropdownRef.contains(e.target)) {
			setIsOpen(false);
		}
	};

	const updateIndicator = () => {
		if (tabContainerRef) {
			const activeTab = tabContainerRef.querySelector(".tab.active");
			if (activeTab) {
				setIndicatorStyle({
					left: `${activeTab.offsetLeft}px`,
					width: `${activeTab.offsetWidth}px`,
					height: `${activeTab.offsetHeight}px`
				});
			}
		}
	};

	onMount(() => {
		document.addEventListener("mousedown", handleClickOutside);
		window.addEventListener("resize", updateIndicator);
		updateIndicator();
		onCleanup(() => {
			document.removeEventListener("mousedown", handleClickOutside);
			window.removeEventListener("resize", updateIndicator);
		});
	});

	// Update indicator when variation changes
	createEffect(() => {
		variationIndex();
		selectedVersion();
		setTimeout(updateIndicator, 0);
	});

	return (
		<div class={"column split"}>
			<div class={"heading"}>
				<h2>{branch.description}</h2>
				<hr />
				
				<div class={"download-select"}>
					<div class={"label"}>Version:</div>
					<div class={"custom-select"} ref={dropdownRef}>
						<div class={`select-trigger ${isOpen() ? 'open' : ''}`} onClick={() => setIsOpen(!isOpen())}>
							<div>{selectedVersion()}{versionList().indexOf(selectedVersion()) === 0 ? " (Latest)" : ""}</div>
							<div class={`arrow ${isOpen() ? 'open' : ''}`} />
						</div>
						<div class={`select-options ${isOpen() ? 'show' : ''}`}>
							<For each={versionList()}>
								{(version, index) => (
									<div
										class={`select-option ${version === selectedVersion() ? 'selected' : ''}`}
										onClick={() => {
											setSelectedVersion(version);
											setVariationIndex(0);
											setIsOpen(false);
										}}
									>
										{version}{index() === 0 ? " (Latest)" : ""}
									</div>
								)}
							</For>
						</div>
					</div>
				</div>

				<Show when={currentVariations().length > 1}>
					<div class={"build-select"} ref={tabContainerRef}>
						<div class={"tab-indicator"} style={indicatorStyle()} />
						<For each={currentVariations()}>
							{(variation, index) => (
								<div
									class={`tab ${index() === variationIndex() ? 'active' : ''}`}
									onClick={() => setVariationIndex(index())}
								>
									{variation.label || `Variation ${index() + 1}`}
								</div>
							)}
						</For>
					</div>
				</Show>

				<div class={`download-info ${currentVariations().length <= 1 ? 'no-tabs' : ''}`}>
					<div class={`download-link ${build()?.disabled ? 'disabled' : ''}`}>
						<DownloadLink path={filePath()}>Download {build()?.label || ""}</DownloadLink>
					</div>
					
					<table>
						<thead>
							<tr>
								<td>Build Version</td>
								<td>Release Date</td>
								<td>File Size</td>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>{build()?.version} {build()?.label ? `(${build().label})` : ""}</td>
								<td>{build()?.date}</td>
								<td>{build()?.size}</td>
							</tr>
						</tbody>
					</table>
				</div>

				<Show when={build()?.compatibility}>
					<div class={"compatibility-footnote"}>
						<p>Compatible with {props.software} versions: {build()?.compatibility?.minVersion} to {build()?.compatibility?.maxVersion}</p>
					</div>
				</Show>
				<hr />
				<div class={"download-notes"}>
					<h2>Changes Summary</h2>
					<p>{build()?.notes}</p>
					<A href={`/changelog/${build()?.changelog || build()?.fileName?.replace(".zip", "") || `${branch.namePrefix}_${build()?.version}`}`} class={"link"}>View full Changelog</A>
					<Show when={props.repo}>
						{" - "}
						<a href={props.repo} target="_blank" class={"link"}>Repository</a>
					</Show>
				</div>
			</div>
		</div>
	);
}
