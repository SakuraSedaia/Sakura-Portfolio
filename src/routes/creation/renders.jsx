import Header from "~/components/header.jsx";
import Footer from "~/components/footer.jsx";
import NotFinished from "~/components/not-finished.jsx";

function Renders() {
  return (
    <>
      <Header title="Renders" img="rigs" />
      <div class="content-container">
        <NotFinished />
      </div>
      <Footer />
    </>
  );
}
export default Renders;


