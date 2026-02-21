import { NoHydration } from "solid-js/web";
import OptimizedImage from "~/components/media/optimized-image.jsx";
import { A } from "@solidjs/router";

export default function FeaturedAssets() {
  return (
    <NoHydration>
      <section>
        <div class={"heading"}>
          <h1>Featured Assets</h1>
        </div>

        <div class={"column-container"}>
          <div class={"column"}>
            <OptimizedImage
              src={"/images/card-headers/character-rig-7.4"}
              alt={"Sakura's Advanced Character Rig Logo"}
            />
            <hr />
            <p>
              Sakura's Advanced Character Rig is a Minecraft Character rig
              developed for use in Blender 3D with the original purpose of
              being a lightweight, highly customizable minecraft rig able to
              be used on all levels of hardware.
            </p>
            <A class={"btn"} href={"/asset/sakura-character-rig"}>
              See Rig Page
            </A>
          </div>

        </div>
      </section>
    </NoHydration>
  );
}
