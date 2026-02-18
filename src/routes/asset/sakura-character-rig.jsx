import Header from "~/sections/header.jsx";
import Footer from "~/sections/footer.jsx";
import AboutSACR from "~/sections/sacr/about-sacr";
import SACRDownloads from "~/sections/sacr/sacr-downloads";
import SACRInstructions from "~/sections/sacr/sacr-instructions";
import { Suspense, ErrorBoundary } from "solid-js";
import Breadcrumb from "~/components/breadcrumb.jsx";

function SACR() {
  return (
    <ErrorBoundary fallback={(err) => <div class="content-container">Error: {err.message}</div>}>
      <Suspense fallback={<div class="content-container">Loading...</div>}>
        <Header title="Sakura Minecraft Character Rig" img="sacr" />

        <div class={"content-container sacr-container"}>
          <Breadcrumb items={[
            { label: "Assets", href: "/assets" },
            { label: "Sakura Character Rig" }
          ]} />
          <AboutSACR />
          <SACRDownloads />
          <SACRInstructions />
        </div>
        <Footer />
      </Suspense>
    </ErrorBoundary>
  );
}
export default SACR;


