import CodeJson from "~/data/json/projects/code.json";

interface CodeProject {
  title: string;
  description: string;
  imageSrc: string;
  width: number;
  height: number;
  imageDescription: string;
  imageAlt: string;
  linkPath: string;
  imageFit: "cover" | "contain";
}

export default function getCodeList() {
  return (CodeJson.projects as CodeProject[]).slice();
}
