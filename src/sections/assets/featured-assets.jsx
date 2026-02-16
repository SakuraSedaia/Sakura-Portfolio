import { NoHydration } from "solid-js/web";
import OptimizedImage from "~/components/optimized-image.jsx";

export default function FeaturedAssets() {
  return (
    <NoHydration>
      <section>
        <header>
          <h1>Featured Assets</h1>
        </header>

        <div class={"column-container"}>
          <div class={"column"}>
            <OptimizedImage
              src={"/images/rig-headers/SACR/r7.4-full"}
              alt={"Sakura's Advanced Character Rig Logo"}
            />
            <hr />
            <p>
              Sakura's Advanced Character Rig is a Minecraft Character rig
              developed for use in Blender 3D with the original purpose of
              being a lightweight, highly customizable minecraft rig able to
              be used on all levels of hardware.
            </p>
            <a class={"btn"} href={"/asset/sakura-character-rig"}>
              See Rig Page
            </a>
          </div>

          <div class={"column"}>
            <OptimizedImage
              src={"/images/rig-headers/rig-interface/rig-interface-3"}
              alt={"Sakura's Rig Interface Logo Version 3"}
            />
            <hr />
            <p>
              Sakura's Advanced Character Rig is a Minecraft Character rig
              developed for use in Blender 3D with the original purpose of
              being a lightweight, highly customizable minecraft rig able to
              be used on all levels of hardware.
            </p>
            <div class={"btn-centered"}>
              <a class={"btn"} href={"/asset/sakura-rig-interface"}>
                See Extension Page
              </a>
              <a
                class={"btn"}
                href={
                  "https://extensions.blender.org/add-ons/sakura-rig-gui/"
                }
              >
                Blender Extensions
              </a>
            </div>
          </div>
        </div>
      </section>
    </NoHydration>
  );
}
