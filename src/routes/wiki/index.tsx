import Metadata from "~/components/meta/metadata";
import Header from "~/components/sections/global/header";

const metadata = {
  title: "Wiki Home",
  description:
    "Home of Sakura's Wiki, where you can find information on his projects, tools, and resources.",
};

export default function Wiki() {
  return (
    <main>
      <Metadata
        title={metadata.title + " | Sedaia Designs"}
        description={metadata.description}
        image={"/images/headers/sacr.avif"}
      />

      <Header
        title={metadata.title}
        class={"wiki__header"}
        description={metadata.description}
        image={"/images/headers/sacr.avif"}
      />

      <section class={"wiki__projects"}>
        <h2>Projects</h2>
        <ul>
          <li>
            <a href={"/wiki/projects/sakura-rig-utilities"}>
              Sakura Rig Utilities
            </a>
          </li>
          <li>
            <a href={"/wiki/projects/sakura-character-rig"}>
              Sakura Character Rig
            </a>
          </li>
          <li>
            <a href={"/wiki/projects/blender-development"}>
              Blender Development
            </a>
          </li>
        </ul>
      </section>
    </main>
  );
}
