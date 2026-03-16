import { A } from "@solidjs/router";
import { For, Show } from "solid-js";
import Routes from "~/json-data/routes.json";
// TODO: Add background moving animations to the nav elements when a new page is selected.

export default function NavRouterMain() {
	return (
			<For
				each={Routes}
				fallback={
					<div class={"nav-item"}>
						<A href={"/"} end>Loading Nav...</A>
					</div>
				}
			>
				{(nav, n) => (
					<Show when={nav.show === true}>
						<div class={"nav-item"}>
							<A href={"/" + nav.path} end>{nav.page}</A>
						</div>
					</Show>
				)}
			</For>
		)
}