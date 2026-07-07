import { A } from "@solidjs/router";

export default function Addon() {
  return (
    <section id={"sacr-addon"}>
      <div class={"standard-container"}>
        <div class={"issues-box"}>
          <h1>Get the Utilities</h1>
          <p>
            To get the most out of the Sakura Character Rig, we recommend using
            the Sakura Rig Utilities extension for Blender.
          </p>
          <A href={"/projects/sakura-rig-utilities"} class={"btn-primary"}>
            View Sakura Rig Utilities
          </A>
        </div>
      </div>
    </section>
  );
}
