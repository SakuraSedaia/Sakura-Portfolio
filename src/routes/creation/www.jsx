import Header from "~/components/header.jsx";
import Footer from "~/components/footer.jsx";
import NotFinished from "~/components/not-finished.jsx";

function WWW() {
  return (
    <>
      <Header title="Web Projects" img="about" />
      <div class="content-container">
        <NotFinished />
      </div>
      <Footer />
    </>
  );
}
export default WWW;


