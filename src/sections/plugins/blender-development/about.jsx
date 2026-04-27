import { NoHydration } from "solid-js/web";

export default function BlenderDevAbout() {
  return (
    <NoHydration>
      <section id={"about"}>
        <div class={"heading"}>
          <h1>About Blender Development for PyCharm</h1>
        </div>
        <div class={"standard-container"}>
          <p>
            Blender Development for PyCharm is a comprehensive plugin that streamlines the creation and debugging of Blender extensions by enabling seamless launch and real-time reloading directly from the IDE. It features a dedicated management system for multiple Blender versions (LTS 4.2+, 5.0, & 5.1) and more.
          </p>
          <h2 class={"styled-heading"}>Features</h2>
          <ul class={"styled-list"}>
            <li><strong>Integrated Blender Management:</strong> A dedicated system for discovering, downloading, and managing multiple Blender versions (LTS 4.2+ and newer) with automatic linter configuration and sandbox isolation.</li>
            <li><strong>Real-Time Extension Development:</strong> Robust auto-reload capabilities powered by bidirectional TCP communication, allowing for instant feedback and live updates directly within Blender as you save your code.</li>
            <li><strong>Automated Project Lifecycle:</strong> Streamlined project creation via an integrated wizard that handles multi-source directory management, manifest configuration, and automated Python virtual environment setup using <strong>uv</strong>.</li>
            <li><strong>Project Maintenance & Traits:</strong> Built-in tools for managing existing projects, including the generation of agent guidelines, run configurations, <code>.gitignore</code> templates, and GPL licenses for existing projects.</li>
            <li><strong>Platform-Aware Validation:</strong> Smart detection of system-specific requirements, such as filesystem execution permissions (e.g., <code>noexec</code> on Linux), with guided resolution steps.</li>
            <li><strong>Global Ready:</strong> Comprehensive internationalization support for 11 languages, ensuring a native experience for developers worldwide.</li>
          </ul>

          <h2 class={"styled-heading"}>License</h2>
          <p>
            This project is licensed under the <strong>GNU General Public License v3.0 (GPL-3.0)</strong>.
          </p>
        </div>
	      <div class={"notice ai-notice"}>
		      <h3>AI Usage Declaration</h3>
		      <p>
			      This project is developed in collaboration with <strong>Junie</strong>, an AI agent by JetBrains integrated into IntelliJ IDEA. AI assistance is utilized for:
		      </p>
          <ul class={"styled-list"}>
            <li><strong>Code Generation & Architecture:</strong> Implementing core logic, refactoring, and documentation.</li>
            <li><strong>Quality Assurance:</strong> Assisting with code reviews, optimization, and bug fixing.</li>
            <li><strong>Internationalization:</strong> Localizing the plugin into 11+ languages.</li>
            <li><strong>Workflow Automation:</strong> Managing repetitive tasks, git commits, and documentation updates.</li>
          </ul>
          <p>
            <strong>Human Oversight:</strong> All AI-generated contributions are strictly reviewed, tested, and approved by <strong>Sakura Sedaia</strong> to ensure project integrity and security.
          </p>
	      </div>
      </section>
    </NoHydration>
  );
}
