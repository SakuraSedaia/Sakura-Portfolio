import Tooltip from "~/components/text/tooltip";
import { NoHydration } from "solid-js/web";
import Link from "~/components/routing/link";

type ImageFit = "cover" | "contain";

interface CodeProject {
  title: string;
  description: string;
  imageSrc: string;
  width: number;
  height: number;
  imageDescription: string;
  imageAlt: string;
  linkPath: string;
  imageFit: ImageFit;
}

export default function ProgrammingCard({
  title,
  description,
  imageSrc,
  width,
  height,
  imageDescription,
  imageAlt,
  linkPath,
  imageFit,
}: CodeProject) {
  return (
    <NoHydration>
      <article class={"card-gallery__item"}>
        <div class={"card"}>
          <div class={`card__image card__image--${imageFit}`}>
            <img
              src={imageSrc}
              alt={imageAlt}
              width={width}
              height={height}
              aria-label={imageDescription}
            />
          </div>

          <h3>{title}</h3>
          <p>{description}</p>

          <Tooltip text={"Open project"}>
            <Link path={linkPath} emboss={true}>
              Open Project
            </Link>
          </Tooltip>
        </div>
      </article>
    </NoHydration>
  );
}
