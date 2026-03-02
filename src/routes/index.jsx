import Footer from "~/sections/footer.jsx";
import About from "~/sections/index/about";
import NotableProjects from "~/sections/index/notable-projects";
import PreferredTooling from "~/sections/index/preferred-tooling";
import TechnicalExpertise from "~/sections/index/technical-expertise";
import Resume from "~/sections/index/resume";
import { Suspense, ErrorBoundary } from "solid-js";
import { Title, Meta } from "@solidjs/meta";
import Breadcrumb from "~/components/navigation/breadcrumb.jsx";

export default function Home() {
  return (
    <ErrorBoundary fallback={(err) => <div>Error: {err.message}</div>}>
      <Suspense fallback={<div>Loading...</div>}>
        <Title>Sedaia Designs - Digital Portfolio</Title>
        <Meta name="description" content="Welcome to the digital portfolio of Sedaia Designs, featuring Minecraft assets, plugins, animations, and more." />
        <About />

        <div class={"content-container"}>
	        <Breadcrumb items={[
		        { label: "Home", href: "/" }
	        ]} />
          <NotableProjects />
          <PreferredTooling />
          <TechnicalExpertise />
          <Resume />
        </div>

        <Footer />
      </Suspense>
    </ErrorBoundary>
  );
}


