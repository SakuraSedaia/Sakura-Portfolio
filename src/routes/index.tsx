import Metadata from "~/components/page-metadata";
import Hero from "~/components/sections/index/hero";
import Projects from "~/components/sections/index/projects";
import Commissions from "~/components/sections/index/comissions";
import Contact from "~/components/sections/index/contact";


export default function Home() {
  
  return (
    <main class={"index"}>
      <Metadata
        title={"Sedaia Designs"}
        description={
          "Sedaia Designs is Sakura's portfolio for Minecraft-style voxel 3D art, SolidJS websites, and Blender extension development."
        }
        url={"/"}
      />
      
      {/* Page Sections */}
      <Hero />
      <Projects />
      <Commissions />
      <Contact />
    </main>
  );
}
