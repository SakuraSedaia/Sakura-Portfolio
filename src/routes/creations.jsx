import Header from "~/sections/header.jsx";
import Footer from "~/sections/footer.jsx";
import NotFinished from "~/components/not-finished.jsx";
import { Suspense, ErrorBoundary } from "solid-js";

function Creations() {
  return (
    <ErrorBoundary fallback={(err) => <div class="content-container">Error: {err.message}</div>}>
      <Suspense fallback={<div class="content-container">Loading...</div>}>
        <Header title={"My Works"} img={"about"} />

        <div class={"content-container"}>
          <NotFinished />
        </div>

        <Footer />
      </Suspense>
    </ErrorBoundary>
  );
}
export default Creations;


