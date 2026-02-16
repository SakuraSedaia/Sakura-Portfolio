import Nav from "~/components/nav.jsx";
import SocialIcon from "~/components/social-icon";
import { A } from "@solidjs/router";
export default function About() {
  return (
    <header id={"about-me"} style={{"background-image": "url('/images/headers/about.jpg')"}}>
      <Nav title={"Sedaia Designs"} />
      <div class={"header-box"}>
        <div class={"header-position"}>
          <div class={"header-content"}>
            <h1>Who am I?</h1>
            <p style={"margin-left: 0.5rem;"}>
              U.S.-based UI Designer and Full-Stack Developer proficient in SolidJS, SCSS, and Python. Beyond
              development, I utilize Blender to produce high-quality Minecraft based renders and create downloadable
              Minecraft and Hytale 3D assets and rigs for the blender community.
            </p>
            <div class={"socials"}>
              <a href={"https://youtube.com/c/SakuraSedaia"}><SocialIcon name={"youtube"} /></a>
              <a href={"https://github.com/SakuraSedaia"}><SocialIcon name={"github"} /></a>
              <a href={"https://www.deviantart.com/sakurasedaia"}><SocialIcon name={"deviantart"} /></a>
              <A href={"/resume"} class={"btn"}>View my Resume</A>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
