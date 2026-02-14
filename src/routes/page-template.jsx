import Header from "~/sections/header.jsx";
import Footer from "~/sections/footer.jsx";
import { A } from "@solidjs/router";

function Template() {
  return (
    <>
      <Header
        title="Page Template"
        img="about"
        desc="Page Description goes here, describes in one sentence what the page is about."
      />

      <div class={"content-container"}>
        <section id={"content"}>
          <heading>
            <h1>Heading</h1>
          </heading>
          <content>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae,
              eius eos. A animi consectetur cupiditate deserunt dolorum enim
              eum, impedit ipsum laboriosam nemo nobis, omnis perspiciatis
              praesentium provident, rem sed.
            </p>
          </content>
        </section>
      </div>

      <Footer />
    </>
  );
}
export default Template;


