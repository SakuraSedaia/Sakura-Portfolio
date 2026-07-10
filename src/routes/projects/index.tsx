import SideNavWrapper from "~/components/wrappers/side-nav-wrapper";
import Routes from "~/data/json/routes.json";
import Metadata from "~/components/meta/metadata";
import Header from "~/components/sections/global/header";
import { ErrorBoundary, For, Suspense } from "solid-js";
import Link from "~/components/routing/link";

const projectCards = [
  {
    title: "Sakura Rig Utilities",
    description:
      "A Blender add-on providing a streamlined GUI for importing, configuring, and managing the Sakura Minecraft Character Rig.",
    cta: "View project",
    path: "/projects/sakura-rig-utilities",
  },
  {
    title: "Blender Development",
    description:
      "A PyCharm plugin that makes developing and debugging Blender extensions easier with hot-reloading, sandboxing, and integrated linting.",
    cta: "View project",
    path: "/projects/blender-development",
  },
  {
    title: "Sakura Character Rig",
    description:
      "The flagship rig Sakura Rig Utilities is built around - a fully featured Minecraft character rig for animators and artists.",
    cta: "Learn more",
    path: "/projects/sakura-character-rig",
  },
];

const updateCards = [
  {
    title: "Blender Development 0.6.0 Alpha",
    description:
      "A major foundational update - moves to uv for environments, improves project setup, and adds extensive threading and process fixes across Windows, macOS, and Linux.",
    cta: "Read the changelog",
    path: "/projects/blender-development",
  },
  {
    title: "Sakura Rig Utilities V4.0.0 Alpha",
    description:
      "The next major version of the rig interface, targeting Blender 5.0 with a refreshed UI, new features, and bug fixes.",
    cta: "View development branch",
    path: "/projects/sakura-rig-utilities",
  },
  {
    title: "Sakura Rig Utilities V3.1.0",
    description:
      "Stable release that streamlines UI navigation, adds missing eye material options, and optimizes the backend for better maintainability.",
    cta: "Read the changelog",
    path: "/projects/sakura-rig-utilities",
  },
];

const communityCards = [
  {
    title: "Join the Discord community",
    description:
      "Get help, share your work, and chat with other users of the Sakura Rig and Blender Development plugin.",
    cta: "Join the Discord",
    path: "https://discord.gg/Qk4pfbG7Pf",
    external: true,
  },
  {
    title: "Join the Fluxer community",
    description:
      "Want an alternative to Discord? I have a Fluxer community as well! Feel free to join and chat with other users of Fluxer.",
    cta: "Join the Fluxer community",
    path: "https://fluxer.gg/M9gYmCdr",
    external: true,
  },
];

export default function Projects() {
  return (
    <main class={"projects__landing"}>
      <Metadata
        title={"Projects | Sedaia Designs"}
        description={
          "Sedaia Designs, more commonly known as Sakura is a freelance software developer and Voxel 3D Artist specialising in Minecraft style 3D art, SolidJS/React-like websites, and Blender extension development."
        }
        image={"/images/headers/sacr.avif"}
      />

      <Header
        title={"Tools for Blender artists & developers"}
        class={"index__header"}
        image={"/images/headers/sacr.avif"}
      />
      <SideNavWrapper projectRoutes={Routes.projects}>
        <ErrorBoundary
          fallback={(err) => (
            <section class={"projects-home__status"}>
              Error: {err.message}
            </section>
          )}
        >
          <Suspense
            fallback={
              <section class={"projects-home__status"}>Loading...</section>
            }
          >
            <article class={"projects-home"}>
              <section
                class={"projects-home__featured"}
                aria-label={"Featured projects"}
              >
                <h2>Featured projects</h2>
                <div class={"projects-home__grid projects-home__grid--three"}>
                  <For each={projectCards}>
                    {(card) => (
                      <article class={"projects-home__card"}>
                        <h3>{card.title}</h3>
                        <p>{card.description}</p>
                        <Link path={card.path} emboss={true}>
                          {card.cta}
                        </Link>
                      </article>
                    )}
                  </For>
                </div>
              </section>

              <section
                class={"projects-home__updates"}
                aria-label={"Latest updates"}
              >
                <h2>Latest updates</h2>
                <div class={"projects-home__grid projects-home__grid--three"}>
                  <For each={updateCards}>
                    {(card) => (
                      <article class={"projects-home__card"}>
                        <h3>{card.title}</h3>
                        <p>{card.description}</p>
                        <Link path={card.path} emboss={true}>
                          {card.cta}
                        </Link>
                      </article>
                    )}
                  </For>
                </div>
              </section>

              <section
                class={"projects-home__community"}
                aria-label={"Community"}
              >
                <h2>Community</h2>
                <div class={"projects-home__grid projects-home__grid--two"}>
                  <For each={communityCards}>
                    {(card) => (
                      <article class={"projects-home__card"}>
                        <h3>{card.title}</h3>
                        <p>{card.description}</p>
                        <Link
                          path={card.path}
                          external={card.external}
                          emboss={true}
                        >
                          {card.cta}
                        </Link>
                      </article>
                    )}
                  </For>
                </div>
              </section>
            </article>
          </Suspense>
        </ErrorBoundary>
      </SideNavWrapper>
    </main>
  );
}
