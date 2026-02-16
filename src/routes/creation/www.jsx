import Header from "~/sections/header.jsx";
import Footer from "~/sections/footer.jsx";
import OptimizedImage from "~/components/optimized-image.jsx";

function WWW() {
  return (
    <>
      <Header title={"Web Development"} img={"about"} />
      <div class={"content-container"}>
        <section>
          <header>
            <h1>Frostlight Studios</h1>
          </header>
          <OptimizedImage src="/images/card-headers/frostlight-studio-website.png" alt="Frostlight Studios" />
        </section>
      </div>
      <Footer />
    </>
  );
}
export default WWW;


