import { Link } from "~/components/links";

export default function Contact() {
  return (
    <section class={"index__contact"}>
      <h2>Contact</h2>
      <p>
        Contact information can be found on the{" "}
        <Link path={"/contact"}>Contact</Link> page
      </p>
    </section>
  );
}