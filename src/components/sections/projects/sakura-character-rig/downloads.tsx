import { Show } from "solid-js";
import rigIndex from "~/data/json/projects/sacr-index.json";
import DownloadAssets from "~/components/projects/download-assets";

export default function Downloads() {
  const data = rigIndex.SACR;
  const branches = data.branches;

  return (
    <section id={"downloads"}>
      <div class={"heading"}>
        <h1>Downloads</h1>
      </div>
      <div class={"standard-container"}>
        <DownloadAssets
          json={JSON.stringify(branches.stable)}
          software={data.software}
          repo={data.repo}
        />

        <Show when={branches.dev.enabled}>
          <hr style={{ margin: "2rem 0" }} />
          <DownloadAssets
            json={JSON.stringify(branches.dev)}
            software={data.software}
            repo={data.repo}
          />
        </Show>
      </div>
    </section>
  );
}
