import CodeJson from "~/data/json/projects/code.json";

interface CodeProject {
  title: string;
  description: string;
  imageSrc: string;
  imageDescription: string;
  imageAlt: string;
  linkPath: string;
}

export default function getCodeList() {
  return (CodeJson.projects as CodeProject[]).slice();
}
