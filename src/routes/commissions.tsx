import { Link } from "~/components/links";
import Metadata from "~/components/page-metadata";

export default function Commissions() {
  return (
    <main>
      <Metadata
        title={"Commissions | Sedaia Designs"}
        description={
          "Commission Sakura for voxel 3D art, Minecraft-style renders, web development, and Blender extension work through Sedaia Designs."
        }
        url={"/commissions"}
      />
      <article>
        <h1>Commissions</h1>
        <p>
          Sakura is currently seeking opportunities to work on exciting projects
          that push the boundaries of what is possible in the world of 3D art
          and software development.
        </p>
        <p>
          If you are interested in collaborating with Sakura on a project or
          getting a commission, feel free to reach out to him at{" "}
          <Link path="mailto:sakusedaia@outlook.com">
            sakusedaia@outlook.com
          </Link>{" "}
          or visit the <Link path={"/commissions"}>commissions</Link> page.
        </p>
      </article>
    </main>
  );
}
