import { NoHydration } from "solid-js/web";

export default function FeaturedAssets() {
  return (
    <NoHydration>
      <section>
        <heading>
          <h1>Featured Assets</h1>
        </heading>

        <column-container>
          <column>
            <img
              src={"/images/rig-headers/SACR/R7.4 Full.png"}
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
          </column>

          <column>
            <img
              src={"/images/rig-headers/rig-interface/rig-interface-3.png"}
              alt={"Sakura's Rig Interface Logo Version 3"}
            />
            <hr />
            <p>
              Sakura's Advanced Character Rig is a Minecraft Character rig
              developed for use in Blender 3D with the original purpose of
              being a lightweight, highly customizable minecraft rig able to
              be used on all levels of hardware.
            </p>
            <div class="btn-centered">
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
          </column>
        </column-container>
      </section>
    </NoHydration>
  );
}
