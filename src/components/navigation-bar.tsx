import { NavigationMenu } from "@kobalte/core/navigation-menu";
import { Show } from "solid-js";
export default function Navbar() {
  const areComsOpen = false;
  return (
    <div class="nav-bar">
      <NavigationMenu class="nav-content">
        <NavigationMenu.Trigger class="nav-item" as="a" href="/">
          About
        </NavigationMenu.Trigger>

        <NavigationMenu.Menu>
          <NavigationMenu.Trigger class="nav-item" as="span">
            Works
          </NavigationMenu.Trigger>
          <NavigationMenu.Portal>
            <NavigationMenu.Content class="navmenu-content flex space-x-2">
              <NavigationMenu.Group class="navmenu-column">
                <NavigationMenu.GroupLabel class="navmenu-title">
                  Showcases
                </NavigationMenu.GroupLabel>
                <NavigationMenu.Trigger
                  class="navmenu-item"
                  as="a"
                  href="/renders"
                >
                  Renders
                </NavigationMenu.Trigger>
                <NavigationMenu.Trigger
                  class="navmenu-item"
                  as="a"
                  href="/animations"
                >
                  Animations
                </NavigationMenu.Trigger>
                <NavigationMenu.Trigger
                  class="navmenu-item"
                  as="a"
                  href="/cad-designs"
                >
                  CAD Designs
                </NavigationMenu.Trigger>
                <NavigationMenu.Trigger
                  class="navmenu-item"
                  as="a"
                  href="/web-dev"
                >
                  Web Design
                </NavigationMenu.Trigger>
              </NavigationMenu.Group>
              <NavigationMenu.Group class="navmenu-column">
                <NavigationMenu.GroupLabel class="navmenu-title">
                  Assets
                </NavigationMenu.GroupLabel>
                <NavigationMenu.Trigger
                  class="navmenu-item"
                  as="a"
                  href="/sakura-character-rig"
                >
                  SACR
                </NavigationMenu.Trigger>
                <NavigationMenu.Trigger
                  class="navmenu-item"
                  as="a"
                  href="/sr-gui"
                >
                  Rig GUI
                </NavigationMenu.Trigger>
                <NavigationMenu.Trigger
                  class="navmenu-item"
                  as="a"
                  href="/rig-assets"
                >
                  Rig Assets
                </NavigationMenu.Trigger>
                <NavigationMenu.Trigger
                  class="navmenu-item"
                  as="a"
                  href="/scene-assets"
                >
                  Scene Assets
                </NavigationMenu.Trigger>
              </NavigationMenu.Group>
            </NavigationMenu.Content>
          </NavigationMenu.Portal>
        </NavigationMenu.Menu>
        <NavigationMenu.Trigger class="nav-item" as="a" href="/commissions">
          Commissions
        </NavigationMenu.Trigger>
        <NavigationMenu.Trigger class="nav-item" as="a" href="/contact">
          Contact
        </NavigationMenu.Trigger>

        <NavigationMenu.Viewport class="nav-viewport"></NavigationMenu.Viewport>
      </NavigationMenu>
    </div>
  );
}
