import { NoHydration } from "solid-js/web";
import OptimizedImage from "~/components/media/optimized-image.jsx";
import { A } from "@solidjs/router";

export default function FeaturedPlugins() {
  return (
    <NoHydration>
      <section id={"featured-plugins"}>
        <div class={"heading"}>
          <h1>Featured Plugins</h1>
        </div>
        <div class={"column-container"}>
          <div class={"column"}>
            <OptimizedImage
              src={"/images/card-headers/rig-interface-3"}
              alt={"Sakura Rig Interface Logo"}
            />
            <hr />
            <p>
              The Sakura Rig Interface is a powerful Blender Addon that streamlines your animation workflow
              by providing a dedicated UI for controlling and customizing Sakura's character rigs.
            </p>
            <A class={"btn"} href={"/plugin/sakura-rig-interface"}>
              See Rig Interface Page
            </A>
          </div>
        </div>
      </section>
    </NoHydration>
  );
}
