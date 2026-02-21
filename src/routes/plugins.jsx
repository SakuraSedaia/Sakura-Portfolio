import Header from "~/sections/header.jsx";
import Footer from "~/sections/footer.jsx";
import PluginsIntro from "~/sections/plugins/plugins-intro.jsx";
import FeaturedPlugins from "~/sections/plugins/featured-plugins.jsx";
import AllPlugins from "~/sections/plugins/all-plugins.jsx";
import Breadcrumb from "~/components/navigation/breadcrumb.jsx";
import { Suspense, ErrorBoundary } from "solid-js";

function Plugins() {
	return (
		<ErrorBoundary fallback={(err) => <div class="content-container">Error: {err.message}</div>}>
			<Suspense fallback={<div class="content-container">Loading...</div>}>
				<Header
					title="Plugins and Extensions"
					img="plugins"
				/>
				
				<main class={"content-container"}>
					<Breadcrumb items={[
						{ label: "Plugins", href: "/plugins" }
					]} />
					<PluginsIntro />
					{/* <FeaturedPlugins /> */}
					<AllPlugins />
				</main>
				
				<Footer />
			</Suspense>
		</ErrorBoundary>
	);
}
export default Plugins;


