import Header from "~/sections/header.jsx";
import Footer from "~/sections/footer.jsx";
import ImageGallery from "~/sections/creations/renders/image-gallery.jsx";
import Breadcrumb from "~/components/navigation/breadcrumb.jsx";
import { Suspense, ErrorBoundary } from "solid-js";
import { Title, Meta } from "@solidjs/meta";

function Renders() {
  return (
    <ErrorBoundary fallback={(err) => <div class="content-container">Error: {err.message}</div>}>
      <Suspense fallback={<div class="content-container">Loading...</div>}>
        <Title>Renders - Sedaia Designs</Title>
        <Meta name="description" content="View a gallery of high-quality 3D renders and character art by Sedaia Designs." />
        <Header title={"Renders"} img={"commissions"} />
        <main class={"content-container"}>
          <Breadcrumb items={[
            { label: "Creations", href: "/creations" },
            { label: "Renders" }
          ]} />
          <ImageGallery />
        </main>
        <Footer />
      </Suspense>
    </ErrorBoundary>
  );
}
export default Renders;


