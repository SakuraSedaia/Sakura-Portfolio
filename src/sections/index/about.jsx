import Nav from "~/components/navigation/nav.jsx";
import MobileNav from "~/components/navigation/mobile-nav.jsx";
import SocialIcon from "~/components/media/social-icon.jsx";
import { A, useLocation } from "@solidjs/router";
import { Meta } from "@solidjs/meta";
import { createMemo, Show } from "solid-js";
import Routes from "~/jsondata/routes.json";

export default function About() {
  const location = useLocation();
  const isHiddenFromSearch = createMemo(() => {
    const path = location.pathname.replace(/^\/|\/$/g, "");
    const mainRoute = Routes.find(r => r.path === path || (r.path === "" && path === ""));
    return !!mainRoute?.hide_from_search;
  });

  const bgImg = {
    "background-image": "image-set(url('/images/headers/about.jxl') type('image/jxl'), url('/images/headers/about.jpg') type('image/jpeg'))"
  };

  return (
    <>
      <Show when={isHiddenFromSearch()}>
        <Meta name="robots" content="noindex, nofollow" />
      </Show>
      <MobileNav title={"Sedaia Designs"} />
      <header id={"about-me"} style={bgImg}>
        <Nav title={"Sedaia Designs"} />
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
