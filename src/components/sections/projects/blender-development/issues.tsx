import { NoHydration } from "solid-js/web";
import addonIndex from "~/data/json/projects/addon-index.json";

export default function BlenderDevIssues() {
  const data = addonIndex.BlenderDevelopment;
  const repo = data.repo;
  const issuesUrl = `${repo}/issues`;

  return (
    <NoHydration>
      <section id={"issues"}>
        <div class={"standard-container"}>
          <div class={"issues-box"}>
            <h1>Found a Bug?</h1>
            <p>
              For any bugs, feature requests, or general issues, please file a
              report on the Codeberg repository so we can address them.
            </p>
            <a href={issuesUrl} class={"btn-primary"} target={"_blank"}>
              Report an Issue
            </a>
          </div>
        </div>
      </section>
    </NoHydration>
  );
}
