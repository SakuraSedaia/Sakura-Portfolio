import { createSignal, Show, For } from "solid-js";
import { FiMenu } from "solid-icons/fi";
import NavMenuData from "./json/NavMenuData.json";

export default function Navbar() {
  const [navMenuExpand, toggleNavMenu] = createSignal(false);
  function openMenu() {
    var navMenu = document.getElementById("navMenu");
    if (navMenuExpand() == true) {
      navMenu?.removeAttribute("data-expanded");
      const changeMenu = toggleNavMenu(() => false);
    } else {
      navMenu?.setAttribute("data-expanded", "");
      const changeMenu = toggleNavMenu(() => true);
    }
  }
  return (
    <nav class="top-nav absolute z-50 block w-full">
      <div class="navbar-box z-60 mx-auto my-0 flex overflow-clip rounded-b-xl border-none bg-white/90 px-5 backdrop-blur-sm">
        <div class="col text-left">
          <span class="navbar-splash-text relative inline-block cursor-default p-1 text-2xl outline-0">
            Sakura Sedaia
          </span>
        </div>
        <div class="col text-center">
          <a
            class="navbar-menu-icon relative inline-block p-1 text-2xl outline-0 rounded-md w-40 cursor-pointer"
            onclick={openMenu}
          >
            Pages
          </a>
        </div>
        <div class="col text-right">
          <span class="navbar-splash-text relative inline-block cursor-default p-1 text-2xl outline-0">
            Personal Portfolio
          </span>
        </div>
      </div>
      <div class="nav-menu-container mx-auto my-0 overflow-clip" id="navMenu">
        <div class="nav-menu-flex mx-auto my-0 flex w-1/2 min-w-fit gap-10 rounded-b-xl bg-white/75 backdrop-blur-sm">
          <For
            each={NavMenuData}
            fallback={<div class="nav-menu-column">Loading...</div>}
          >
            {(column, c) => (
              <div class="nav-menu-column" style="flex-basis: 33%">
                <h2>{column.heading}</h2>
                <hr />
                <ul>
                  <For
                    each={column.menuItems}
                    fallback={
                      <li>
                        <span>Loading...</span>
                      </li>
                    }
                  >
                    {(menu, i) => (
                      <li class="py-0">
                        <a
                          href={menu.pageURL}
                          class="inline-block w-full rounded-md px-5 py-1"
                          onclick={openMenu}
                        >
                          {menu.pageName}
                        </a>
                      </li>
                    )}
                  </For>
                </ul>
              </div>
            )}
          </For>
        </div>
      </div>
    </nav>
  );
}
