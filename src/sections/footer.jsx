import { createSignal, onMount } from "solid-js";
import SocialIcon from "../components/media/social-icon.jsx";

function Footer() {
  const [year, setYear] = createSignal(new Date().getFullYear());

  onMount(() => {
    setYear(new Date().getFullYear());
  });

  return (
    <footer>
	    <div class={"footer-socials"}>
	      <h2>Socials</h2>
	    </div>
      <nav class={"socials"}>
        <ul>
          <li>
            <a href={"https://github.com/SakuraSedaia"} class={"link"}>
              <SocialIcon name={"github"}/><span>Github</span>
            </a>
          </li>
          <li>
            <a href={"https://youtube.com/c/SakuraSedaia"} class={"link"}>
              <SocialIcon name={"youtube"}/><span>YouTube</span>
            </a>
          </li>
          <li>
            <a href={"https://discord.gg/Qk4pfbG7Pf"} class={"link"}>
              <SocialIcon name={"discord"}/><span>Discord</span>
            </a>
          </li>
					<li>
						<a href={"https://codeberg.org/SakuraSedaia"} class={"link"}>
							<SocialIcon name={"codeberg"}/><span>Codeberg</span>
						</a>
					</li>
        </ul>
      </nav>
      <div class={"copyright"}>&copy; {year()} Sedaia Designs. All Rights Reserved.</div>
    </footer>
  );
}
export default Footer;
