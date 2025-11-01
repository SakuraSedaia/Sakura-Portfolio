import { useLocation } from "@solidjs/router";
import { createSignal } from "solid-js";
export default function Nav() {
  const location = useLocation();
  const active = (path) =>
    path == location.pathname ? "nav-item active" : "nav-item"; // Set the active flag for active (Active : Innactive)

  return (
    <nav>
      <div class="body-container">
        <div class="nav-title nav-section"><a href="/about">Sakura Sedaia - 3D Artist</a></div>
        <div class="router nav-section">
          <div class={`${active("/about")}`}><a href="/about">About</a></div>
          <div class={`${active("/rigs")}`}><a href="/rigs">Rigs</a></div>
          <div class={`${active("/addons")}`}><a href="/addons">Addons</a></div>
          <div class={`${active("/renders")}`}><a href="/renders">Renders</a></div>
          <div class={`${active("/animations")}`}><a href="/animations">Animations</a></div>
        </div>
      </div>
      <Show when={location.pathname.includes("/rig")}>
        <div class="sub-nav rigs">

          <div class={`sub-nav-root`}><a href="/rigs">Rigs</a></div>
          <div class="nav-arrow">&#62;</div>
          <div class={`${active("/rigs/sacr")}`} style="padding-left: 0em;"><a href="/rig/sacr">SACR</a></div>

        </div>
      </Show>
      <Show when={location.pathname.includes("/addon")}>
        <div class="sub-nav addons">

          <ul class="nav-list">
            <li class="nav-arrow">&#62;</li>
            <li class={`${active("/addon/sr-gui")}`}><a href="/addon/sr-gui">Sakura Rig GUI</a></li>
          </ul>
        </div>
      </Show>
    </nav>
  );
}