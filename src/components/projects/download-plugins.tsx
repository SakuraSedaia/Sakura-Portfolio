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

interface PluginCompatibility {
  minVersion: string;
  maxVersion: string;
}

interface PluginBuild {
  version?: string;
  label?: string;
  fileName?: string;
  date?: string;
  changelog?: string;
  compatibility?: PluginCompatibility;
  sourceCode?: string;
  sourceUrl?: string;
  size?: string;
  notes?: string;
  disabled?: boolean;
  license?: string;
}

interface PluginVersion {
  version: string;
  label?: string;
  date?: string;
  fileName?: string;
  changelog?: string;
  compatibility?: PluginCompatibility;
  sourceCode?: string;
  builds?: PluginBuild[];
}

interface PluginBranch {
  description: string;
  path: string;
  enabled?: boolean;
  versions: PluginVersion[];
  namePrefix?: string;
}

interface DownloadPluginProps {
  json: string;
  software: string;
  repo?: string;
}

export default function DownloadPlugins(props: DownloadPluginProps) {
  const branch = createMemo<PluginBranch>(() => JSON.parse(props.json));

  // Group builds by version
  const versionsMap = createMemo(() => {
    const map = new Map<string, PluginBuild[]>();
    const versions = branch().versions || [];

    versions.forEach((v) => {
      map.set(
        v.version,
        (v.builds || []).map((b) => ({
          ...b,
          version: v.version,
          label: v.label,
          fileName: b.fileName || v.fileName,
          date: b.date || v.date,
          changelog: b.changelog || v.changelog,
          compatibility: b.compatibility || v.compatibility,
          sourceCode: b.sourceCode || v.sourceCode,
        })),
      );
    });

    return map;
  });

  const versionList = createMemo(() => Array.from(versionsMap().keys()));

  const [selectedVersion, setSelectedVersion] = createSignal<string>("");
  const [variationIndex, setVariationIndex] = createSignal(0);
  const [isOpen, setIsOpen] = createSignal(false);

  // Use createMemo to ensure we're getting the correct data based on current signals
  const currentVariations = createMemo(() => {
    const version = selectedVersion();
    return versionsMap().get(version) || [];
  });

  const build = createMemo(() => {
    const variations = currentVariations();
    const index = variationIndex();
    return variations[index] || variations[0];
  });

  const filePath = createMemo(() => {
    const currentBuild = build();
    if (!currentBuild || !currentBuild.fileName) return "";

    let path = branch().path || "";
    // Ensure path starts with plugins/ (plural) as per guidelines
    if (path.startsWith("plugin/")) {
      path = path.replace("plugin/", "plugins/");
    } else if (path && !path.startsWith("plugins/")) {
      path = `plugins/${path}`;
    }

    // Ensure no leading/trailing slashes for join
    const cleanPath = path.replace(/^\/+|\/+$/g, "");
    const cleanFileName = currentBuild.fileName.replace(/^\/+/, "");

    return cleanPath ? `${cleanPath}/${cleanFileName}` : cleanFileName;
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
    <div class={"download-plugins"}>
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
            Download {build()?.label || "Plugin"}
          </DownloadLink>
          <Show when={build()?.sourceUrl}>
            <a
              href={build()?.sourceUrl}
              target="_blank"
              class={"link-secondary"}
            >
              Download Source
            </a>
          </Show>
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
              <td>{build()?.version}</td>
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
          href={`/projects/changelog/${build()?.changelog || build()?.fileName?.split(".")[0] || `${branch().namePrefix}_${build()?.version}`}`}
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
        <Show when={build()?.sourceCode}>
          {" - "}
          <a href={build()?.sourceCode} target="_blank" class={"link"}>
            Source Code
          </a>
        </Show>
      </div>
    </div>
  );
}
