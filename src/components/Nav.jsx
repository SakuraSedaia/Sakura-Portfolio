import { useLocation } from "@solidjs/router";
import { createSignal, For } from "solid-js";
import Routes from "./routes.json";

export default function Nav() {
  const location = useLocation();
  const active = (path) =>
    path == location.pathname ? "nav-item active" : "nav-item"; // Set the active flag for active (Active : Innactive)
  let str = "";
  return (
    <nav>
      <div class="body-container">
        <div class="nav-title nav-section"><a href="/about">Sakura Sedaia - 3D Artist</a></div>
        <div class="router nav-section">
          <For each={Routes} fallback={<div class="nav-item"><a>Loading Nav...</a></div>}>
            {(nav, n) => (
              <div class={`${active("/" + nav.path)}`}><a href={"/" + nav.path}>{nav.page}</a></div>
            )}
          </For>
        </div>
      </div>

      <For each={Routes} fallback={<div class="nav-item"><a>Loading Nav...</a></div>}>
        {(nav, n) => (
          <Show when={location.pathname.includes("/" + nav.path.substring(0, nav.path.length - 1))}>
            <Show when={nav.subnav == true}>
              <div class="sub-nav">
                <div class={`sub-nav-root`}><a href={"/" + nav.path}>{nav.page}</a></div>
                <div class="nav-arrow">&#62;</div>
                <For each={nav.subpages} fallback={<div class="nav-item"><a>Loading Nav...</a></div>}>
                  {(subnav, s) => (
                    <div class={`${active("/" + nav.path.substring(0, nav.path.length - 1) + "/" + subnav.path)}`}><a href={"/" + nav.path.substring(0, nav.path.length - 1) + "/" + subnav.path}>{subnav.page}</a></div>
                  )}
                </For>
              </div>
            </Show>
          </Show>
        )}
      </For>
    </nav>
  );
}