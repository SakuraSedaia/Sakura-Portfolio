import { NavItem, NavRouter } from "~/components/nav";
import IconBundle from "~/components/graphics/icon-bundle";

export default function Footer() {
  return (
    <footer class={"footer"}>
      <NavRouter class={"footer__internal-router"} heading={"Internal"}>
        <NavItem path="/">Home</NavItem>
        <NavItem path="projects://">Projects</NavItem>
        <NavItem path={"wiki://"}>Wiki</NavItem>
        <NavItem path={"store://"}>
          <IconBundle name={"gumroad"} /> Store
        </NavItem>
        <NavItem path="/commissions">Commissions</NavItem>
      </NavRouter>
      <NavRouter class={"footer__external-router"} heading={"Socials"}>
        <NavItem path="https://github.com/SakuraSedaia">
          <IconBundle name={"github"} /> GitHub
        </NavItem>
        <NavItem path="https://www.youtube.com/@SakuraSedaia">
          <IconBundle name={"youtube"} /> YouTube
        </NavItem>
        <NavItem path="https://www.deviantart.com/sakura-sedaia">
          <IconBundle name={"deviantart"} /> DeviantArt
        </NavItem>
        <NavItem path="https://codeberg.org/SakuraSedaia">
          <IconBundle name={"codeberg"} /> Codeberg
        </NavItem>
        <NavItem path="https://www.twitch.tv/SakuraSedaia">
          <IconBundle name={"twitch"} /> Twitch
        </NavItem>
        <NavItem path={"https://patreon.com/SakuraSedaia"}>
          <IconBundle name={"patreon"} /> Patreon
        </NavItem>
      </NavRouter>

      <div class={"footer__copyright"}>
        &copy; {new Date().getFullYear()} Sakura Sedaia. All rights reserved.
      </div>
    </footer>
  );
}