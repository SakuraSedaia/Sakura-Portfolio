import { NavItem, NavRouter } from "~/components/routing/nav-parts";

import Routes from "~/data/json/routes.json";
import { For, Show } from "solid-js";
import Link from "~/components/routing/link";

export default function NavigationBar() {
  const routerMain = Routes.main;
  return (
    <nav class={"navigation-bar"}>
      <div class={"navigation-bar__container"}>
        <div class={"navigation-bar__logo"}>
          <Link path={"/"}>Sakura Sedaia</Link>
        </div>
        <NavRouter class={"navigation-bar__router"}>
          <For each={routerMain.routes}>
            {(route) => (
              <Show
                when={
                  (route.meta.show_route ?? true) &&
                  (route.meta.noIndex == false ||
                    route.meta.noIndex == undefined)
                }
              >
                <NavItem path={route.path} class={"navigation-bar__link"}>
                  {route.name}
                </NavItem>
              </Show>
            )}
          </For>
        </NavRouter>
      </div>
    </nav>
  );
}
