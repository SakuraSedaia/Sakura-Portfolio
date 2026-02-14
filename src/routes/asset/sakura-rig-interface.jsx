import Header from "~/sections/header.jsx";
import Footer from "~/sections/footer.jsx";
import AboutSRI from "~/sections/sri/about-sri.jsx";
import SRIDownloads from "~/sections/sri/sri-downloads.jsx";
import SRIInstructions from "~/sections/sri/sri-instructions.jsx";

function SRIMain() {
  return (
    <>
      <Header title="Sakura's Blender Rig Interface" img="sr-gui" />
      <div class={"content-container sri-container"}>
        <AboutSRI />
				<SRIDownloads />
				<SRIInstructions />
      </div>
      <Footer />
    </>
  );
}
export default SRIMain;


