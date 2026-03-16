import { NoHydration } from "solid-js/web";

export default function SACRInstructions() {
  return (
    <NoHydration>
      <section id={"instructions"}>
        <div class={"heading"}>
          <h1>Instructions</h1>
        </div>
        <div class={"standard-container"}>
          <p>
            This rig is available in two places, here and through it's
            associated addon
          </p>
        </div>
      </section>
    </NoHydration>
  );
}
