import Metadata from "~/components/meta/metadata";
import Header from "~/components/sections/global/header";
import { Link } from "~/components/routing/link";
import IconBundle from "~/components/graphics/icon-bundle";
import Description from "~/components/sections/about/description";
import Mission from "~/components/sections/about/mission";

export default function About() {
  return (
    <main class={"route__about"}>
      <Metadata
        title={"Sedaia Designs"}
        description={
          "Sedaia Designs, more commonly known as Sakura is a freelance software developer and Voxel 3D Artist specialising in Minecraft style 3D art, SolidJS/React-like websites, and Blender extension development."
        }
        image={"/images/minecraft-renders/char-env/farmer-sakura.png"}
      />

      <Header title={"About Sakura Sedaia"} class={"index__header"}>
        <Link path={"https://youtube.com/c/SakuraSedaia"}>
          <IconBundle name={"youtube"} /> Youtube
        </Link>
        <Link path={"https://codeberg.org/SakuraSedaia"}>
          <IconBundle name={"codeberg"} /> Codeberg
        </Link>
        <Link path={"https://github.com/SakuraSedaia"}>
          <IconBundle name={"github"} /> Github
        </Link>
      </Header>

      <Description />

      <Mission />
    </main>
  );
}