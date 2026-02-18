import Header from "~/sections/header.jsx";
import Footer from "~/sections/footer.jsx";
import CharGallery from "~/sections/renders/char-gallery.jsx";
import Breadcrumb from "~/components/breadcrumb.jsx";
import { Suspense, ErrorBoundary } from "solid-js";

function Renders() {
  return (
    <ErrorBoundary fallback={(err) => <div class="content-container">Error: {err.message}</div>}>
      <Suspense fallback={<div class="content-container">Loading...</div>}>
        <Header title={"Renders"} img={"commissions"} />
        <div class={"content-container"}>
          <Breadcrumb items={[
            { label: "Creations", href: "/creations" },
            { label: "Renders" }
          ]} />
          <CharGallery />
        </div>
        <Footer />
      </Suspense>
    </ErrorBoundary>
  );
}
export default Renders;


