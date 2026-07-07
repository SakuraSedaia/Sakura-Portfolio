import RenderJson from "~/data/json/projects/renders.json";

export default function getRenderList() {
  const flatRenders = RenderJson.images.map((item) => Object.values(item)[0]);

  return flatRenders.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );
}
