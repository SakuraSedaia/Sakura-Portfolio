import { Show } from "solid-js";
import addonIndex from "~/data/json/projects/addon-index.json";
import DownloadPlugins from "~/components/projects/download-plugins";

export default function Downloads() {
  const data = addonIndex.SakuraRigUtilities;
  const branches = data.branches;

  return (
    <section id={"downloads"}>
      <div class={"heading"}>
        <h1>Downloads</h1>
      </div>
      <div class={"column-container"}>
        <DownloadPlugins
          json={JSON.stringify(branches.stable)}
          software={data.software}
          repo={data.repo}
        />

        <Show when={branches.dev.enabled}>
          <DownloadPlugins
            json={JSON.stringify(branches.dev)}
            software={data.software}
            repo={data.repo}
          />
        </Show>
      </div>
    </section>
  );
}
