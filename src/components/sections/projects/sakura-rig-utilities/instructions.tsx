import { NoHydration } from "solid-js/web";
import Link from "~/components/routing/link";

export default function Instructions() {
  return (
    <NoHydration>
      <section id={"sru-instructions"}>
        <div class={"heading"}>
          <h1>Installation Guide</h1>
        </div>
        <div class={"standard-container"}>
          <div class={"instruction-blocks"}>
            <div class={"instruction-card"}>
              <h3>Recommended Method</h3>
              <p>
                The easiest way to stay up-to-date via the Blender Extensions
                platform.
              </p>
              <ol class={"styled-list"}>
                <li>
                  Open Blender and navigate to{" "}
                  <strong>Edit &gt; Preferences &gt; Get Extensions</strong>.
                </li>
                <li>
                  If prompted, enable <strong>Online Access</strong>.
                </li>
                <li>
                  Search for <strong>"Sakura Rig Utilities"</strong> and click
                  Install.
                </li>
                <li>Ensure the addon is enabled in your preferences.</li>
                <li>
                  Download a compatible rig from the{" "}
                  <Link path={"/projects/sakura-character-rig"}>SACR page</Link>
                  .
                </li>
              </ol>
            </div>

            <div class={"instruction-card"}>
              <h3>Manual Method</h3>
              <p>For offline installation or specific version requirements.</p>
              <ol class={"styled-list"}>
                <li>
                  Download the <code>.zip</code> release from the downloads
                  section above.
                </li>
                <li>
                  In Blender, go to{" "}
                  <strong>Edit &gt; Preferences &gt; Add-ons</strong>.
                </li>
                <li>
                  Click the arrow in the top-right and select{" "}
                  <strong>Install from Disk...</strong>
                </li>
                <li>Choose the downloaded file and ensure it's enabled.</li>
                <li>
                  Download a compatible rig from the{" "}
                  <Link path={"/projects/sakura-character-rig"}>SACR page</Link>
                  .
                </li>
              </ol>
            </div>
          </div>
        </div>
      </section>
    </NoHydration>
  );
}
