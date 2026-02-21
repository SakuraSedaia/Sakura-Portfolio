import Header from "~/sections/header.jsx";
import Footer from "~/sections/footer.jsx";
import About from "~/sections/sri/about.jsx";
import Downloads from "~/sections/sri/downloads.jsx";
import Instructions from "~/sections/sri/instructions.jsx";
import Issues from "~/sections/sri/issues.jsx";
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
          <About />
          <Downloads />
          <Instructions />
          <Issues />
        </div>
        <Footer />
      </Suspense>
    </ErrorBoundary>
  );
}
export default SRIMain;


