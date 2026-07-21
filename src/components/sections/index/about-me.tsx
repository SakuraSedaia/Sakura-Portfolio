import { NoHydration } from "solid-js/web";
import Link from "~/components/routing/link";

export default function AboutMe() {
  const age =
    new Date(Date.now() - new Date("2003-06-19").getTime()).getUTCFullYear() -
    1970;

  return (
    <NoHydration>
      <section class="landing-about">
        <h2 id="aboutAbout">Who Am I?</h2>
        <p>
          I am a {age}-year-old multi-disciplinary technician from the United
          States, blending hands-on mechanical expertise with digital
          creativity.
        </p>

        <ul class="landing-about__skills">
          <li>
            <strong>3D Rendering & Rigging:</strong> Crafting Minecraft based
            models and rigs using Blender since 2015.
          </li>
          <li>
            <strong>Software Development:</strong> Building reactive web
            applications with SolidJS and developing custom tooling using Python
            and Kotlin.
          </li>
          <li>
            <strong>Hands-on Technical:</strong> Extensive background as an
            automotive and tire technician, currently traveling the country as
            an asset recovery technician.
          </li>
        </ul>

        <p class="landing-about__links">
          Check out my work on the <Link path="projects://">Projects Page</Link>
          , watch my demos on{" "}
          <Link path="https://youtube.com/c/SakuraSedaia" external={true}>
            YouTube
          </Link>
          , or view my source code on{" "}
          <Link path="https://codeberg.org/SakuraSedaia" external={true}>
            Codeberg
          </Link>
          .
        </p>
        <p>
          <Link path="/about" emboss={true}>
            Read My Full Story
          </Link>
        </p>
      </section>
    </NoHydration>
  );
}
