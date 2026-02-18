import Footer from "~/sections/footer.jsx";
import About from "~/sections/index/about";
import NotableProjects from "~/sections/index/notable-projects";
import PreferredTooling from "~/sections/index/preferred-tooling";
import TechnicalExpertise from "~/sections/index/technical-expertise";
import Resume from "~/sections/index/resume";
import { Suspense, ErrorBoundary } from "solid-js";
import Breadcrumb from "~/components/breadcrumb.jsx";

export default function Home() {
  return (
    <ErrorBoundary fallback={(err) => <div>Error: {err.message}</div>}>
      <Suspense fallback={<div>Loading...</div>}>
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


