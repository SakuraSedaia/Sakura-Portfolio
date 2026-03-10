import { NoHydration } from "solid-js/web";
import addonIndex from "~/jsondata/addon-index.json";

export default function BlenderDevIssues() {
  const data = addonIndex.BlenderDevelopment;
  const repo = data.repo;
  const issuesUrl = `${repo}/issues`;

  return (
    <NoHydration>
      <section id={"issues"}>
        <div class={"heading"}>
          <h1>Issues and Feature Requests</h1>
        </div>
        <div class={"standard-container"}>
          <p>
            For any bugs, feature requests, or general issues, please file a report on the <a href={issuesUrl} class={"link"} target="_blank">GitHub repository</a>.
          </p>
	        
        </div>
      </section>
    </NoHydration>
  );
}
