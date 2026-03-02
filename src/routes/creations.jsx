import Header from "~/sections/header.jsx";
import Footer from "~/sections/footer.jsx";
import NotFinished from "~/components/ui/not-finished.jsx";
import { Suspense, ErrorBoundary } from "solid-js";
import { A } from "@solidjs/router";
import { Title, Meta } from "@solidjs/meta";
import Breadcrumb from "~/components/navigation/breadcrumb.jsx";

function Creations() {
  return (
    <ErrorBoundary fallback={(err) => <div class="content-container">Error: {err.message}</div>}>
      <Suspense fallback={<div class="content-container">Loading...</div>}>
        <Title>Creations - Sedaia Designs</Title>
        <Meta name="description" content="A gallery of my creative works, including renders, animations, and web development projects." />
        <Header title={"My Works"} img={"about"} />
        <main class={"content-container"}>
	        <Breadcrumb items={[
		        { label: "Creations", href: "/creations" }
	        ]} />
	        <div>
		        <h2 style={"padding-left: 3rem;"}>Router</h2>
		        <ul class={"styled-list"}>
			        <li><A href={"/creation/renders"} class={"link"}>Renders</A></li>
			        <li><A href={"/creation/animations"} class={"link"}>Animations</A></li>
			        <li><A href={"/creation/www"} class={"link"}>Websites</A></li>
		        </ul>
	        </div>
          <NotFinished />
        </main>
        <Footer />
      </Suspense>
    </ErrorBoundary>
  );
}
export default Creations;


