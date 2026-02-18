import Header from "~/sections/header.jsx";
import Footer from "~/sections/footer.jsx";
import OptimizedImage from "~/components/optimized-image.jsx";
import Breadcrumb from "~/components/breadcrumb.jsx";
import { Suspense, ErrorBoundary } from "solid-js";

function WWW() {
  return (
    <ErrorBoundary fallback={(err) => <div class="content-container">Error: {err.message}</div>}>
      <Suspense fallback={<div class="content-container">Loading...</div>}>
        <Header title={"Web Development"} img={"about"} />
        <div class={"content-container"}>
          <Breadcrumb items={[
            { label: "Creations", href: "/creations" },
            { label: "Web Dev" }
          ]} />
          <section>
            <header>
              <h1>Frostlight Studios</h1>
            </header>
            <OptimizedImage src="/images/card-headers/frostlight-studio-website" alt="Frostlight Studios" />
          </section>
        </div>
        <Footer />
      </Suspense>
    </ErrorBoundary>
  );
}
export default WWW;


