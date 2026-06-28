import Metadata from "~/components/page-metadata";

export default function Contact() {
  return (
    <main>
      <Metadata
        title={"Contact | Sedaia Designs"}
        description={
          "Contact Sakura at Sedaia Designs for project inquiries, collaborations, commissions, and freelance development or voxel art work."
        }
        url={"/contact"}
      />
      <h1>Contact</h1>
      <p>
        For inquiries, please reach out to Sakura at{" "}
        <a href="mailto:sakusedaia@outlook.com">sakusedaia@outlook.com</a>.
      </p>
    </main>
  );
}
