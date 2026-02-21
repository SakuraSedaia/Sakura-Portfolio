import Header from "~/sections/header.jsx";
import Footer from "~/sections/footer.jsx";
import PluginsIntro from "~/sections/plugins/plugins-intro.jsx";
import AllPlugins from "~/sections/plugins/all-plugins.jsx";
import Breadcrumb from "~/components/navigation/breadcrumb.jsx";
import { Suspense, ErrorBoundary } from "solid-js";
import NotFinished from "~/components/ui/not-finished.jsx";

function Plugins() {
	return (
		<ErrorBoundary fallback={(err) => <div class="content-container">Error: {err.message}</div>}>
			<Suspense fallback={<div class="content-container">Loading...</div>}>
				<Header
					title="Plugins"
					img="plugins"
					desc="All Plugins, Extensions, and Addons developed by Sakura for various software."
				/>
				
				<main class={"content-container"}>
					<Breadcrumb items={[
						{ label: "Home", href: "/" },
						{ label: "Plugins" }
					]} />
					<PluginsIntro />
					<AllPlugins />
				</main>
				
				<Footer />
			</Suspense>
		</ErrorBoundary>
	);
}
export default Plugins;


