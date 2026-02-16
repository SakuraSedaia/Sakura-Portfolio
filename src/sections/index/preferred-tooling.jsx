import { NoHydration } from "solid-js/web";

export default function PreferredTooling() {
  return (
    <NoHydration>
      <section id={"preferred-tooling"}>
        <heading>
          <h1>Preferred Tooling</h1>
        </heading>

        <div class={"grid-container"}>
          <div class={"grid-item"}>
            <h1>IDEs:</h1>
            <hr />
            <h2>
              <a
                href={"https://www.jetbrains.com/pycharm/"}
                target={"_blank"}
                class={"link"}
              >
                PyCharm
              </a>
            </h2>
            <p>Python and Blender Development</p>
            <hr />
            <h2>
              <a
                href={"https://www.jetbrains.com/idea/"}
                target={"_blank"}
                class={"link"}
              >
                Intellij IDEA
              </a>
            </h2>
            <p>Java and Kotlin</p>

            <hr />
            <h2>
              <a
                href={"https://www.jetbrains.com/webstorm/"}
                target={"_blank"}
                class={"link"}
              >
                Webstorm
              </a>
            </h2>
            <p>Website and Javascript development</p>
          </div>

          <div class={"grid-item"}>
            <h1>3D Pipeline:</h1>
            <hr />
            <h2>
              <a
                href={"https://www.blender.org/"}
                target={"_blank"}
                class={"link"}
              >
                Blender
              </a>
            </h2>
            <p>3D Rendering, Modelling, and Rigging</p>
            <hr />
            <h2>
              <a
                href={"https://www.blockbench.net/"}
                target={"_blank"}
                class={"link"}
              >
                Blockbench
              </a>
            </h2>
            <p>Textures and Voxel Models</p>
          </div>

          <div class={"grid-item"}>
            <h1>Video Editing:</h1>
            <hr />
            <h2>
              <a
                href={
                  "https://www.blackmagicdesign.com/products/davinciresolve"
                }
                target={"_blank"}
                class={"link"}
              >
                Davinci Resolve
              </a>
            </h2>
            <p>Video Editing</p>
          </div>

          <div class={"grid-item"}>
            <h1>Photo Editing:</h1>
            <hr />
            <h2>
              <a
                href={
                  "https://www.serif.com/affinity/photo/"
                }
                target={"_blank"}
                class={"link"}
              >
                Affinity Photo 2
              </a>
            </h2>
            <p>Photo Editing and Manipulation</p>
          </div>
        </div>
      </section>
    </NoHydration>
  );
}
