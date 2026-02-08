import { For } from "solid-js";
import renderData from "~/jsondata/render-map.json";
import DisplayCard from "~/components/display-card";

export default function CharGallery() {
	const ImgGroup = renderData[0];
  return (
    <section id={"char-gallery"}>
      <heading>
        <h2>{ImgGroup.label}</h2>
      </heading>

      <grid-container>
				<p>{ImgGroup.label}</p>
        {/*<For each={renderData.assets}>
				<DisplayCard data={JSON.stringify(renderData[0].label)} />
          {(asset) => <DisplayCard data={JSON.stringify(asset)} />}
        </For>*/}
      </grid-container>
    </section>
  );
}
