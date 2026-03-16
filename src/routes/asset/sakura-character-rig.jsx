import Header from "~/sections/header.jsx";
import Footer from "~/sections/footer.jsx";
import AboutSACR from "~/sections/assets/sacr/about-sacr";
import SACRDownloads from "~/sections/assets/sacr/sacr-downloads";
import SACRInstructions from "~/sections/assets/sacr/sacr-instructions";
import { Suspense, ErrorBoundary } from "solid-js";
import { Title, Meta } from "@solidjs/meta";
import Breadcrumb from "~/components/navigation/breadcrumb.jsx";

function SACR() {
  return (
    <ErrorBoundary fallback={(err) => <div class="content-container">Error: {err.message}</div>}>
      <Suspense fallback={<div class="content-container">Loading...</div>}>
        <Title>Sakura Character Rig - Sedaia Designs</Title>
        <Meta name="description" content="Download and learn how to use the Sakura Minecraft Character Rig, a highly flexible and powerful tool for Minecraft animations." />
        <Header title="Sakura Minecraft Character Rig" img="sacr" />
        <main class={"content-container sacr-container"}>
          <Breadcrumb items={[
            { label: "Assets", href: "/assets" },
            { label: "Sakura Character Rig" }
          ]} />
          <AboutSACR />
          <SACRDownloads />
          <SACRInstructions />
        </main>
        <Footer />
      </Suspense>
    </ErrorBoundary>
  );
}
export default SACR;


