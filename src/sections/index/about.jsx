import SocialIcon from "~/components/social-icon";
import { A } from "@solidjs/router";
export default function About() {
  return (
			<section id={"about-me"}>
				<hero-landing>
					<content>
						<heading>
							<h1>Who am I?</h1>
						</heading>
						<p style={"margin-left: .5rem;"}>
							U.S.-based UI Designer and Full-Stack Developer proficient in SolidJS, SCSS, and Python. Beyond
							development, I utilize Blender to produce high-quality Minecraft based renders and create downloadable
							Minecraft and Hytale 3D assets and rigs for the blender community.
						</p>
						<links>
							<div class={"socials"}>
								<a href={"https://youtube.com/c/SakuraSedaia"}><SocialIcon name={"youtube"} /></a>
								<a href={"https://github.com/SakuraSedaia"}><SocialIcon name={"github"} /></a>
								<a href={"https://www.deviantart.com/sakurasedaia"}><SocialIcon name={"deviantart"} /></a>
							</div>
							<div class={"resume"}>
								<A href={"/resume"}>View my Resume</A>
							</div>
						</links>
					</content>
				</hero-landing>
			</section>
  );
}
