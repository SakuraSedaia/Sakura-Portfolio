import { NoHydration } from "solid-js/web";
import addonIndex from "~/jsondata/addon-index.json";
import PluginCard from "./plugin-card";

export default function AllPlugins() {
  const blenderDev = addonIndex.BlenderDevelopment.find(i => i.branch === "stable");
  const sri = addonIndex.SakuraRigInterface.find(i => i.branch === "stable");

  return (
    <NoHydration>
      <section id={"plugins-list"}>
        <div class={"heading"}>
          <h1>Plugins & Extensions</h1>
        </div>

        <div class={"column-container"}>
          <PluginCard 
            data={sri} 
            href={"/plugin/sakura-rig-interface"} 
          />
          <PluginCard 
            data={blenderDev} 
            href={"/plugin/blender-development"} 
          />
        </div>
      </section>
    </NoHydration>
  );
}
