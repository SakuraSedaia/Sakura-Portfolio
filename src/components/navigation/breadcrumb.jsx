import { A } from "@solidjs/router";
import { For, Show } from "solid-js";

/**
 * Breadcrumb component for navigation.
 * @param {Object} props
 * @param {Array<{label: string, href: string}>} props.items - List of breadcrumb items.
 */
export default function Breadcrumb(props) {
	return (
		<nav class="breadcrumb" aria-label="Breadcrumb">
			<ol class="breadcrumb-list">
				<For each={props.items}>
					{(item, index) => (
						<li class="breadcrumb-item">
							<span class="separator">/</span>
							<Show
								when={item.href} 
								fallback={<span class="current">{item.label}</span>}
							>
								<A href={item.href} class="link">{item.label}</A>
							</Show>
						</li>
					)}
				</For>
			</ol>
		</nav>
	);
}
