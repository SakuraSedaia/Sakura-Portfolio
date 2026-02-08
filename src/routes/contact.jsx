import Header from "~/components/header.jsx";
import Footer from "~/components/footer.jsx";
import ContactSection from "~/sections/contact/contact-section";

function Contact() {
  return (
    <>
      <Header title="Contact" img="rigs" />
      <div class={"content-container"}>
        <ContactSection />
      </div>
      <Footer />
    </>
  );
}
export default Contact;


