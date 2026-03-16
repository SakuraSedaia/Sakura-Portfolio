import { useLocation, A } from "@solidjs/router";
import { For, Show, createSignal, onCleanup } from "solid-js";
import Routes from "~/json-data/routes.json";

export default function MobileNav(props) {
	const location = useLocation();
  const [isOpen, setIsOpen] = createSignal(false);

  onCleanup(() => {
    if (typeof document !== 'undefined') {
      document.body.style.overflow = "auto";
    }
  });

  const toggleMenu = () => {
    const newState = !isOpen();
    setIsOpen(newState);
    if (typeof document !== 'undefined') {
      if (newState) {
          document.body.style.overflow = "hidden";
      } else {
          document.body.style.overflow = "auto";
      }
    }
  };

  const closeMenu = () => {
    setIsOpen(false);
    if (typeof document !== 'undefined') {
      document.body.style.overflow = "auto";
    }
  };

  return (
		<nav class="mobile-nav">
			<div class="mobile-nav-container">
				<div class="mobile-nav-header">
					<div class="mobile-nav-logo">
						<img
							src={"/images/icon/favicon.ico"}
							alt={"logo"}
							style={"transform: scale(1.2); padding-right: 0.5rem;"}
						/>
						<A href="/" end onClick={closeMenu}>{props.title}</A>
					</div>
					<button class="hamburger-menu" onClick={toggleMenu} aria-label="Menu">
						<div class={`hamburger-icon ${isOpen() ? 'open' : ''}`}>
							<span></span>
							<span></span>
							<span></span>
						</div>
					</button>
				</div>
				
				<Show when={isOpen()}>
					<div class="mobile-menu-overlay" onClick={closeMenu}>
						<div class="mobile-menu-content" onClick={(e) => e.stopPropagation()}>
							<ul class="mobile-nav-links">
								<For each={Routes}>
									{(nav) => (
										<Show when={nav.show === true}>
											<li class="mobile-nav-item">
												<A href={"/" + nav.path} end onClick={closeMenu} class="main-link">
													{nav.page}
												</A>
												
												<Show when={nav.subnav === true && location.pathname.includes("/" + nav.path.substring(0, nav.path.length - 1))}>
													<ul class="mobile-subnav-links">
														<For each={nav.subpages}>
															{(subnav) => (
																<Show when={subnav.show === true}>
																	<li class="mobile-subnav-item">
																		<A href={"/" + subnav.path} onClick={closeMenu}>
																			{subnav.page}
																		</A>
																	</li>
																</Show>
															)}
														</For>
													</ul>
												</Show>
											</li>
										</Show>
									)}
								</For>
							</ul>
						</div>
					</div>
				</Show>
			</div>
		</nav>
	);
}
