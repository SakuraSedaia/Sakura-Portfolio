import { NavigationMenu } from "@kobalte/core/navigation-menu";

export default function Navbar() {
  return (
    <nav>
      <div class="nav-content !dark:bg-gray:800 rounded-b-xl bg-gray-50/80 text-xl text-black shadow-lg backdrop-blur-lg">
        <NavigationMenu orientation="horizontal" class="nav-bar">
          <NavigationMenu.Trigger class="nav-item" as="a" href="/">
            Home
          </NavigationMenu.Trigger>

          <NavigationMenu.Menu>
            <NavigationMenu.Trigger class="nav-item">
              Assets
            </NavigationMenu.Trigger>
            <NavigationMenu.Portal>
              <NavigationMenu.Content class="navmenu-content content-1">
                <NavigationMenu.Group>
                  <NavigationMenu.GroupLabel class="navmenu-label">
                    Blender
                  </NavigationMenu.GroupLabel>
                  <NavigationMenu.Separator />
                  <NavigationMenu.Item
                    class="navmenu-item"
                    as="a"
                    href="/sakura-character-rig"
                  >
                    SACR
                  </NavigationMenu.Item>
                  <NavigationMenu.Item
                    class="navmenu-item"
                    as="a"
                    href="/sakura-rig-gui"
                  >
                    Sakura Rig GUI
                  </NavigationMenu.Item>
                </NavigationMenu.Group>
              </NavigationMenu.Content>
            </NavigationMenu.Portal>
          </NavigationMenu.Menu>

          <NavigationMenu.Menu>
            <NavigationMenu.Trigger class="nav-item">
              Works
            </NavigationMenu.Trigger>
            <NavigationMenu.Portal>
              <NavigationMenu.Content class="navmenu-content content-2">
                <NavigationMenu.Group>
                  <NavigationMenu.GroupLabel class="navmenu-label">
                    Digital Works
                  </NavigationMenu.GroupLabel>
                  <NavigationMenu.Separator />
                  <NavigationMenu.Item
                    class="navmenu-item"
                    as="a"
                    href="/cad-designs"
                  >
                    CAD Designs
                  </NavigationMenu.Item>
                  <NavigationMenu.Item
                    class="navmenu-item"
                    as="a"
                    href="/renders"
                  >
                    Renders
                  </NavigationMenu.Item>
                  <NavigationMenu.Item
                    class="navmenu-item"
                    as="a"
                    href="/animations"
                  >
                    Animations
                  </NavigationMenu.Item>
                </NavigationMenu.Group>
              </NavigationMenu.Content>
            </NavigationMenu.Portal>
          </NavigationMenu.Menu>

          <NavigationMenu.Trigger class="nav-item" as="a" href="/contact">
            Contact
          </NavigationMenu.Trigger>

          <NavigationMenu.Viewport>
            <NavigationMenu.Arrow />
          </NavigationMenu.Viewport>
        </NavigationMenu>
      </div>
    </nav>
  );
}
