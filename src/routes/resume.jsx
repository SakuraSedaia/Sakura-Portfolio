import Header from "~/components/header.jsx";
import Footer from "~/components/footer.jsx";
import NotFinished from "~/components/not-finished.jsx";

function Resume() {
  return (
    <>
      <Header title={"Resume"} img={"about"} />
      <div class={"content-container"}>
        <NotFinished />
      </div>
      <Footer />
    </>
  );
}
export default Resume;


