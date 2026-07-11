import RenderJson from "~/data/json/projects/renders.json";

interface RenderItem {
  name: string;
  filename: string;
  width: number;
  height: number;
  imageFit: "cover" | "contain";
  description: string;
  tags: string[];
  link: string;
  date: string;
}

export default function getRenderList() {
  const flatRenders = RenderJson.images.map(
    (item) => Object.values(item)[0] as RenderItem,
  );

  return flatRenders.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );
}
