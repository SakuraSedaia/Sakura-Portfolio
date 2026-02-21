import { NoHydration } from "solid-js/web";

export default function SRIIssues() {

  return (
    <NoHydration>
      <section id={"issues"}>
        <div class={"heading"}>
          <h1>Issues</h1>
        </div>
        <div class={"standard-container"}>
          <p>
            For any bugs, feature requests, or general issues, please file a report on the <a href={"#"} class={"link"} target="_blank">GitHub repository</a>.
          </p>
        </div>
      </section>
    </NoHydration>
  );
}
