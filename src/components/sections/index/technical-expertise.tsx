import { For } from "solid-js";

type ExpertiseItem = {
  name: string;
  url: string;
  summary: string;
};

type ExpertiseGroup = {
  title: string;
  items: ExpertiseItem[];
};

const expertiseGroups: ExpertiseGroup[] = [
  {
    title: "Web Dev",
    items: [
      {
        name: "HTML/CSS",
        url: "https://developer.mozilla.org/en-US/docs/Web/",
        summary: "Document structure and styling.",
      },
      {
        name: "SCSS",
        url: "https://sass-lang.com/",
        summary: "Advanced styling.",
      },
      {
        name: "SolidJS",
        url: "https://www.solidjs.com/",
        summary: "Reactive web framework.",
      },
      {
        name: "TypeScript",
        url: "https://www.typescriptlang.org/docs/",
        summary: "Interactive logic.",
      },
    ],
  },
  {
    title: "Other",
    items: [
      {
        name: "Kotlin",
        url: "https://kotlinlang.org/",
        summary: "Modern IntelliJ platform development.",
      },
      {
        name: "Blender Python API",
        url: "https://docs.blender.org/api/current/index.html",
        summary: "3D automation and tool scripting in Python.",
      },
      {
        name: "Python 3",
        url: "https://www.python.org/",
        summary: "General purpose software development.",
      },
    ],
  },
];

export default function TechnicalExpertise() {
  return (
    <section id={"technical-expertise"} class={"index__technical-expertise"}>
      <h2>Technical Expertise</h2>

      <div class={"index__technical-expertise-grid"}>
        <For each={expertiseGroups}>
          {(group) => (
            <article class={"index__technical-expertise-group"}>
              <h3>{group.title}</h3>
              <ul>
                <For each={group.items}>
                  {(item) => (
                    <li>
                      <a href={item.url} target={"_blank"} rel={"noreferrer"}>
                        {item.name}
                      </a>
                      <p>{item.summary}</p>
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
