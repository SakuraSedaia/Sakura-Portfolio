import { NoHydration } from "solid-js/web";

export default function AboutBlenderDev() {
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
            <li><strong>Testing:</strong> Launch a Blender instance in a development environment with auto-reload, sandboxing, and symlinking enabled.</li>
            <li><strong>Auto-Reload:</strong> Automatically reload your extension in Blender whenever you save a file in PyCharm.</li>
            <li><strong>Manual Reload:</strong> Trigger a reload manually using a keyboard shortcut or menu action.</li>
            <li><strong>Project Template:</strong> Quickly start a new Blender Extension project from a single template that mirrors PyCharm’s Pure Python setup. It includes a comprehensive project wizard to configure your <code>blender_manifest.toml</code>.</li>
            <li><strong>Automated Folder Icon Detection:</strong> Directories containing a <code>blender_manifest.toml</code> file are automatically identified with a custom Blender extension folder icon for better project navigation.</li>
            <li><strong>Blender Management Tool Window:</strong> A new tool window (right side) to manage global Blender installations (Download/Delete) and clear the project-local sandbox.</li>
            <li><strong>Configurable:</strong> Easily set the path to your Blender executable and toggle auto-reload.</li>
          </ul>
        </div>
      </section>
    </NoHydration>
  );
}
