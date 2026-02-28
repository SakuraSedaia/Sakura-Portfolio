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
              For more detailed documentation, including in-depth configuration, architectural overviews, and usage guides, please visit the official <a href="https://wiki.sakura-sedaia.com/docs/blender-development-pycharm/index.html" target="_blank" class={"link"}>Blender Development for PyCharm Wiki</a>.
            </p>
          </div>
          <h2 class={"styled-heading"}>Configuration and Setup</h2>
          <ol class={"styled-list"}>
            <li>In PyCharm, install the plugin from disk via <strong>Settings</strong> &gt; <strong>Plugins</strong> &gt; Gear Icon.</li>
            <li>Create a new <strong>Blender</strong> Run Configuration (Testing, Build, Validate, or Command).</li>
            <li>Select your <strong>Blender version</strong> and optionally enable <strong>Sandboxing</strong> for project isolation.</li>
            <li>Enable <strong>Auto-reload extension on save</strong> in <strong>Settings</strong> &gt; <strong>Tools</strong> &gt; <strong>Blender Extension Integration</strong>.</li>
          </ol>
          <h2 class={"styled-heading"}>Blender Management</h2>
          <p>The <strong>Blender Management</strong> tool window on the right sidebar allows you to download Blender versions (4.2+ to 5.0) and manage your <code>.blender-sandbox</code> folder.</p>
          <h2 class={"styled-heading"}>Usage</h2>
          <ul class={"styled-list"}>
            <li><strong>Automatic Reload:</strong> Triggered on file save (<code>Ctrl+S</code>) once enabled in settings.</li>
            <li><strong>Manual Reload:</strong> Use <code>Ctrl+Alt+R</code> or the <strong>Blender</strong> &gt; <strong>Reload Extension</strong> menu.</li>
            <li><strong>Custom Splash:</strong> Add <code>splash.png</code> to your project root to personalize sandboxed sessions.</li>
          </ul>
        </div>
      </section>
    </NoHydration>
  );
}
