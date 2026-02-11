import Header from "~/components/header.jsx";
import Footer from "~/components/footer.jsx";
import CharGallery from "~/sections/renders/char-gallery.jsx";

function Renders() {
  return (
    <>
      <Header title={"Renders"} img={"commissions"} />
      <div class={"content-container"}>
        <CharGallery />
      </div>
      <Footer />
    </>
  );
}
export default Renders;


