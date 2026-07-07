import { NoHydration } from "solid-js/web";
import IconBundle from "~/components/graphics/icon-bundle";

export default function About() {
  return (
    <NoHydration>
      <section id={"about"}>
        <div class={"heading"}>
          <h1>About Sakura Character Rig</h1>
        </div>
        <div class={"standard-container"}>
          <p>
            Sakura's Advanced Character Rig is a lightweight and highly
            customizable rig for{" "}
            <a href={"https://blender.org/"} class={"link"} target={"_blank"}>
              Blender 3D
            </a>
            , and has been developed since early 2019. The current build, R7.4
            was originally started as Revision 3 back in 2021, and has grown
            through various forms through the years, and now is fully integrated
            with a UI Extension for greater customizability
          </p>

          <div class={"feature-grid"}>
            <div class={"feature-card"}>
              <div class={"feature-icon"}>
                <IconBundle name={"quick-access"} />
              </div>
              <h3>Lightweight</h3>
              <p>
                Optimized for performance while maintaining a high level of
                detail and flexibility.
              </p>
            </div>
            <div class={"feature-card"}>
              <div class={"feature-icon"}>
                <IconBundle name={"rig-renaming"} />
              </div>
              <h3>Customizable</h3>
              <p>
                Highly flexible rig structure developed and refined since 2019
                for professional use.
              </p>
            </div>
            <div class={"feature-card"}>
              <div class={"feature-icon"}>
                <IconBundle name={"python-bw"} />
              </div>
              <h3>Integrated UI</h3>
              <p>
                Seamlessly integrates with the Sakura Rig Utilities extension
                for advanced controls.
              </p>
            </div>
            <div class={"feature-card"}>
              <div class={"feature-icon"}>
                <IconBundle name={"globe"} />
              </div>
              <h3>Community Ready</h3>
              <p>
                Used by animators worldwide for high-quality Minecraft-themed
                animations.
              </p>
            </div>
          </div>
        </div>
      </section>
    </NoHydration>
  );
}
