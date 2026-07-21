import { createMemo, For, JSX } from "solid-js";
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
}

export default function SideNavWrapper({
  children,
  projectRoutes,
}: SideNavWrapperProps) {
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
    <div class={"side-nav-wrapper"}>
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
    </div>
  );
}
