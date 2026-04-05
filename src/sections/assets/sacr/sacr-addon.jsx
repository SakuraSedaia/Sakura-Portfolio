import { A } from "@solidjs/router";

export default function SACRAddon() {
	return (
		<section id={"sacr-addon"}>
			<div class={"heading"}>
				<h1>Extension</h1>
			</div>
			<div class={"standard-container"}>
				<p>
					View the associated Extension here: <A href={"/plugin/sakura-rig-interface"} class={"link"} target={"_blank"}>SACR Blender Addon</A>
				</p>
			</div>
		</section>
	);
}
