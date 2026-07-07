import {
  createSignal,
  For,
  createMemo,
  Show,
  onMount,
  onCleanup,
  createEffect,
} from "solid-js";
import { A } from "@solidjs/router";
import DownloadLink from "./download-link";

interface AssetCompatibility {
  minVersion: string;
  maxVersion: string;
}

interface AssetBuild {
  version?: string;
  label?: string;
  fileName?: string;
  date?: string;
  changelog?: string;
  compatibility?: AssetCompatibility;
  size?: string;
  notes?: string;
  disabled?: boolean;
}

interface AssetVersion {
  version: string;
  label?: string;
  date?: string;
  fileName?: string;
  changelog?: string;
  compatibility?: AssetCompatibility;
  builds: AssetBuild[];
}

interface AssetBranch {
  description: string;
  path: string;
  enabled?: boolean;
  versions: AssetVersion[];
  namePrefix?: string;
}

interface DownloadAssetsProps {
  json: string;
  software: string;
  repo?: string;
}

export default function DownloadAssets(props: DownloadAssetsProps) {
  const branch = createMemo<AssetBranch>(() => JSON.parse(props.json));

  // Group builds by version
  const versionsMap = createMemo(() => {
    const map = new Map<string, AssetBuild[]>();
    const versions = branch().versions || [];

    versions.forEach((v) => {
      map.set(
        v.version,
        v.builds.map((b) => ({
          ...b,
          version: v.version,
          fileName: b.fileName || v.fileName,
          date: b.date || v.date,
          changelog: b.changelog || v.changelog,
          compatibility: b.compatibility || v.compatibility,
        })),
      );
    });

    return map;
  });

  const versionList = createMemo(() => Array.from(versionsMap().keys()));

  const [selectedVersion, setSelectedVersion] = createSignal<string>("");
  const [variationIndex, setVariationIndex] = createSignal(0);
  const [isOpen, setIsOpen] = createSignal(false);

  const currentVariations = createMemo(
    () => versionsMap().get(selectedVersion()) || [],
  );
  const build = createMemo(
    () => currentVariations()[variationIndex()] || currentVariations()[0],
  );

  const filePath = createMemo(() => {
    if (!build()) return "";
    // Ensure path starts with assets/ as per guidelines
    let path = branch().path;
    if (!path.startsWith("assets/")) {
      path = `assets/${path}`;
    }
    return `${path}/${build()?.fileName}`;
  });

  let dropdownRef: HTMLDivElement | undefined;
  let tabContainerRef: HTMLDivElement | undefined;
  const [indicatorStyle, setIndicatorStyle] = createSignal({});

  const handleClickOutside = (e: MouseEvent) => {
    if (dropdownRef && !dropdownRef.contains(e.target as Node)) {
      setIsOpen(false);
    }
  };

  const updateIndicator = () => {
    if (tabContainerRef) {
      const activeTab = tabContainerRef.querySelector(
        ".tab.active",
      ) as HTMLDivElement | null;
      if (activeTab) {
        setIndicatorStyle({
          left: `${activeTab.offsetLeft}px`,
          width: `${activeTab.offsetWidth}px`,
          height: `${activeTab.offsetHeight}px`,
        });
      }
    }
  };

  onMount(() => {
    if (typeof document !== "undefined") {
      document.addEventListener("mousedown", handleClickOutside);
    }
    if (typeof window !== "undefined") {
      window.addEventListener("resize", updateIndicator);
      updateIndicator();
    }
    onCleanup(() => {
      if (typeof document !== "undefined") {
        document.removeEventListener("mousedown", handleClickOutside);
      }
      if (typeof window !== "undefined") {
        window.removeEventListener("resize", updateIndicator);
      }
    });
  });

  // Update indicator when variation changes
  createEffect(() => {
    variationIndex();
    selectedVersion();
    setTimeout(updateIndicator, 0);
  });

  createEffect(() => {
    const versions = versionList();
    if (versions.length > 0 && !versions.includes(selectedVersion())) {
      setSelectedVersion(versions[0]);
      setVariationIndex(0);
    }
  });

  return (
    <div class={"download-assets"}>
      <div class={"heading"}>
        <h2>{branch().description}</h2>
        <hr />
      </div>
      <div class={"download-select"}>
        <div class={"label"}>Version:</div>
        <div class={"custom-select"} ref={dropdownRef}>
          <div
            class={`select-trigger ${isOpen() ? "open" : ""}`}
            onClick={() => setIsOpen(!isOpen())}
          >
            <div>
              {selectedVersion()}
              {versionList().indexOf(selectedVersion()) === 0
                ? " (Latest)"
                : ""}
            </div>
            <div class={`arrow ${isOpen() ? "open" : ""}`} />
          </div>
          <div class={`select-options ${isOpen() ? "show" : ""}`}>
            <For each={versionList()}>
              {(version, index) => (
                <div
                  class={`select-option ${version === selectedVersion() ? "selected" : ""}`}
                  onClick={() => {
                    setSelectedVersion(version);
                    setVariationIndex(0);
                    setIsOpen(false);
                  }}
                >
                  {version}
                  {index() === 0 ? " (Latest)" : ""}
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
                class={`tab ${index() === variationIndex() ? "active" : ""}`}
                onClick={() => setVariationIndex(index())}
              >
                {variation.label || `Variation ${index() + 1}`}
              </div>
            )}
          </For>
        </div>
      </Show>

      <div
        class={`download-info ${currentVariations().length <= 1 ? "no-tabs" : ""}`}
      >
        <div class={`download-link ${build()?.disabled ? "disabled" : ""}`}>
          <DownloadLink path={filePath()} disabled={build()?.disabled}>
            Download {selectedVersion()} {build()?.label || ""}
          </DownloadLink>
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
              <td>
                {build()?.version} {build()?.label ? `(${build().label})` : ""}
              </td>
              <td>{build()?.date}</td>
              <td>{build()?.size}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <Show when={build()?.compatibility}>
        <div class={"compatibility-footnote"}>
          <p>
            Compatible with {props.software} versions:{" "}
            {build()?.compatibility?.minVersion} to{" "}
            {build()?.compatibility?.maxVersion}
          </p>
        </div>
      </Show>
      <div class={"download-notes"}>
        <h2>Changes Summary</h2>
        <p>{build()?.notes}</p>
        <A
          href={`/projects/changelog/${
            build()?.changelog ||
            build()?.fileName?.split(".")[0] ||
            `${branch().namePrefix}_${build()?.version}`
          }`}
          class={"link"}
        >
          View full Changelog
        </A>
        <Show when={props.repo}>
          {" - "}
          <a href={props.repo} target="_blank" class={"link"}>
            Repository
          </a>
        </Show>
      </div>
    </div>
  );
}
