import { For } from "solid-js";
import assetData from "~/json-data/asset-index.json";
import AssetCard from "./asset-card";

export default function DownloadableAssets() {
  return (
    <section id={"assets"}>
      <div class={"heading"}>
        <h1>Downloadable Assets</h1>
      </div>

      <div class={"grid-container"}>
        <For each={assetData.assets}>
          {(asset) => <AssetCard data={JSON.stringify(asset)} />}
        </For>
      </div>
    </section>
  );
}
