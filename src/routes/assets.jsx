import Header from "~/sections/header.jsx";
import Footer from "~/sections/footer.jsx";
import AssetsIntro from "~/sections/assets/assets-intro";
import FeaturedAssets from "~/sections/assets/featured-assets";
import DownloadableAssets from "~/sections/assets/downloadable-assets";
import Extensions from "~/sections/assets/extensions";
import { Suspense, ErrorBoundary } from "solid-js";
import Breadcrumb from "~/components/breadcrumb.jsx";

function Assets() {
  return (
    <ErrorBoundary fallback={(err) => <div class="content-container">Error: {err.message}</div>}>
      <Suspense fallback={<div class="content-container">Loading...</div>}>
        <Header title="Assets and Extensions" img="renders" />

        <div class={"content-container"}>
	        <Breadcrumb items={[
	        	{ label: "Assets", href: "/assets" }
	        ]} />
          <AssetsIntro />
          <FeaturedAssets />
          <DownloadableAssets />
          <hr />
          <Extensions />
        </div>

        <Footer />
      </Suspense>
    </ErrorBoundary>
  );
}
export default Assets;


