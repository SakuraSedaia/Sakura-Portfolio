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
  // console.log(NavMenuData[1])
  return (
    <nav class="top-nav absolute z-50 block w-full">
      <div class="navbar-box mx-auto my-0 flex overflow-clip rounded-b-xl border-none bg-white/75 px-5 backdrop-blur-sm">
        <div class="col text-left">
          <span class="navbar-splash-text relative inline-block cursor-default p-1 text-2xl outline-0">
            Sakura Sedaia
          </span>
        </div>
        <div class="col text-right">
          <a
            class="navbar-menu-icon relative mt-1 inline-block cursor-pointer rounded-lg p-1 text-2xl outline-0"
            onclick={openMenu}
          >
            <FiMenu />
          </a>
        </div>
      </div>
      <div
        class="nav-menu-container mx-auto my-0 overflow-clip"
      >
        <div class="nav-menu-flex mx-auto my-0 flex w-1/2 min-w-fit rounded-b-xl bg-white/75 backdrop-blur-sm gap-10"
        id="navMenu">
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
                        <a href={menu.pageURL} class="px-5 py-1 w-full inline-block rounded-md" onclick={openMenu}>{menu.pageName}</a>
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
