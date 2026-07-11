import RenderCard from "~/components/sections/index/render/render-card";
import { For } from "solid-js";
import getRenderList from "~/utils/get-render-list";

export default function Renders() {
  const previewRenders = getRenderList().slice(0, 3);

  return (
    <section class={"index__renders"}>
      <h2 id={"renders"}>Latest Renders</h2>

      <div class={"card-gallery card-gallery--renders"}>
        <For each={previewRenders}>
          {(render) => <RenderCard {...render} />}
        </For>
      </div>
    </section>
  );
}
