import Header from "~/sections/header.jsx";
import Footer from "~/sections/footer.jsx";
import About from "~/sections/index/about";
import NotableProjects from "~/sections/index/notable-projects";
import PreferredTooling from "~/sections/index/preferred-tooling";
import TechnicalExpertise from "~/sections/index/technical-expertise";
import Resume from "~/sections/index/resume";

export default function Home() {
  return (
    <>
	    <About />

      <div class={"content-container"}>
        <NotableProjects />
        <PreferredTooling />
        <TechnicalExpertise />
        <Resume />
      </div>

      <Footer />
    </>
  );
}


