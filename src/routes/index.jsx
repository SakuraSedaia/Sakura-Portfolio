import Header from "~/sections/header.jsx";
import Footer from "~/sections/footer.jsx";
import About from "~/sections/index/about";
import NotableProjects from "~/sections/index/notable-projects";
import PreferredTooling from "~/sections/index/preferred-tooling";
import Technologies from "~/sections/index/technologies";
import Resume from "~/sections/index/resume";

export default function Home() {
  return (
    <>
      <Header
        title="Sakura Sedaia"
        img="about"
        desc="Freelance Software Developer and 3D Artist"
      />

      <div class={"content-container"}>
        <About />
        <NotableProjects />
        <PreferredTooling />
        <Technologies />
        <Resume />
      </div>

      <Footer />
    </>
  );
}


