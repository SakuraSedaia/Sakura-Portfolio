import { Link } from "~/components/links";
import { CardGallery, CardItem } from "~/components/cards/CardGallery";
import ProjectsList from "~/data/json/projects.json";
import { For } from "solid-js";

export default function Projects() {
  return (
    <section class={"index__projects"}>
      <h2>Projects</h2>

      <CardGallery>
        <For each={ProjectsList}>
          {(prop, i) => (
            <CardItem
              title={prop.title}
              description={prop.description}
              image={prop.imageSrc}
              imageDescription={prop.imageDescription}
              imageAlt={prop.imageAlt}
              linkPath={prop.linkPath}
            />
          )}
        </For>
      </CardGallery>

      <p>
        Check out some of Sakura's projects on his{" "}
        <Link path="https://projects.sakura-sedaia.com">projects page</Link>.
      </p>
    </section>
  );
}
