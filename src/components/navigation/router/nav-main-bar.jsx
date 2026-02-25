import { A } from "@solidjs/router";
import NavRouterMain from "./nav-router-main.jsx";
export default function NavMainBar(props) {
	return (
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
				<div class={"nav-router-bg"}>
					<NavRouterMain />
				</div>
			</div>
		</div>
	)
}