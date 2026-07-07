import { createMemo, createSignal, For, JSX, Show } from "solid-js";
import IconBundle from "~/components/graphics/icon-bundle";
import { NavItem, NavRouter } from "~/components/routing/nav-parts";

interface SideNavRouteMetaJson {
  show_route?: boolean;
}

interface SideNavRouteJson {
  name: string;
  path: string;
  external?: boolean;
  meta?: SideNavRouteMetaJson;
}

interface SideNavRouteGroupJson {
  basePath?: string;
  routes: SideNavRouteJson[];
}

interface SideNavWrapperProps {
  children: JSX.Element;
  projectRoutes: SideNavRouteGroupJson;
  rightNavigationMenu?: boolean;
}

export default function SideNavWrapper({
  children,
  projectRoutes,
  rightNavigationMenu = false,
}: SideNavWrapperProps) {
  const [wikiSidebarOpen, setWikiSidebarOpen] = createSignal(false);

  const filteredProjectRoutes = createMemo(() =>
    projectRoutes.routes.filter((route) => route.meta?.show_route !== false),
  );

  function resolveProjectPath(path: string, basePath?: string) {
    const normalizedInputPath = path
      .replace(/^[a-z]+:\/\//i, "/")
      .replace(/^\/+/, "/");
    const normalBasePath = (basePath ?? "").replace(/^\/+|\/+$/g, "");
    const normalPath = normalizedInputPath.startsWith("/")
      ? normalizedInputPath
      : `/${normalizedInputPath}`;

    if (normalBasePath.length === 0) {
      return normalPath;
    }

    if (normalPath === "/") {
      return `/${normalBasePath}`;
    }

    return `/${normalBasePath}${normalPath}`;
  }

  return (
    <section class={"side-nav-wrapper"}>
      <aside class={"side-nav-wrapper__pane side-nav-wrapper__pane--left"}>
        <NavRouter class={"side-nav-wrapper__router"}>
          <For each={filteredProjectRoutes()}>
            {(route) => (
              <NavItem
                path={resolveProjectPath(route.path, projectRoutes.basePath)}
                class={"side-nav-wrapper__link"}
              >
                {route.name}
              </NavItem>
            )}
          </For>
        </NavRouter>
      </aside>

      <div class={"side-nav-wrapper__content"}>{children}</div>

      <Show when={rightNavigationMenu}>
        <aside
          class={`side-nav-wrapper__pane side-nav-wrapper__pane--right ${wikiSidebarOpen() ? "is-open" : "is-closed"}`}
        >
          <button
            type={"button"}
            class={"side-nav-wrapper__wiki-toggle"}
            aria-expanded={wikiSidebarOpen()}
            onClick={() => setWikiSidebarOpen((open) => !open)}
          >
            <span>Wiki</span>
            <IconBundle
              name={"arrow-down"}
              class={wikiSidebarOpen() ? "open" : ""}
            />
          </button>

          <Show when={wikiSidebarOpen()}>
            <div class={"side-nav-wrapper__wiki-stub"}>
              <p>Wiki navigation stub.</p>
            </div>
          </Show>
        </aside>
      </Show>
    </section>
  );
}
