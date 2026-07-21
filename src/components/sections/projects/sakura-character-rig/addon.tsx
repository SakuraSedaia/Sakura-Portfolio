import { NoHydration } from "solid-js/web";
import Link from "~/components/routing/link";

export default function Addon() {
  return (
    <NoHydration>
      <section id={"sacr-addon"}>
        <div class={"standard-container"}>
          <div class={"issues-box"}>
            <h1>Get the Utilities</h1>
            <p>
              To get the most out of the Sakura Character Rig, we recommend
              using the Sakura Rig Utilities extension for Blender.
            </p>
            <Link
              path={"projects://sakura-rig-utilities"}
              class={"btn-primary"}
            >
              View Sakura Rig Utilities
            </Link>
          </div>
        </div>
      </section>
    </NoHydration>
  );
}
