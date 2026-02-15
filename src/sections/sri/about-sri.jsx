import { NoHydration } from "solid-js/web";

export default function AboutSRI() {
	return (
		<NoHydration>
			<section id={"about"}>
				<header>
    <h1>About Sakura's Rig Interface</h1>
				</header>
				<div class={"standard-container"}>
					<p>
						The Rig Interface extension is an API extension which provides utilities for working with and creating new and using Python based rig interfaces such as those found in use by <a href="/asset/sakura-character-rig" class={"link"}>my own SACR project</a>, <a href="https://www.youtube.com/watch?v=XZZUk8BqVOE" class={"link"} target="_blank">Endertainer's MCS2 rig</a>, <a href="https://www.youtube.com/watch?v=8mnU203_S_s" class={"link"} target="_blank">Timy's Character Rig V7</a>, and several other advanced rigs. This addon is created in Blender's Python API and included operators include:
					</p>
					<ul class={"sri-list"}>
						<li>Image Management Operators</li>
						<li>Rename Rig Operator</li>
						<li>Skin Downloading Utility</li>
						<li>An open file Operator</li>
					</ul>
					<p>
						This extension is very much an ongoing project, and will continue to get new features alongside releases of different rigs by Sakura, namely the <a href="/asset/sakura-character-rig" class={"link"}>Advanced Character Rig</a>, of which this extension is packaged with the UI's for.
					</p>
					<h2 class={"sri-heading"}>What's the plan for the future?</h2>
					<p>As mentioned, this project is ongoing, and has no end in sight. Eventually I want to integrate the ability to easily add UI scripts as well as many more utilities useful for Minecraft based creations within Blender. A portion of that goal has already been realized, as it is extremely easy to add existing, already built UI's into the addon as tested with <a href="https://www.youtube.com/@AceTheBirb/videos" target="_blank" class={"link"}>Ace The Bird's</a> Elgania Rig prototype.</p>

				</div>
			</section>
		</NoHydration>
	);
}