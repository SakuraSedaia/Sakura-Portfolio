import { ErrorBoundary, Suspense } from "solid-js";
import Metadata from "~/components/meta/metadata";
import Header from "~/components/sections/global/header";
import SideNavWrapper from "~/components/wrappers/side-nav-wrapper";
import SupportedPlatformsHero from "~/components/graphics/supported-platforms-hero";
import Routes from "~/data/json/routes.json";
import About from "~/components/sections/projects/blender-development/about";
import Downloads from "~/components/sections/projects/blender-development/downloads";
import Instructions from "~/components/sections/projects/blender-development/instructions";
import Issues from "~/components/sections/projects/blender-development/issues";
import KnownIssues from "~/components/sections/projects/blender-development/known-issues";

export default function BlenderDevelopment() {
  return (
    <main class={"projects__landing"}>
      <Metadata
        title={"Blender Development | Sedaia Designs"}
        description={
          "A comprehensive PyCharm plugin for developing and debugging Blender extensions."
        }
        url={"/projects/blender-development"}
        image={"/images/headers/blender-dev.avif"}
      />

      <Header
        title={"Blender Development"}
        description={
          "The ultimate PyCharm plugin for developing and debugging Blender extensions with real-time reloading."
        }
        class={"index__header"}
        image={"/images/headers/blender-dev.avif"}
      >
        <SupportedPlatformsHero
          title={"Blender Development"}
          description={
            "A comprehensive PyCharm plugin for developing and debugging Blender extensions."
          }
          tagline={
            "The ultimate PyCharm plugin for developing and debugging Blender extensions with real-time reloading."
          }
          backgroundImage={"/images/headers/blender-dev.avif"}
          supportedPlatform={"pycharm"}
        />
      </Header>

      <SideNavWrapper projectRoutes={Routes.projects}>
        <ErrorBoundary
          fallback={(err) => <p>Failed to load page: {err.message}</p>}
        >
          <Suspense fallback={<p>Loading...</p>}>
            <article class={"plugin-page blenddev-container"}>
              <About />
              <Downloads />
              <Instructions />
              <Issues />
              <KnownIssues />
            </article>
          </Suspense>
        </ErrorBoundary>
      </SideNavWrapper>
    </main>
  );
}
