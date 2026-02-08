import Header from "~/components/header.jsx";
import Footer from "~/components/footer.jsx";
import NotFinished from "~/components/not-finished.jsx";

function Creations() {
  return (
    <>
      <Header title="My Works" img="about" />

      <div class="content-container">
        <NotFinished />
      </div>

      <Footer />
    </>
  );
}
export default Creations;


