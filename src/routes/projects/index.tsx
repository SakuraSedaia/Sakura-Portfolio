import SideNavWrapper from "~/components/wrappers/side-nav-wrapper";
import Routes from "~/data/json/routes.json";
import Metadata from "~/components/meta/metadata";
import Header from "~/components/sections/global/header";

export default function Projects() {
  return (
    <main class={"projects__landing"}>
      <Metadata
        title={"Projects | Sedaia Designs"}
        description={
          "Sedaia Designs, more commonly known as Sakura is a freelance software developer and Voxel 3D Artist specialising in Minecraft style 3D art, SolidJS/React-like websites, and Blender extension development."
        }
        image={"/images/minecraft-renders/char-env/farmer-sakura.png"}
      />

      <Header title={"Projects"} class={"index__header"} />

      <SideNavWrapper projectRoutes={Routes.projects}>
        <h1>Projects</h1>
      </SideNavWrapper>
    </main>
  );
}
