import { A } from "@solidjs/router";
import { NoHydration } from "solid-js/web";
import OptimizedImage from "~/components/media/optimized-image.jsx";
import SocialIcon from "~/components/media/social-icon.jsx";
export default function NotableProjects() {
  return (
		<NoHydration>
			<section id={"notable-projects"}>
				<header>
					<h1>Notable Projects</h1>
				</header>

				<div class={"grid-container"}>
					<div class={"grid-item"}>
						<h1>Frostlight Studios</h1>
						<hr />
						<div class={"notable-img"}>
							<OptimizedImage src={"/images/card-headers/frostlight-studios-org-preview"} alt={"Frostlight Studios"} />
						</div>
						<p>
							The Frostlight Studios website is an evolution on an old static html design, using SolidJS to create a
							wonderfully realized and performant website which helps define who Frostlight Studios is and what they do,
							all while keeping the codebase scalable and maintainable.
						</p>
						<div class={"projects-link"}>
							<a
								href={"https://frostlight-studios.org/"}
								class={"btn"}
							>
								Visit Website
							</a>
							<a
								href={"https://github.com/SakuraSedaia/frostlight-portfolio-and-blog"}
								class={"btn"}
							>
								<SocialIcon name={"github"}/> Source
							</a>
						</div>
					</div>

					<div class={"grid-item"}>
						<h1>Blender Development</h1>
						<hr />
						<OptimizedImage
							src={"/images/card-headers/blend-dev-prototype"}
							alt={"Blender Development for PyCharm"}
						/>
						<p>
							Blender Development for PyCharm is a comprehensive plugin that streamlines the creation
							and debugging of Blender extensions by enabling seamless launch and real-time reloading
							directly from the IDE.
						</p>
						<div class={"projects-link"}>
							<A
								href={"/plugin/blender-development"}
								class={"btn"}
							>
								Go to Page
							</A>
							<a
								href={"https://codeberg.org/SakuraSedaia/blender_pycharm"}
								class={"btn"}
							>
								<SocialIcon name={"codeberg"}/> Source
							</a>
						</div>
					</div>
				</div>
			</section>
		</NoHydration>
  );
}
