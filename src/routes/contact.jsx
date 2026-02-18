import Header from "~/sections/header.jsx";
import Footer from "~/sections/footer.jsx";
import ContactSection from "~/sections/contact/contact-section";
import Breadcrumb from "~/components/breadcrumb.jsx";

function Contact() {
  return (
    <>
      <Header title="Contact" img="rigs" />
      <div class={"content-container"}>
	      <Breadcrumb items={[
		      { label: "Contact", href: "/contact" }
	      ]} />
        <ContactSection />
      </div>
      <Footer />
    </>
  );
}
export default Contact;


