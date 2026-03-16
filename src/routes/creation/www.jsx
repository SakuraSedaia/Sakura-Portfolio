import Header from "~/sections/header.jsx";
import Footer from "~/sections/footer.jsx";
import Breadcrumb from "~/components/navigation/breadcrumb.jsx";
import MyWebPages from "~/sections/creations/www/my-web-pages.jsx";
import { Suspense, ErrorBoundary } from "solid-js";
import { Title, Meta } from "@solidjs/meta";

function WWW() {
  return (
    <ErrorBoundary fallback={(err) => <div class="content-container">Error: {err.message}</div>}>
      <Suspense fallback={<div class="content-container">Loading...</div>}>
        <Title>Web Development - Sedaia Designs</Title>
        <Meta name="description" content="Explore web development projects and websites created by Sedaia Designs." />
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


