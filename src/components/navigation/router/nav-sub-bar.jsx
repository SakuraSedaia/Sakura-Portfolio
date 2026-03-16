import { useLocation, A } from "@solidjs/router";
import { For, Show } from "solid-js";
import Routes from "~/json-data/routes.json";
import NavRouterSub from "./nav-router-sub.jsx";
// TODO: Add background moving animations to the nav elements when a new page is selected.

export default function NavSubBar() {
	const location = useLocation();
	
	return (
		<For each={Routes} fallback={
			<div class={"sub-navigation"}>
				<div class={"sub-nav-item"}>
					<a>Loading Nav...</a>
				</div>
			</div>}>
			{(nav, n) => (
				<Show
					when={location.pathname.includes(
						"/" + nav.path.substring(0, nav.path.length - 1),
					)}
				>
					<Show when={nav.subnav === true}>
						<div class={"sub-navigation"}>
							<NavRouterSub parent={nav} />
							<div class={"nav-arrow"}> &lt; </div>
							<div class={"sub-nav-item"}>
								<A href={"/" + nav.path}>{nav.page}</A>
							</div>
						</div>
					</Show>
				</Show>
			)}
		</For>
	)
}