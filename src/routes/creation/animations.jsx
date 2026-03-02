import Header from "~/sections/header.jsx";
import Footer from "~/sections/footer.jsx";
import Breadcrumb from "~/components/navigation/breadcrumb.jsx";
import NotFinished from "~/components/ui/not-finished.jsx";
import { Title, Meta } from "@solidjs/meta";

function Animations() {
  return (
    <>
      <Title>Animations - Sedaia Designs</Title>
      <Meta name="description" content="View a collection of animations and motion graphics created by Sedaia Designs." />
      <Header title={"Animations"} img={"rigs"} />
      <main class={"content-container"}>
        <Breadcrumb items={[
          { label: "Creations", href: "/creations" },
          { label: "Animations" }
        ]} />
        <NotFinished />
      </main>
      <Footer />
    </>
  );
}
export default Animations;


