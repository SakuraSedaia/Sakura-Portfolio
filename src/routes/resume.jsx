import Header from "~/sections/header.jsx";
import Footer from "~/sections/footer.jsx";
import NotFinished from "~/components/not-finished.jsx";

function Resume() {
  return (
    <>
      <Header title="Resume" img="about" />
      <div class="content-container">
        <NotFinished />
      </div>
      <Footer />
    </>
  );
}
export default Resume;


