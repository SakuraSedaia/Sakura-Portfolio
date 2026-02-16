import { NoHydration } from "solid-js/web";

export default function TechnicalExpertise() {
  return (
    <NoHydration>
      <section id={"technical-expertise"}>
        <div class={"heading"}>
          <h1>Technical Expertise</h1>
        </div>
        <div class={"column-container"}>
          <div class={"column split"}>
            <h3>AI Tools</h3>
            <hr />
            <ul>
              <li><a href={"https://junie.ai"}>Junie</a> - Autonomous AI Agent for Development</li>
              <li><a href={"https://blog.google/technology/ai/google-gemini-next-generation-model-february-2024/"}>Gemini 1.5 Pro</a> - Primary Reasoning and Solution Planning</li>
              <li><a href={"https://openai.com/index/gpt-4o-and-more-tools-to-chatgpt-free/"}>GPT-4o</a> - Multimodal Analysis and Specialized Verification</li>
            </ul>
          </div>
          <div class={"column split"}>
            <h3>Python</h3>
            <hr />
            <ul>
              <li><a href={"https://docs.blender.org/api/current/index.html"}>Blender Python API</a> - 3D Automation and Tool Scripting</li>
              <li><a href={"https://www.python.org/"}>Python 3</a> - General Purpose Software Development</li>
            </ul>
          </div>
          <div class={"column split"}>
            <h3>Web Dev</h3>
            <hr />
            <ul>
              <li><a href={"https://developer.mozilla.org/en-US/docs/Web/HTML"}>HTML</a> - Document Structure</li>
              <li><a href={"https://sass-lang.com/"}>SCSS</a> - Advanced Styling</li>
              <li><a href={"https://developer.mozilla.org/en-US/docs/Web/CSS"}>CSS</a> - Page Layout</li>
              <li><a href={"https://www.solidjs.com/"}>SolidJS</a> - Reactive Web Framework</li>
              <li><a href={"https://developer.mozilla.org/en-US/docs/Web/JavaScript"}>JavaScript</a> - Interactive Logic</li>
            </ul>
          </div>
          <div class={"column split"}>
            <h3>Other</h3>
            <hr />
            <ul>
              <li><a href={"https://www.java.com/"}>Java</a> - Enterprise & Android Development</li>
              <li><a href={"https://kotlinlang.org/"}>Kotlin</a> - Modern JVM Programming</li>
	            <li><a>Spreadsheet Management</a></li>
            </ul>
          </div>
        </div>
      </section>
    </NoHydration>
  );
}
