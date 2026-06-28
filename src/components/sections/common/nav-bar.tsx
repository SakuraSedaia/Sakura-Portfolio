import { NavItem, NavRouter } from "~/components/nav";

interface NavBarProps {

}

export default function NavBar(props: NavBarProps) {
  return (
    <div class={"navigation-bar"}>
      <nav class="navigation-bar__logo-router">
        <NavRouter>
          <NavItem path={"/"}>Sakura</NavItem>
        </NavRouter>
      </nav>

      <nav class="navigation-bar__main-router">
        <NavRouter>
          <NavItem class={"navigation-bar__item"} path={"/"}>
            Home
          </NavItem>
          <NavItem class={"navigation-bar__item"} path={"/about"}>
            About
          </NavItem>
          <NavItem class={"navigation-bar__item"} path={"projects://"}>
            Projects
          </NavItem>
          <NavItem class={"navigation-bar__item"} path={"/commissions"}>
            Commissions
          </NavItem>
          <NavItem class={"navigation-bar__item"} path={"/contact"}>
            Contact
          </NavItem>
        </NavRouter>
      </nav>
    </div>
  );
}