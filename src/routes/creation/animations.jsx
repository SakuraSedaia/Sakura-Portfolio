import Header from "~/components/header.jsx";
import Footer from "~/components/footer.jsx";
import NotFinished from "~/components/not-finished.jsx";
function Animations() {
  return (
    <>
      <Header title={"Animations"} img={"rigs"} />
      <div class={"content-container"}>
        <NotFinished />
      </div>
      <Footer />
    </>
  );
}
export default Animations;


