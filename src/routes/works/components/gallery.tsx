import ImgDick from "./json/RenderDictionary.json";
import "./css/accordian.css";
import { createSignal, For } from "solid-js";
import "./json/RenderDictionary.json";
import { render } from "solid-js/web"
import h from "solid-js/h"

export default function ImgList(props: any) {
  const [category, setCat] = createSignal("null");
  const [catInd, setCatInd] = createSignal(-1);
  const cat = ImgDick.category[0]

  switch (props.cat) {
    case "Env":
      const setCatEnv = setCat(() => "Env");
      const setCatIndEnv = setCatInd(() => 0)
      break;
    case "Char":
      const setCatChar = setCat(() => "Char");
      const setCatIndChar = setCatInd(() => 1)
      break;
    case "CharEnv":
      const setCatCharEnv = setCat(() => "CharEnv");
      const setCatIndCharEnv = setCatInd(() => 2)
      break;
    default:
      const setCatNull = setCat(() => "null");
      const setCatIndNull = setCatInd(() => -1)
      break;
  }

  
  return (
    <div class="imgGallery">
      <For each={cat[0][catInd()].images}>
        {(img, i) => (
          <p>{category()}</p>
        )}
      </For>
    </div>
  );
}
