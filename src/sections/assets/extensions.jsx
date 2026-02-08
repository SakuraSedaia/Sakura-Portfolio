import { NoHydration } from "solid-js/web";

export default function Extensions() {
  return (
    <NoHydration>
      <section class="extensions">
        <heading>
          <h1>Extensions</h1>
        </heading>

        <grid-container>
          <grid-item>
            <h2>Coming Soon!</h2>
          </grid-item>
        </grid-container>
      </section>
    </NoHydration>
  );
}
