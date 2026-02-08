import { For } from "solid-js";
import assetData from "~/jsondata/asset-index.json";
import AssetCard from "./asset-card";

export default function DownloadableAssets() {
  return (
    <section id={"assets"}>
      <heading>
        <h1>Downloadable Assets</h1>
      </heading>

      <grid-container>
        <For each={assetData.assets}>
          {(asset) => <AssetCard data={JSON.stringify(asset)} />}
        </For>
      </grid-container>
    </section>
  );
}
