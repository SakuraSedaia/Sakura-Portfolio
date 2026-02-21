import { NoHydration } from "solid-js/web";

export default function BlenderDevInstructions() {
  return (
    <NoHydration>
      <section id={"instructions"}>
        <div class={"heading"}>
          <h1>Operating Instructions</h1>
        </div>
        <div class={"standard-container"}>
          <h2 class={"blender-dev-heading"}>Setup</h2>
          <ol class={"blender-dev-list"}>
            <li>Open <strong>Run/Debug Configurations</strong> (Run &gt; Edit Configurations...).</li>
            <li>Click <strong>+</strong> and select <strong>Blender</strong>.</li>
            <li>(Optional) Open the <strong>Blender Management</strong> tool window on the right sidebar to view, download, or delete managed Blender versions, or to clear the project's <code>.blender_sandbox</code> folder.</li>
            <li>Choose a configuration template: <strong>Testing</strong>, <strong>Build</strong>, <strong>Validate</strong>, or <strong>Command</strong>.</li>
            <li>Choose a Blender version from the <strong>Blender version</strong> dropdown (4.2+). Blender 5.0 is the default version.</li>
            <li>(Testing only) Toggle <strong>Enable Sandboxing</strong> to isolate your development environment.</li>
            <li>(Testing only) Set the <strong>Addon source directory</strong> and optionally a <strong>symlink name</strong>.</li>
            <li>(Optional) In <strong>Settings</strong> &gt; <strong>Tools</strong> &gt; <strong>Blender Extension Integration</strong>, check <strong>Auto-reload extension on save</strong>.</li>
          </ol>
          <h2 class={"blender-dev-heading"}>Logging and Troubleshooting</h2>
          <p>The plugin maintains a runtime log in the project root: <code>blender_plugin.log</code>. This log contains detailed information about Blender downloads, symbolic links, and startup arguments.</p>
          <h2 class={"blender-dev-heading"}>Usage</h2>
          <ul class={"blender-dev-list"}>
            <li><strong>Testing:</strong> Create a new <strong>Blender</strong> Run Configuration, select the <strong>Testing</strong> template, and run it.</li>
            <li><strong>Manual Reload:</strong> Go to the <strong>Blender</strong> menu and select <strong>Reload Extension</strong>, or use the shortcut <code>Ctrl+Alt+R</code>.</li>
            <li><strong>Automatic Reload:</strong> If enabled in settings, simply save any file in your project (<code>Ctrl+S</code>).</li>
          </ul>
        </div>
      </section>
    </NoHydration>
  );
}
