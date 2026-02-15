import { NoHydration } from "solid-js/web";

export default function Extensions() {
  return (
    <NoHydration>
      <section class={"extensions"}>
        <header>
          <h1>Extensions</h1>
        </header>

        <div class={"grid-container"}>
          <div class={"grid-item"}>
            <h2>Coming Soon!</h2>
          </div>
        </div>
      </section>
    </NoHydration>
  );
}
