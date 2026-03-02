import Header from "~/sections/header.jsx";
import Footer from "~/sections/footer.jsx";
import ContactSection from "~/sections/contact/contact-section";
import Breadcrumb from "~/components/navigation/breadcrumb.jsx";
import { Title, Meta } from "@solidjs/meta";

function Contact() {
  return (
    <>
      <Title>Contact - Sedaia Designs</Title>
      <Meta name="description" content="Get in touch with Sedaia Designs for inquiries, collaborations, or commissions." />
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


