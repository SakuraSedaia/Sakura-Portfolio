import { NoHydration } from "solid-js/web";

export default function PreferredTooling() {
  return (
    <NoHydration>
      <section id={"preferred-tooling"} class={"breakout full-width"}>
        <div class={"heading"}>
          <h1>Preferred Tooling</h1>
        </div>

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
            <p>Advanced IDE for Python Development</p>
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
            <p>Leading IDE for Java and Kotlin</p>
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
            <p>Ecosystem for Website and Javascript Development</p>
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
            <p>Open-Source Suite for 3D Modelling</p>
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
            <p>Tool for Textures and Voxel Models</p>
            <hr />
            <h2>
              <a
                href={"https://github.com/BramStoutProductions/MiEx"}
                target={"_blank"}
                class={"link"}
              >
                MiEx
              </a>
            </h2>
            <p>Minecraft and Hytale World Export Utility</p>
          </div>

          <div class={"grid-item"}>
            <h1>Media Editing:</h1>
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
            <p>Industry Standard for Professional Video Editing</p>
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
            <p>Software for Photo Editing and Manipulation</p>
          </div>
          <div class={"grid-item"}>
            <h1>Office:</h1>
            <hr />
            <h2>
              <a
                href={"https://workspace.google.com/"}
                target={"_blank"}
                class={"link"}
              >
                Google Workspace
              </a>
            </h2>
            <p>Suite for Real-Time Team Collaboration</p>
            <hr />
            <h2>
              <a
                href={"https://www.onlyoffice.com/"}
                target={"_blank"}
                class={"link"}
              >
                OnlyOffice
              </a>
            </h2>
            <p>Open-Source Solution for Office Documents</p>
          </div>
        </div>
      </section>
    </NoHydration>
  );
}
