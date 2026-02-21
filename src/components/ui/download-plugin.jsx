import { createSignal, For, createMemo, Show, onMount, onCleanup } from "solid-js";
import { A } from "@solidjs/router";
import DownloadLink from "./download-link";
import assetMap from "~/jsondata/asset-index.json";


export default function DownloadPlugin(props) {
	const branch = JSON.parse(props.json);
	
	
	const [buildIndex, setBuildIndex] = createSignal(0);
	const [isOpen, setIsOpen] = createSignal(false);
	const build = createMemo(() => branch.builds[buildIndex()]);
	const filePath = createMemo(() => build() ? `${branch.path}/${branch.namePrefix}_${build().version}` : "");

	let dropdownRef;

	const setIndex = (index) => {
		setBuildIndex(index);
	};

	const handleClickOutside = (e) => {
		if (dropdownRef && !dropdownRef.contains(e.target)) {
			setIsOpen(false);
		}
	};

	onMount(() => {
		document.addEventListener("mousedown", handleClickOutside);
		onCleanup(() => {
			document.removeEventListener("mousedown", handleClickOutside);
		});
	});
	
	const download = (file) => `plugins/blender/${file}.zip`
	
  return (
	  <div class={"column split"}>
		  <div class={"heading"}>
			  <h2>{branch.description}</h2>
			  <hr />
			  
			  <div class={"download-select"}>
				  <div class={"label"}>Version:</div>
				  <div class={"custom-select"} ref={dropdownRef}>
					  <div class={`select-trigger ${isOpen() ? 'open' : ''}`} onClick={() => setIsOpen(!isOpen())}>
						  <div>{build()?.version}{buildIndex() === 0 ? " (Latest)" : ""}</div>
						  <div class={`arrow ${isOpen() ? 'open' : ''}`} />
					  </div>
					  <div class={`select-options ${isOpen() ? 'show' : ''}`}>
						  <For each={branch.builds}>
							  {(version, index) => (
								  <div
									  class={`select-option ${index() === buildIndex() ? 'selected' : ''}`}
									  onClick={() => { setIndex(index()); setIsOpen(false); }}
								  >
									  {version.version}{index() === 0 ? " (Latest)" : ""}
								  </div>
							  )}
						  </For>
					  </div>
				  </div>
				  
				  <div class={`download-link ${build()?.disabled ? 'disabled' : ''}`}>
					  <DownloadLink path={download(filePath())}>Download</DownloadLink>
					</div>
				 
			  </div>
			  
			  {/* File Metadata */}
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
						  <td>{build()?.version}</td>
						  <td>{build()?.date}</td>
						  <td>{build()?.size}</td>
					  </tr>
				  </tbody>
			  </table>
			  
			  <Show when={build()?.compatibility}>
				  <div class={"compatibility-footnote"}>
					  <p>Compatible with {props.software} versions: {build()?.compatibility?.minVersion} to {build()?.compatibility?.maxVersion}</p>
				  </div>
			  </Show>
			  <hr />
			  <div class={"download-notes"}>
				  <h2>Changes Summary</h2>
				  <p>{build()?.notes}</p>
				  <A href={`/changelog/${branch.namePrefix}_${build()?.version}`} class={"link"}>View full Changelog</A>
				</div>
		  </div>
	  </div>
  );
}
