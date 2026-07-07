import Metadata from "~/components/meta/metadata";
import Header from "~/components/sections/global/header";
import ContactMe from "~/components/sections/contact/contact-me";

export default function Contact() {
  return (
    <main class={"route__contact"}>
      <Metadata
        title={"Contact | Sedaia Designs"}
        description={
          "Contact Sakura at Sedaia Designs for project inquiries, collaborations, commissions, and freelance development or voxel art work."
        }
        url={"/contact"}
      />

      <Header
        title={"Contact Me"}
        description={
          <p>
            Need to get in touch? Use one of the options below and I will
            respond as soon as possible.
          </p>
        }
        class={"index__header"}
        image={"images/renders/char-env/sakura-blacksmith.avif"}
      />

      <ContactMe />
    </main>
  );
}
