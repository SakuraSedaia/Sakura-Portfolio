import { ErrorBoundary, Suspense } from "solid-js";
import Metadata from "~/components/meta/metadata";
import Header from "~/components/sections/global/header";
import SideNavWrapper from "~/components/wrappers/side-nav-wrapper";
import SupportedPlatformsHero from "~/components/graphics/supported-platforms-hero";
import Routes from "~/data/json/routes.json";
import About from "~/components/sections/projects/sakura-rig-utilities/about";
import Downloads from "~/components/sections/projects/sakura-rig-utilities/downloads";
import Instructions from "~/components/sections/projects/sakura-rig-utilities/instructions";
import Issues from "~/components/sections/projects/sakura-rig-utilities/issues";
import Link from "~/components/routing/link";

export default function SakuraRigUtilities() {
  return (
    <main class={"projects__landing"}>
      <Metadata
        title={"Sakura Rig Utilities | Sedaia Designs"}
        description={
          "A custom Blender interface designed to streamline and enhance your workflow when using the Sakura Minecraft Character Rig."
        }
        url={"/projects/sakura-rig-utilities"}
        image={"/images/headers/sr-gui.avif"}
      />

      <Header
        title={"Sakura Rig Utilities"}
        description={
          "The ultimate companion for managing and customizing your Sakura Minecraft Rigs."
        }
        class={"index__header"}
        image={"/images/headers/sr-gui.avif"}
      >
        <SupportedPlatformsHero
          title={"Sakura Rig Utilities"}
          description={
            "A custom Blender interface designed to streamline and enhance your workflow when using the Sakura Minecraft Character Rig."
          }
          tagline={
            "The ultimate companion for managing and customizing your Sakura Minecraft Rigs."
          }
          backgroundImage={"/images/headers/sr-gui.avif"}
          supportedPlatform={"blender"}
        />
      </Header>

      <SideNavWrapper projectRoutes={Routes.projects}>
        <ErrorBoundary
          fallback={(err) => <p>Failed to load page: {err.message}</p>}
        >
          <Suspense fallback={<p>Loading...</p>}>
            <article class={"plugin-page sru-container"}>
              <Link
                path={"https://docs.sakura-sedaia.com/sedaia-rig-interfaces/"}
                external={true}
                emboss={true}
              >
                Read documentation
              </Link>
              <About />
              <Downloads />
              <Instructions />
              <Issues />
            </article>
          </Suspense>
        </ErrorBoundary>
      </SideNavWrapper>
    </main>
  );
}
