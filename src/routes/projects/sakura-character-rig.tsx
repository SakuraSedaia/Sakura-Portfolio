import { ErrorBoundary, Suspense } from "solid-js";
import Metadata from "~/components/meta/metadata";
import Header from "~/components/sections/global/header";
import SideNavWrapper from "~/components/wrappers/side-nav-wrapper";
import SupportedPlatformsHero from "~/components/graphics/supported-platforms-hero";
import Routes from "~/data/json/routes.json";
import DeprecationNotice from "~/components/projects/deprecation-notice";
import About from "~/components/sections/projects/sakura-character-rig/about";
import Downloads from "~/components/sections/projects/sakura-character-rig/downloads";
import Addon from "~/components/sections/projects/sakura-character-rig/addon";
import Link from "~/components/routing/link";

export default function SakuraCharacterRig() {
  return (
    <main class={"projects__landing"}>
      <Metadata
        title={"Sakura Character Rig | Sedaia Designs"}
        description={
          "Download and learn how to use the Sakura Character Rig, a highly flexible and powerful tool for Minecraft animations."
        }
        url={"/projects/sakura-character-rig"}
        image={"/images/headers/sacr.avif"}
      />

      <Header
        title={"Sakura Character Rig"}
        description={
          "The flagship rig Sakura Rig Utilities is built around; a fully featured character rig for animators and artists."
        }
        class={"index__header"}
        image={"/images/headers/sacr.avif"}
      >
        <SupportedPlatformsHero
          title={"Sakura Character Rig"}
          description={
            "Download and learn how to use the Sakura Character Rig, a highly flexible and powerful tool for Minecraft animations."
          }
          tagline={
            "The flagship rig Sakura Rig Utilities is built around; a fully featured character rig for animators and artists."
          }
          backgroundImage={"/images/headers/sacr.avif"}
          supportedPlatform={"blender"}
        />
      </Header>

      <SideNavWrapper projectRoutes={Routes.projects}>
        <ErrorBoundary
          fallback={(err) => (
            <div class={"standard-container"}>Error: {err.message}</div>
          )}
        >
          <Suspense
            fallback={<div class={"standard-container"}>Loading...</div>}
          >
            <article class={"plugin-page sakura-character-rig-container"}>
              <Link
                path={"https://docs.sakura-sedaia.com/sakura-character-rig/"}
                external={true}
                emboss={true}
              >
                Read documentation
              </Link>
              <DeprecationNotice
                message={
                  "Following R7.4.1, SACR will no longer be released as an individual asset. From here on out, SACR will be bundled exclusively with Sakura Rig Utilities starting with V4."
                }
              />
              <About />
              <Downloads />
              <Addon />
            </article>
          </Suspense>
        </ErrorBoundary>
      </SideNavWrapper>
    </main>
  );
}
