import Header from "~/sections/header.jsx";
import Footer from "~/sections/footer.jsx";
import OptimizedImage from "~/components/media/optimized-image.jsx";
import Breadcrumb from "~/components/navigation/breadcrumb.jsx";
import MyWebPages from "~/sections/www/my-web-pages.jsx";
import { Suspense, ErrorBoundary } from "solid-js";

function WWW() {
  return (
    <ErrorBoundary fallback={(err) => <div class="content-container">Error: {err.message}</div>}>
      <Suspense fallback={<div class="content-container">Loading...</div>}>
        <Header title={"Web Development"} img={"about"} />
        <main class={"content-container"}>
          <Breadcrumb items={[
            { label: "Creations", href: "/creations" },
            { label: "Web Dev" }
          ]} />
	        <MyWebPages />
        </main>
        <Footer />
      </Suspense>
    </ErrorBoundary>
  );
}
export default WWW;


