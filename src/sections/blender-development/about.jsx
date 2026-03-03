import { NoHydration } from "solid-js/web";

export default function BlenderDevAbout() {
  return (
    <NoHydration>
      <section id={"about"}>
        <div class={"heading"}>
          <h1>About Blender Extension Development for PyCharm</h1>
        </div>
        <div class={"standard-container"}>
          <div class={"notice ai-notice"}>
            <h3>AI Content Notice</h3>
            <p>
              This project was developed almost exclusively using the AI integration tools by JetBrains s.r.o. in IntelliJ IDEA. The AI tools were used to generate the initial code and documentation.
            </p>
          </div>
          <p>
            Blender Extension Development integration for PyCharm. This plugin allows you to launch Blender from within PyCharm and automatically or manually reload your Blender extensions during development.
          </p>
          <h2 class={"styled-heading"}>Features</h2>
          <ul class={"styled-list"}>
            <li><strong>Automated Environment Management:</strong> One-click downloads for Blender versions 4.2 to 5.0, automatic system installation detection, faster scans with version metadata caching, and integrated connection status.</li>
            <li><strong>Sandboxed Development:</strong> Isolate your development environment using a project-local <code>.blender-sandbox</code> folder, with support for multiple addon source folders and custom project-specific preferences.</li>
            <li><strong>Real-time Hot-Reloading:</strong> Automatically or manually reload your extension in Blender with robust <code>sys.modules</code> cache purging and a real-time status bar widget for monitoring connection states.</li>
            <li><strong>Smart Project Templates:</strong> Quickly bootstrap new extensions with a structure that mirrors PyCharm’s Pure Python setup, including a New Project Wizard for <code>blender_manifest.toml</code> configuration and specialized project types.</li>
            <li><strong>Integrated CLI Tools:</strong> One-click building into ZIP distributions, manifest validation, and support for custom Blender commands directly from the IDE.</li>
            <li><strong>Smart UI Integration:</strong> Automatic custom Blender icons for <code>.blend</code> and <code>.blend1</code> files, and integrated logging via <code>blender_plugin.log</code>.</li>
            <li><strong>User Configuration Import:</strong> When sandboxing is enabled, optionally import your main Blender preferences, startup files, and bookmarks into the sandbox.</li>
            <li><strong>Custom Splash Screens:</strong> Use a project-specific <code>splash.png</code> in your project root to personalize your development sessions.</li>
          </ul>
        </div>
      </section>
    </NoHydration>
  );
}
