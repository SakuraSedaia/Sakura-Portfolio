import { Link } from "~/components/routing/link";

export default function Footer() {
  return (
    <footer class={"footer"}>
      <p class={"footer__links"}>
        <Link path={"/"}>Home</Link>
        <Link path={"/wiki"}>Wiki</Link>
        <Link path={"/projects"}>Projects</Link>
        <Link path={"/contact"}>Contact</Link>
      </p>
      <p class={"footer__copyright"}>
        &copy; {new Date().getFullYear()} Sakura Sedaia, all rights reserved.
      </p>
    </footer>
  );
}
