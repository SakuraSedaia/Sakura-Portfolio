import { NoHydration } from "solid-js/web";
import addonIndex from "~/jsondata/addon-index.json";
import PluginCard from "./plugin-card";

export default function AllPlugins() {

  return (
    <NoHydration>
      <section id={"plugins-list"}>
        <div class={"heading"}>
          <h1>Plugins & Extensions</h1>
        </div>

        <div class={"column-container"}>
        </div>
      </section>
    </NoHydration>
  );
}
