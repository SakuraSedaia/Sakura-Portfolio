import { Link } from "~/components/links";

export default function Comissions() {
  return (
    <section class={"index__commissions"}>
      <h2>Commissions</h2>
      <p>
        Sakura is currently seeking opportunities to work on exciting projects
        that push the boundaries of what is possible in the world of 3D art and
        software development.
      </p>
      <p>
        If you are interested in collaborating with Sakura on a project or
        getting a commission, feel free to reach out to him at{" "}
        <Link path="mailto:sakusedaia@outlook.com">sakusedaia@outlook.com</Link>{" "}
        or visit the <Link path={"/commissions"}>commissions</Link> page.
      </p>
    </section>
  );
}