import { A } from "@solidjs/router";
import { Show } from "solid-js";
import OptimizedImage from "~/components/media/optimized-image.jsx";

export default function PluginCard(props) {
  const plugin = props.data;
  return (
    <div class={"column"}>
      <Show when={plugin.logo}>
        <OptimizedImage
          src={plugin.logo}
          alt={`${plugin.name} Logo`}
        />
      </Show>
      <hr />
      <h2>{plugin.name}</h2>
      <p>{plugin.description}</p>
      <div class={"btn-row"}>
        <A class={"btn"} href={props.href}>
          Project Page
        </A>
        <Show when={plugin.jetbrains_info && plugin.jetbrains_info.enabled !== false}>
          <a
            class={"btn"}
            href={plugin.jetbrains_info.link}
            target="_blank"
          >
            JetBrains Marketplace
          </a>
        </Show>
        <Show when={plugin.blender_ext && plugin.blender_ext.enabled !== false}>
          <a
            class={"btn"}
            href={plugin.blender_ext.link || plugin.blender_ext}
            target="_blank"
          >
            Blender Extensions
          </a>
        </Show>
      </div>
    </div>
  );
}
