import { Link } from "~/components/routing/link";
import Tooltip from "~/components/text/tooltip";

interface CodeProject {
  title: string;
  description: string;
  imageSrc: string;
  imageDescription: string;
  imageAlt: string;
  linkPath: string;
}

export default function ProgrammingCard({
  title,
  description,
  imageSrc,
  imageDescription,
  imageAlt,
  linkPath,
}: CodeProject) {
  return (
    <Link path={linkPath}>
      <Tooltip text={"Open project"}>
        <div class={"card"}>
          <img src={imageSrc} alt={imageAlt} aria-label={imageDescription} />

          <div class={"index__programming__card__description"}>
            <h3>{title}</h3>
            <p>{description}</p>
          </div>
        </div>
      </Tooltip>
    </Link>
  );
}
