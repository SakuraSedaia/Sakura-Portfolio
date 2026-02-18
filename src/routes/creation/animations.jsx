import Header from "~/sections/header.jsx";
import Footer from "~/sections/footer.jsx";
import Breadcrumb from "~/components/navigation/breadcrumb.jsx";
import NotFinished from "~/components/ui/not-finished.jsx";
function Animations() {
  return (
    <>
      <Header title={"Animations"} img={"rigs"} />
      <div class={"content-container"}>
        <Breadcrumb items={[
          { label: "Creations", href: "/creations" },
          { label: "Animations" }
        ]} />
        <NotFinished />
      </div>
      <Footer />
    </>
  );
}
export default Animations;


