import Header from "~/sections/header.jsx";
import Footer from "~/sections/footer.jsx";
import Breadcrumb from "~/components/breadcrumb.jsx";
import { Suspense, ErrorBoundary } from "solid-js";

function Template() {
  return (
    <ErrorBoundary fallback={(err) => <div class="content-container">Error: {err.message}</div>}>
      <Suspense fallback={<div class="content-container">Loading...</div>}>
        <Header
          title="Page Template"
          img="about"
          desc="Page Description goes here, describes in one sentence what the page is about."
        />

        <main class={"content-container"}>
          <Breadcrumb items={[
            { label: "Home", href: "/" },
            { label: "Page Template", href: "/page-template" }
          ]} />
          <section id={"content"}>
            <div class={"heading"}>
              <h1>Heading</h1>
            </div>
            <div class={"content"}>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae,
                eius eos. A animi consectetur cupiditate deserunt dolorum enim
                eum, impedit ipsum laboriosam nemo nobis, omnis perspiciatis
                praesentium provident, rem sed.
              </p>
            </div>
          </section>
        </main>

        <Footer />
      </Suspense>
    </ErrorBoundary>
  );
}
export default Template;


