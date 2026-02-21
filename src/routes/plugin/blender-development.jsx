import Header from "~/sections/header.jsx";
import Footer from "~/sections/footer.jsx";
import AboutBlenderDev from "~/sections/blender-development/about.jsx";
import BlenderDevDownloads from "~/sections/blender-development/downloads.jsx";
import BlenderDevInstructions from "~/sections/blender-development/instructions.jsx";
import BlenderDevIssues from "~/sections/blender-development/issues.jsx";
import { Suspense, ErrorBoundary } from "solid-js";
import Breadcrumb from "~/components/navigation/breadcrumb.jsx";

function BlenderDevMain() {
  return (
    <ErrorBoundary fallback={(err) => <div class="content-container">Error: {err.message}</div>}>
      <Suspense fallback={<div class="content-container">Loading...</div>}>
        <Header title="Blender Extension Development for PyCharm" img="blender-dev" />
        <div class={"content-container blender-dev-container"}>
          <Breadcrumb items={[
            { label: "Home", href: "/" },
            { label: "Plugins", href: "/plugins" },
            { label: "Blender Extension Development" }
          ]} />
          <AboutBlenderDev />
          <BlenderDevDownloads />
          <BlenderDevInstructions />
          <BlenderDevIssues />
        </div>
        <Footer />
      </Suspense>
    </ErrorBoundary>
  );
}

export default BlenderDevMain;
