import { A } from "@solidjs/router";
import { NoHydration } from "solid-js/web";

export default function NotableProjects() {
  return (
		<NoHydration>
			<section id={"notable-projects"} breakout full-width>
				<header>
					<h1>Notable Projects</h1>
				</header>

				<div class={"grid-container"}>
					<div class={"grid-item"}>
						<h1>Frostlight Studios</h1>
						<hr />
						<div class={"notable-img"}><img
							src={"/images/card-headers/frostlight-studio-website.jpg"}
							alt={"Frostlight Studio Website Preview"}
						/></div>
						<p>
							The Frostlight Studios website is an evolution on an old static html design, using SolidJS to create a
							wonderfully realized and performant website which helps define who Frostlight Studios is and what they do,
							all while keeping the codebase scalable and maintainable.
						</p>
						<div class={"projects-link"}>
							<a
								href={"https://frostlight-studios.vercel.app/"}
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
						<img
							src={"/images/rig-headers/rig-interface/rig-interface-3.png"}
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
