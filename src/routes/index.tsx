import Metadata from "~/components/page-metadata";
import Hero from "~/components/sections/index/hero";
import Projects from "~/components/sections/index/projects";
import Commissions from "~/components/sections/index/comissions";
import Contact from "~/components/sections/index/contact";


export default function Home() {
  
  return (
      
      {/* Page Sections */}
      <Hero />
      <Projects />
      <Commissions />
      <Contact />
    </main>
  );
}
