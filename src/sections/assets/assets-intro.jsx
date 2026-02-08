import { NoHydration } from "solid-js/web";

export default function AssetsIntro() {
  return (
    <NoHydration>
      <section class={"about"}>
        <p>
          Here you will find all publicly available assets, addons, and
          extensions developed and released by Sakura
        </p>
      </section>
    </NoHydration>
  );
}
