import { For } from "solid-js";

type ToolItem = {
  name: string;
  url: string;
  description: string;
};

type ToolGroup = {
  title: string;
  tools: ToolItem[];
};

const toolingGroups: ToolGroup[] = [
  {
    title: "IDEs",
    tools: [
      {
        name: "PyCharm",
        url: "https://www.jetbrains.com/pycharm/",
        description: "Advanced IDE for Python development.",
      },
      {
        name: "IntelliJ IDEA",
        url: "https://www.jetbrains.com/idea/",
        description: "Leading IDE for Java and Kotlin.",
      },
      {
        name: "WebStorm",
        url: "https://www.jetbrains.com/webstorm/",
        description:
          "Ecosystem for website, JavaScript and TypeScript development.",
      },
    ],
  },
  {
    title: "3D Pipeline",
    tools: [
      {
        name: "Blender",
        url: "https://www.blender.org/",
        description: "Open-source suite for 3D modeling.",
      },
      {
        name: "Blockbench",
        url: "https://www.blockbench.net/",
        description: "Tool for textures and voxel models.",
      },
      {
        name: "MiEx",
        url: "https://github.com/BramStoutProductions/MiEx",
        description: "Minecraft and Hytale world export utility.",
      },
    ],
  },
  {
    title: "Media Editing",
    tools: [
      {
        name: "DaVinci Resolve Studio 21",
        url: "https://www.blackmagicdesign.com/products/davinciresolve",
        description: "Industry standard for professional video editing.",
      },
      {
        name: "Affinity Photo 2",
        url: "https://www.serif.com/affinity/photo/",
        description: "Software for photo editing and manipulation.",
      },
    ],
  },
  {
    title: "Office",
    tools: [
      {
        name: "Google Workspace",
        url: "https://workspace.google.com/",
        description: "Suite for real-time team collaboration.",
      },
      {
        name: "Microsoft 365",
        url: "https://www.microsoft.com/en-us/microsoft-365",
        description: "Professional Suite for real-time team collaboration.",
      },
    ],
  },
];

export default function PreferredTooling() {
  return (
    <section id={"preferred-tooling"} class={"index__preferred-tooling"}>
      <h2>Tools I Use</h2>
      <p>
        This is a collection of tools I use for my work and personal projects,
        though I am not limited by just these tools, these are simply what I
        found to be the most effective and efficient for my needs.
      </p>
      <div class={"index__preferred-tooling-grid"}>
        <For each={toolingGroups}>
          {(group) => (
            <article class={"index__preferred-tooling-group"}>
              <h3>{group.title}</h3>
              <ul>
                <For each={group.tools}>
                  {(tool) => (
                    <li>
                      <a href={tool.url} target={"_blank"} rel={"noreferrer"}>
                        {tool.name}
                      </a>
                      <p>{tool.description}</p>
                    </li>
                  )}
                </For>
              </ul>
            </article>
          )}
        </For>
      </div>
    </section>
  );
}
