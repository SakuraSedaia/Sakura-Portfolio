import { NoHydration } from "solid-js/web";
import Link from "~/components/routing/link";

export default function Footer() {
  return (
    <NoHydration>
      <footer class={"footer"}>
        <p class={"footer__links"}>
          <Link path={"/"}>Home</Link>
          <Link path={"store://"}>Store</Link>
          <Link path={"/projects"}>Projects</Link>
          <Link path={"/credits-and-attributions"}>Credits</Link>
          <Link path={"/contact"}>Contact</Link>
        </p>
        <p class={"footer__copyright"}>
          &copy; {new Date().getFullYear()} Sakura Sedaia, all rights reserved.
        </p>
      </footer>
    </NoHydration>
  );
}
