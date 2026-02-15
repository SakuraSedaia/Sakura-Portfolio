import Header from "~/sections/header.jsx";
import Footer from "~/sections/footer.jsx";
import AboutSACR from "~/sections/sacr/about-sacr";
import SACRDownloads from "~/sections/sacr/sacr-downloads";
import SACRInstructions from "~/sections/sacr/sacr-instructions";

function SACR() {
  return (
    <>
      <Header title="Sakura Minecraft Character Rig" img="sacr" />

      <div class={"content-container sacr-container"}>
        <AboutSACR />
        <SACRDownloads />
        <SACRInstructions />
      </div>
      <Footer />
    </>
  );
}
export default SACR;


