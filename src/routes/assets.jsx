import Header from "~/components/header.jsx";
import Footer from "~/components/footer.jsx";
import AssetsIntro from "~/sections/assets/assets-intro";
import FeaturedAssets from "~/sections/assets/featured-assets";
import DownloadableAssets from "~/sections/assets/downloadable-assets";
import Extensions from "~/sections/assets/extensions";

function Assets() {
  return (
    <>
      <Header title="Assets and Extensions" img="renders" />

      <div class={"content-container"}>
        <AssetsIntro />
        <FeaturedAssets />
        <DownloadableAssets />
        <hr />
        <Extensions />
      </div>

      <Footer />
    </>
  );
}
export default Assets;


