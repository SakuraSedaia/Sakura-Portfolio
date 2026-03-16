import Header from "~/sections/header.jsx";
import Footer from "~/sections/footer.jsx";
import About from "~/sections/plugins/sri/about.jsx";
import Downloads from "~/sections/plugins/sri/downloads.jsx";
import Instructions from "~/sections/plugins/sri/instructions.jsx";
import Issues from "~/sections/plugins/sri/issues.jsx";
import { Suspense, ErrorBoundary } from "solid-js";
import { Title, Meta } from "@solidjs/meta";
import Breadcrumb from "~/components/navigation/breadcrumb.jsx";

function SRIMain() {
  return (
    <ErrorBoundary fallback={(err) => <div class="content-container">Error: {err.message}</div>}>
      <Suspense fallback={<div class="content-container">Loading...</div>}>
        <Title>Sakura's Rig Interface - Sedaia Designs</Title>
        <Meta name="description" content="A custom Blender interface designed to simplify and enhance the workflow for using the Sakura Minecraft Character Rig." />
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


