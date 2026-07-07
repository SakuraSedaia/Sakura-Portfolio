import Metadata from "~/components/meta/metadata";
import IconBundle from "~/components/graphics/icon-bundle";
import { Link } from "~/components/routing/link";
import Header from "~/components/sections/global/header";
import Programming from "~/components/sections/index/programming";
import Renders from "~/components/sections/index/renders";

export default function Home() {
  return (
    <main>
      <Metadata
        title={"Sedaia Designs"}
        description={
          "Sedaia Designs, more commonly known as Sakura is a freelance software developer and Voxel 3D Artist specialising in Minecraft style 3D art, SolidJS/React-like websites, and Blender extension development."
        }
        image={"/images/minecraft-renders/char-env/farmer-sakura.png"}
      />

      <Header
        title={"Sedaia Designs"}
        description={
          <p>
            Sedaia Designs, more commonly known as Sakura is a freelance
            software developer and Voxel 3D Artist specialising in Minecraft
            style 3D art, SolidJS/React-like websites, and Blender extension
            development.
          </p>
        }
        class={"index__header"}
      >
        <div class={"index__header-links"}>
          <Link path={"https://youtube.com/c/SakuraSedaia"}>
            <IconBundle name={"youtube"} />{" "}
            <span class={"index__header-link-text"}>Youtube</span>
          </Link>
          <Link path={"https://codeberg.org/SakuraSedaia"}>
            <IconBundle name={"codeberg"} />{" "}
            <span class={"index__header-link-text"}>Codeberg</span>
          </Link>
          <Link path={"https://github.com/SakuraSedaia"}>
            <IconBundle name={"github"} />{" "}
            <span class={"index__header-link-text"}>Github</span>
          </Link>
        </div>
      </Header>

      <Renders />
      <Programming />
    </main>
  );
}
