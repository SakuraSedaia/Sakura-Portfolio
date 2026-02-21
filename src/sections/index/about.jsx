import Nav from "~/components/navigation/nav.jsx";
import MobileNav from "~/components/navigation/mobile-nav.jsx";
import { useMobile } from "~/hooks/use-mobile.js";
import SocialIcon from "~/components/media/social-icon.jsx";
import { A } from "@solidjs/router";
export default function About() {
  const isMobile = useMobile();
  const bgImg = {
    "background-image": "image-set(url('/images/headers/about.jxl') type('image/jxl'), url('/images/headers/about.jpg') type('image/jpeg'))"
  };

  return (
    <>
      <Show when={isMobile()}>
        <MobileNav title={"Sedaia Designs"} />
      </Show>
      <header id={"about-me"} style={bgImg}>
        <Show when={!isMobile()}>
          <Nav title={"Sedaia Designs"} />
        </Show>
      <div class={"header-box"}>
        <div class={"header-position"}>
          <div class={"header-content"}>
            <h1>Sedaia Designs</h1>
            <p style={"margin-left: 0.5rem;"}>
              A U.S.-based UI Designer and Full-Stack Developer proficient in SolidJS, SCSS, and Python. Beyond
              development, I utilize Blender to produce high-quality Minecraft based renders and create downloadable
              Minecraft and Hytale 3D assets and rigs for the Blender community.
            </p>
            <div class={"socials"}>
              <a href={"https://youtube.com/c/SakuraSedaia"}><SocialIcon name={"youtube"} /></a>
              <a href={"https://github.com/SakuraSedaia"}><SocialIcon name={"github"} /></a>
              <a href={"https://www.deviantart.com/sakurasedaia"}><SocialIcon name={"deviantart"} /></a>
              <A href={"/resume"} class={"btn"}>My Resume</A>
            </div>
          </div>
        </div>
      </div>
    </header>
  </>
  );
}
