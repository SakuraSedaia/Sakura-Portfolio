import Metadata from "~/components/meta/metadata";
import WikiHeader from "~/components/sections/wiki/projects/wiki-header";

export default function BlenderDevelopmentWiki() {
  return (
    <main>
      <Metadata
        title={"Blender Development Wiki | Sedaia Designs"}
        description={
          "Wiki for Sakura's Blender Development plugin for PyCharm."
        }
        image={"/images/headers/sacr.avif"}
      />

      <WikiHeader title={"Blender Development Wiki"} class={"wiki__header"} />

      <section class={"wiki__projects"}>
        <h2>Blender Development</h2>
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
