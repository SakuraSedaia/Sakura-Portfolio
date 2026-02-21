import Header from "~/sections/header.jsx";
import Footer from "~/sections/footer.jsx";
import NotFinished from "~/components/ui/not-finished.jsx";
import { Suspense, ErrorBoundary } from "solid-js";
import Breadcrumb from "~/components/navigation/breadcrumb.jsx";

function Creations() {
  return (
    <ErrorBoundary fallback={(err) => <div class="content-container">Error: {err.message}</div>}>
      <Suspense fallback={<div class="content-container">Loading...</div>}>
        <Header title={"My Works"} img={"about"} />

        <div class={"content-container"}>
	        <Breadcrumb items={[
		        { label: "Creations", href: "/creations" }
	        ]} />
          <NotFinished />
        </div>

        <Footer />
      </Suspense>
    </ErrorBoundary>
  );
}
export default Creations;


