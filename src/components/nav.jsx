import { useLocation, A } from "@solidjs/router";
import { For, Show } from "solid-js";
import Routes from "~/jsondata/routes.json";

export default function Nav(props) {
  const location = useLocation();
  const active = (path) => (path === location.pathname ? "active" : "");

  return (
		<nav>
			<nav-container>
				<nav-title class={"nav-section"}>
					<img
						src={"/images/icon/favicon.ico"}
						alt={"logo"}
						aria-disabled={true}
						style={"transform: scale(1.5); padding-right: 0.25rem;"}
					/>
					<A href="/">{props.title}</A>
				</nav-title>
				<nav-router class={"nav-section"}>
					<For
						each={Routes}
						fallback={
							<div class={"nav-item"}>
								<a>Loading Nav...</a>
							</div>
						}
					>
						{(nav, n) => (
							<Show when={nav.show === true}>
								<nav-item class={`${active("/" + nav.path)}`}>
									<A href={"/" + nav.path}>{nav.page}</A>
								</nav-item>
							</Show>
						)}
					</For>
				</nav-router>
			</nav-container>
			{/* First, check each route for if Subnav is enabled. If there are any, create a secondary navbar for them and populate it */}
			<br />
			<For each={Routes} fallback={
				<sub-navigation>
					<nav-item class={"nav-item"}>
						<a>Loading Nav...</a>
					</nav-item>
				</sub-navigation>}>
				{(nav, n) => (
					<Show
						when={location.pathname.includes(
							"/" + nav.path.substring(0, nav.path.length - 1),
						)}
					>
						<Show when={nav.subnav === true}>
							<sub-navigation>
								<For
									each={nav.subpages}
									fallback={
										<nav-item class={"sub-nav-item"}>
											<a>Loading Nav...</a>
										</nav-item>
									}
								>
									{(subnav, s) => (
										<Show when={subnav.show === true}>
											<i>-</i>
											<nav-item class={`${active("/" + subnav.path)}`}>
												<A href={"/" + subnav.path}>{subnav.page}</A>
											</nav-item>
										</Show>
									)}
								</For>
								<nav-arrow> &lt; </nav-arrow>
								<nav-item class={`${active("/" + nav.path)}`}>
									<A href={"/" + nav.path}>{nav.page}</A>
								</nav-item>
							</sub-navigation>
						</Show>
					</Show>
				)}
			</For>
		</nav>
	);
}
