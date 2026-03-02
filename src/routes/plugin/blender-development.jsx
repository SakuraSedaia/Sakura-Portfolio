import Header from "~/sections/header.jsx";
import Footer from "~/sections/footer.jsx";
import AboutBlenderDev from "~/sections/blender-development/about.jsx";
import BlenderDevInstructions from "~/sections/blender-development/instructions.jsx";
import BlenderDevIssues from "~/sections/blender-development/issues.jsx";
import { Suspense, ErrorBoundary } from "solid-js";
import { Title, Meta } from "@solidjs/meta";
import Breadcrumb from "~/components/navigation/breadcrumb.jsx";

function BlenderDevMain() {
  return (
    <ErrorBoundary fallback={(err) => <div class="content-container">Error: {err.message}</div>}>
      <Suspense fallback={<div class="content-container">Loading...</div>}>
        <Title>Blender Extension Development - Sedaia Designs</Title>
        <Meta name="description" content="Tools and documentation for developing Blender extensions within PyCharm, featuring the BlendCharm plugin." />
        <Header title="Blender Extension Development for PyCharm" img="blender-dev" />
        <div class={"content-container blender-dev-container"}>
          <Breadcrumb items={[
            { label: "Home", href: "/" },
            { label: "Plugins", href: "/plugins" },
            { label: "Blender Extension Development" }
          ]} />
          <AboutBlenderDev />
	        <BlendCharmDownloads />
          <BlenderDevInstructions />
          <BlenderDevIssues />
        </div>
        <Footer />
      </Suspense>
    </ErrorBoundary>
  );
}

export default BlenderDevMain;
