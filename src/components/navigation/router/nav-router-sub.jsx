import { A } from "@solidjs/router"
import { For, Show } from "solid-js";

export default function NavRouterSub(props) {
	const nav = props.parent

	function checkHTTP(url) {
		return !!(url.startsWith("http://") || url.startsWith("https://"));
	}
	
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
						<Show
							when={checkHTTP(subnav.path)}
							fallback={<A href={"/" + subnav.path}>{subnav.page}</A>}
						>
							<a href={subnav.path}>{subnav.page}</a>
						</Show>
					</div>
				</Show>
			)}
		</For>
	)

}