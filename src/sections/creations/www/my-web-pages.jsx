import OptimizedImage from "~/components/media/optimized-image.jsx";
import SocialIcon from "~/components/media/social-icon.jsx";

export default function MyWebPages() {
	return (
		<section id={"myWebPages"}>
			<header>
				<h2>My Personal Web Projects</h2>
			</header>
			<div class={"grid-container"}>
				<div class={"grid-item"}>
					<header>
						<h1>Frostlight Studios</h1>
					</header>
					<OptimizedImage src="/images/card-headers/frostlight-studios-org-preview" alt="Frostlight Studios" />
					<a href={"https://frostlight-studios.org"} class={"btn"}><SocialIcon name={"globe"}/> Visit</a>
				</div>
			</div>
		</section>
	)
}