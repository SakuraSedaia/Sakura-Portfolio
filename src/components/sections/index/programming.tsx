import { For } from "solid-js";
import ProgrammingCard from "~/components/sections/index/programming/programming-card";
import getCodeList from "~/utils/get-code-list";

export default function Programming() {
  const previewCode = getCodeList().slice(0, 3);
  return (
    <section class={"index__programming"}>
      <h2 id={"programming"}>Code Projects</h2>

      <div class={"card-gallery"}>
        {/* <For> is SolidJS's idiomatic and optimized way to render arrays */}
        <For each={previewCode}>{(code) => <ProgrammingCard {...code} />}</For>
      </div>
    </section>
  );
}
