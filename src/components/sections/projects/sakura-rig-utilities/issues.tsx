import { NoHydration } from "solid-js/web";

export default function Issues() {
  return (
    <NoHydration>
      <section id={"sru-issues"}>
        <div class={"standard-container"}>
          <div class={"issues-box"}>
            <h1>Found a Bug?</h1>
            <p>
              We're constantly working to improve Sakura Rig Utilities. If you
              encounter any issues or have feature requests, please let us know
              so we can address them.
            </p>
            <a
              href={
                "https://codeberg.org/SakuraSedaia/Sakura-Rig-Interfaces/issues"
              }
              class={"btn-primary"}
              target="_blank"
            >
              Report an Issue
            </a>
          </div>
        </div>
      </section>
    </NoHydration>
  );
}
