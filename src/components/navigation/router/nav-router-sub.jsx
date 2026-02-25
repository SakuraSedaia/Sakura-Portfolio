import { A } from "@solidjs/router"
import { For, Show } from "solid-js";

export default function NavRouterSub(props) {
	const nav = props.parent
	
	return (
		<For
			each={nav.subpages}
			fallback={
				<div class={"sub-nav-item"}>
					<a>Loading Nav...</a>
				</div>
			}
		>
			{(subnav, s) => (
				<Show when={subnav.show === true}>
					<i>-</i>
					<div class="sub-nav-item">
						<A href={"/" + subnav.path}>{subnav.page}</A>
					</div>
				</Show>
			)}
		</For>
	)

}