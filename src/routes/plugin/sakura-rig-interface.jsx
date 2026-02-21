import Header from "~/sections/header.jsx";
import Footer from "~/sections/footer.jsx";
import AboutSRI from "~/sections/sri/about-sri.jsx";
import SRIDownloads from "~/sections/sri/sri-downloads.jsx";
import SRIInstructions from "~/sections/sri/sri-instructions.jsx";
import SRIIssues from "~/sections/sri/sri-issues.jsx";
import { Suspense, ErrorBoundary } from "solid-js";
import Breadcrumb from "~/components/navigation/breadcrumb.jsx";

function SRIMain() {
  return (
    <ErrorBoundary fallback={(err) => <div class="content-container">Error: {err.message}</div>}>
      <Suspense fallback={<div class="content-container">Loading...</div>}>
        <Header title="Sakura's Blender Rig Interface" img="sr-gui" />
        <div class={"content-container sri-container"}>
          <Breadcrumb items={[
            { label: "Home", href: "/" },
            { label: "Plugins", href: "/plugins" },
            { label: "Rig Interface" }
          ]} />
          <AboutSRI />
          <SRIDownloads />
          <SRIInstructions />
          <SRIIssues />
        </div>
        <Footer />
      </Suspense>
    </ErrorBoundary>
  );
}
export default SRIMain;


