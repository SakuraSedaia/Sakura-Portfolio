import Metadata from "~/components/meta/metadata";
import Header from "~/components/sections/global/header";
import Programming from "~/components/sections/index/programming";
import PreferredTooling from "~/components/sections/index/preferred-tooling";
import Renders from "~/components/sections/index/renders";
import TechnicalExpertise from "~/components/sections/index/technical-expertise";
import GetInTouch from "~/components/sections/index/get-in-touch";

export default function Home() {
  return (
    <main>
      <Metadata
        title={"Sedaia Designs"}
        description={
          "Sedaia Designs, more commonly known as Sakura is a freelance software developer and Voxel 3D Artist specialising in Minecraft style 3D art, SolidJS websites, and Blender extension development."
        }
        image={"images/renders/char-env/hylian_sakura_in_rito.avif"}
      />

      <Header
        title={"Sedaia Designs"}
        description={
          <p>
            Sedaia Designs, more commonly known as Sakura is a freelance
            software developer and Voxel 3D Artist specialising in Minecraft
            style 3D art, SolidJS websites, and Blender extension development.
          </p>
        }
        class={"index__header"}
        image={"images/renders/char-env/hylian_sakura_in_rito.avif"}
      />

      <Renders />
      <Programming />
      <TechnicalExpertise />
      <PreferredTooling />
      <GetInTouch />
    </main>
  );
}
