import { createSignal, onMount } from "solid-js";
import SocialIcon from "../components/social-icon.jsx";

function Footer() {
  const [year, setYear] = createSignal(new Date().getFullYear());

  onMount(() => {
    setYear(new Date().getFullYear());
  });

  return (
    <footer>
      <nav class={"socials"}>
        <ul>
          <h2>Socials</h2>
          <li>
            <a href={"https://github.com/SakuraSedaia"} class={"link"}>
              <SocialIcon name={"github"}/> Github
            </a>
          </li>
          <li>
            <a href={"https://youtube.com/c/SakuraSedaia"} class={"link"}>
              <SocialIcon name={"youtube"}/> YouTube
            </a>
          </li>
          <li>
            <a href={"https://discord.gg/Qk4pfbG7Pf"} class={"link"}>
              <SocialIcon name={"discord"}/> Discord
            </a>
          </li>
					<li>
						<a href={"https://www.deviantart.com/sakurasedaia"} class={"link"}>
							<SocialIcon name={"deviantart"}/> DeviantArt
						</a>
					</li>
        </ul>
      </nav>
      <div class={"copyright"}>&copy; {year()} Sakura Sedaia. All Rights Reserved.</div>
    </footer>
  );
}
export default Footer;
