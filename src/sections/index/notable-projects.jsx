import { A } from "@solidjs/router";
import { NoHydration } from "solid-js/web";
import OptimizedImage from "~/components/media/optimized-image.jsx";

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
							<OptimizedImage src={"/images/card-headers/frostlight-studio-website"} alt={"Frostlight Studios"} />
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
								Github Repo
							</a>
						</div>
					</div>

					<div class={"grid-item"}>
						<h1>Rig Interface</h1>
						<hr />
						<OptimizedImage
							src={"/images/rig-headers/rig-interface/rig-interface-3"}
							alt={"Rig Interface Logo V3"}
						/>
						<p>
							The Rig Interface is my first big Python Project, working
							exclusively with the Blender Python API it contains several
							utilities and UI's for many versions of my Character Rig.
						</p>
						<div class={"projects-link"}>
							<A
								href={"/asset/sakura-rig-interface"}
								class={"btn"}
							>
								Go to Page
							</A>
							<a
								href={"https://github.com/SakuraSedaia/Sedaia-Rig-Interfaces"}
								class={"btn"}
							>
								Github Repo
							</a>
						</div>
					</div>
				</div>
			</section>
		</NoHydration>
  );
}
