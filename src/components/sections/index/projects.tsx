import { Link } from "~/components/links";
import { CardGallery, CardItem } from "~/components/cards/CardGallery";

export default function Projects() {
  return (
    <section class={"index__projects"}>
      <h2>Projects</h2>

      <CardGallery>
        <CardItem
          title={"Project 1"}
          description={
            "Brief summary of the project, describing what software was used"
          }
          image={"images/projects/project1.jpg"}
          linkName={"Project 1"}
          linkPath={"projects://project-1"}
        />
      </CardGallery>

      <p>
        Check out some of Sakura's projects on his{" "}
        <Link path="https://projects.sakura-sedaia.com">projects page</Link>.
      </p>
    </section>
  );
}