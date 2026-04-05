import Header from "~/sections/header.jsx";
import Footer from "~/sections/footer.jsx";
import AboutSACR from "~/sections/assets/sacr/about-sacr";
import SACRDownloads from "~/sections/assets/sacr/sacr-downloads";
import SACRAddon from "~/sections/assets/sacr/sacr-addon";

import Breadcrumb from "~/components/navigation/breadcrumb.jsx";
import DeprecationNotice from "~/components/ui/deprecation_notice.jsx";

import { Suspense, ErrorBoundary } from "solid-js";
import { Title, Meta } from "@solidjs/meta";

export default function SACR() {
  return (
    <ErrorBoundary fallback={(err) => <div class="content-container">Error: {err.message}</div>}>
      <Suspense fallback={<div class="content-container">Loading...</div>}>
        <Title>Sakura Character Rig - Sedaia Designs</Title>
        <Meta name="description" content="Download and learn how to use the Sakura Minecraft Character Rig, a highly flexible and powerful tool for Minecraft animations." />
	      <DeprecationNotice message={"Following R7.4.1, SACR will no longer be released as an individual asset. From here on out, SACR will be bundled exclusively with the Sedaia Rig Interface starting with SR_GUI V4."}/>
        <Header title="Sakura Minecraft Character Rig" img="sacr" />
        <main class={"content-container sacr-container"}>
          <Breadcrumb items={[
            { label: "Assets", href: "/assets" },
            { label: "Sakura Character Rig" }
          ]} />
          <AboutSACR />
          <SACRDownloads />
	        <SACRAddon />
        </main>
        <Footer />
      </Suspense>
    </ErrorBoundary>
  );
}


