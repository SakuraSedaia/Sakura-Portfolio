import { NoHydration } from "solid-js/web";
import { For } from "solid-js";
import addonIndex from "~/json-data/addon-index.json";
import PluginCard from "./plugin-card";

export default function AllPlugins() {

  const plugins = Object.entries(addonIndex)
    .filter(([key, value]) => !value.featured)
    .map(([key, value]) => ({
      ...value,
      id: key,
      href: `/plugin/${key.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase()}`,
    }));

  return (
    <NoHydration>
      <section id={"plugins-list"}>
        <div class={"heading"}>
          <h1>Plugins & Extensions</h1>
        </div>

        <div class={"grid-container"}>
          <For each={plugins}>
            {(plugin) => (
              <PluginCard data={plugin} href={plugin.href} />
            )}
          </For>
        </div>
      </section>
    </NoHydration>
  );
}
