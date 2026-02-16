import { A } from "@solidjs/router";
import { NoHydration } from "solid-js/web";

export default function Resume() {
  return (
		<NoHydration>
			<section id={"my-resume"} class={"breakout"}>
				<div class={"content-row"}>
        <span>
          Interested? Check out my Resume to get a more in depth profile on
          my work history!
        </span>
					<A href={"/resume"} class={"btn-invert"}>
						View Resume
					</A>
				</div>
			</section>
		</NoHydration>
  );
}
