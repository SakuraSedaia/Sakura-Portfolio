import { NoHydration } from "solid-js/web";

export default function BlenderDevInstructions() {
  return (
    <NoHydration>
      <section id={"instructions"}>
        <div class={"heading"}>
          <h1>Operating Instructions</h1>
        </div>
        <div class={"standard-container"}>
          <div class={"notice"}>
            <h3>More In-Depth Documentation</h3>
            <p>
              For more detailed and up to date documentation, including in-depth
              configuration, architectural overviews, and usage guides, please
              visit the official{" "}
              <a
                href="https://wiki.sakura-sedaia.com/docs/blender-development-pycharm/index.html"
                target="_blank"
                class={"link"}
              >
                Blender Development for PyCharm Wiki
              </a>
              .
            </p>
          </div>

          <div class={"instruction-blocks"}>
            <div class={"instruction-card"}>
              <h3>Configuration and Setup</h3>
              <p>Prerequisites and installation steps for PyCharm.</p>
              <ol class={"styled-list"}>
                <li>
                  Ensure <strong>uv</strong> is installed (the plugin can handle
                  this automatically).
                </li>
                <li>
                  Download the latest ZIP from the{" "}
                  <a
                    href="https://codeberg.org/SakuraSedaia/blender_pycharm/releases"
                    target="_blank"
                    class={"link"}
                  >
                    releases page
                  </a>
                  .
                </li>
                <li>
                  In PyCharm:{" "}
                  <strong>
                    Settings &gt; Plugins &gt; Install from Disk...
                  </strong>
                  .
                </li>
                <li>
                  Create a <strong>Blender</strong> Run Configuration.
                </li>
                <li>
                  Enable <strong>Auto-reload extension on save</strong> in Tools
                  settings.
                </li>
              </ol>
            </div>

            <div class={"instruction-card"}>
              <h3>Management & Usage</h3>
              <p>How to manage Blender versions and use reloading.</p>
              <ul class={"styled-list"}>
                <li>
                  <strong>Blender Management:</strong> Use the tool window on
                  the right sidebar to download and manage versions.
                </li>
                <li>
                  <strong>Automatic Reload:</strong> Triggered on{" "}
                  <code>Ctrl+S</code> once enabled.
                </li>
                <li>
                  <strong>Manual Reload:</strong> Use <code>Ctrl+Alt+R</code> or
                  the Blender menu.
                </li>
                <li>
                  <strong>Custom Splash:</strong> Add <code>splash.png</code> to
                  your project root.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </NoHydration>
  );
}
