import Metadata from "~/components/page-metadata";
import { Link } from "~/components/links";


export default function Home() {
  return (
    <main>
      <Metadata
        title={"About Sakura | Sedaia Designs"}
        description={
          "Learn about Sakura, a freelance software developer and voxel 3D artist specialising in Minecraft-style environments, SolidJS websites, and Blender extension development."
        }
        url={"/about"}
      />
      <section class={"header"}>
        <h1>About Sakura</h1>
      </section>
      <section>
        <p>
          Sakura is a U.S.-based developer, UI designer, and Blender artist
          with a focus on open source software, SolidJS websites, and
          Blender-related development. His work sits between practical software
          engineering and 3D production, with projects ranging from portfolio
          sites and web interfaces to Blender plugins, development tools, rigs,
          and Minecraft-inspired assets.
        </p>
        <p>
          In web development, Sakura works with SolidJS, JavaScript, HTML, CSS,
          and SCSS to build responsive, user-focused digital experiences. He
          also uses Python for general software development, automation, and
          Blender scripting, and has experience with Java and Kotlin for
          IntelliJ Platform development.
        </p>
        <p>
          In Blender, Sakura creates high-quality Minecraft-style renders,
          downloadable 3D assets, Hytale and Minecraft tools, and custom rig
          interfaces. His Blender development work includes plugins and tooling
          designed to make extension development, asset management, and creative
          production more efficient.
        </p>
      </section>
      <section>
        <h2>Focus Areas</h2>
        <p>
          Sakura's primary interests are Blender extension development, voxel
          and Minecraft-style 3D art, SolidJS application design, and open
          source tooling. He enjoys building systems that support creative work,
          especially when a tool can remove repetitive setup or make a technical
          workflow easier to understand.
        </p>
        <p>
          Outside of purely digital work, Sakura has a hands-on technical
          background in data center operations, industrial assembly, and
          automotive service. That experience informs how he approaches
          debugging, documentation, mechanical workflows, and user-facing tool
          design.
        </p>
      </section>
      <section>
        <h2>Technical Background</h2>
        <ul>
          <li>SolidJS, JavaScript, HTML, CSS, and SCSS for web development.</li>
          <li>Python and the Blender Python API for automation and tooling.</li>
          <li>Java and Kotlin for IntelliJ Platform and plugin development.</li>
          <li>Blender, CAD, Photoshop, and creative production software.</li>
          <li>Git, GitHub, Codeberg, Gitea, SSH, Docker, Linux, and Windows.</li>
        </ul>
      </section>
      <section>
        <h2>Where to Find Sakura</h2>
        <p>
          Sakura publishes open source and portfolio work across{" "}
          <Link path={"https://github.com/SakuraSedaia"}>GitHub</Link>,{" "}
          <Link path={"https://codeberg.org/SakuraSedaia"}>Codeberg</Link>, and{" "}
          <Link path={"https://youtube.com/c/SakuraSedaia"}>YouTube</Link>.
        </p>
      </section>
    </main>
  );
}
