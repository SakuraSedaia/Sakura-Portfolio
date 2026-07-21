import { NoHydration } from "solid-js/web";
import IconBundle from "~/components/graphics/icon-bundle";

export default function BlenderDevAbout() {
  return (
    <NoHydration>
      <section id={"about"}>
        <div class={"heading"}>
          <h1>About Blender Development for PyCharm</h1>
        </div>
        <div class={"standard-container"}>
          <p>
            Blender Development for PyCharm is a comprehensive plugin that
            streamlines the creation and debugging of Blender extensions by
            enabling seamless launch and real-time reloading directly from the
            IDE. It features a dedicated management system for multiple Blender
            versions (LTS 4.2+, 5.0, & 5.1) and more.
          </p>

          <div class={"feature-grid"}>
            <div class={"feature-card"}>
              <div class={"feature-icon"}>
                <IconBundle name={"blender-bw"} />
              </div>
              <h3>Blender Management</h3>
              <p>
                Dedicated system for discovering, downloading, and managing
                multiple Blender versions with automatic linter configuration.
              </p>
            </div>
            <div class={"feature-card"}>
              <div class={"feature-icon"}>
                <IconBundle name={"quick-access"} />
              </div>
              <h3>Real-Time Development</h3>
              <p>
                Robust auto-reload capabilities powered by bidirectional TCP
                communication for instant feedback in Blender.
              </p>
            </div>
            <div class={"feature-card"}>
              <div class={"feature-icon"}>
                <IconBundle name={"codeberg"} />
              </div>
              <h3>Automated Lifecycle</h3>
              <p>
                Streamlined project creation via an integrated wizard that
                handles multi-source directories and manifest configuration.
              </p>
            </div>
            <div class={"feature-card"}>
              <div class={"feature-icon"}>
                <IconBundle name={"globe"} />
              </div>
              <h3>Global Ready</h3>
              <p>
                Comprehensive internationalization support for 11 languages,
                ensuring a native experience for developers worldwide.
              </p>
            </div>
          </div>

          <h2 class={"styled-heading"}>License</h2>
          <p>
            This project is licensed under the{" "}
            <strong>GNU General Public License v3.0 (GPL-3.0)</strong>.
          </p>
        </div>
        <div class={"notice ai-notice"}>
          <h3>AI Usage Declaration</h3>
          <p>
            Use of LLM's were used to generate and assist with the development
            of the project
          </p>
          <p>
            <strong>Human Oversight:</strong> All AI-generated contributions are
            strictly reviewed, tested, and approved by{" "}
            <strong>Sakura Sedaia</strong> to ensure project integrity and
            security.
          </p>
        </div>
      </section>
    </NoHydration>
  );
}
