import ImgDick from "./json/RenderDictionary.json";
import { createSignal, For } from "solid-js";

export default function ImgList(props: any) {
  const [category, setCat] = createSignal("null");
  const [catInd, setCatInd] = createSignal(-1);
  const renderDir = "./images/renders";
  return (
    <div class="image-gallery">
      <For each={ImgDick} fallback={<div class="loading">Loading...</div>}>
        {(cat, c) => (
          <>
            <div class="section-header">
              <h2>{cat.label}</h2>
            </div>
            <div class="image-list">
              <For
                each={cat.images}
                fallback={<div class="loading">Loading...</div>}
              >
                {(image, i) => (
                  <div class="image-item">
                    <img src={renderDir + cat.path + image.filename} />
                    <div class="image-tooltip">
                      <h3 class="text-lg">{image.name}</h3>
                      <p class="text-sm">
                        Published {image.publishMonth + " " + image.publishYear}
                      </p>
                    </div>
                  </div>
                )}
              </For>
            </div>
          </>
        )}
      </For>
    </div>
  );
}
