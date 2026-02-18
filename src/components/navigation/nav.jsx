import { useLocation, A } from "@solidjs/router";
import { For, Show } from "solid-js";
import Routes from "~/jsondata/routes.json";

export default function Nav(props) {
	const location = useLocation();
  return (
		<nav>
			<div class={"nav-container"}>
				<div class={"nav-title nav-section"}>
					<img
						src={"/images/icon/favicon.ico"}
						alt={"logo"}
						aria-disabled={true}
						style={"transform: scale(1.5); padding-right: 0.25rem;"}
					/>
					<A href="/" end>{props.title}</A>
				</div>
				<div class={"nav-router nav-section"}>
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
				</div>
			</div>
			{/* First, check each route for if Subnav is enabled. If there are any, create a secondary navbar for them and populate it */}
			<br />
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
								<div class={"nav-arrow"}> &lt; </div>
								<div class={"sub-nav-item"}>
									<A href={"/" + nav.path}>{nav.page}</A>
								</div>
							</div>
						</Show>
					</Show>
				)}
			</For>
		</nav>
	);
}
