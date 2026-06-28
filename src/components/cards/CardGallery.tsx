import { JSX, splitProps } from "solid-js";
import { Link } from "~/components/links";
import { handleHorizontalWheel } from "~/utils/scroll-behavior";

interface CardContainerProps {
  children: JSX.Element;
}

interface CardItemProps {
  title: string;
  description?: string;
  image?: string;
  linkName?: string;
  linkPath?: string;
}

export function CardGallery(props: CardContainerProps) {
  const [local, others] = splitProps(props, ["children"]);

  return (
    <div
      class={"card-container"}
      onWheel={handleHorizontalWheel}
      {...(others as any)}
    >
      {local.children}
    </div>
  );
}

export function CardItem(props: CardItemProps) {
  const [local, others] = splitProps(props, [
    "title",
    "description",
    "image",
    "linkName",
    "linkPath",
  ]);

  return (
    <div class={"card-item"} {...(others as any)}>
      <h3>{local.title}</h3>
      {local.description && <p>{local.description}</p>}
      {local.image && <img src={local.image} alt={""} />}
      {local.linkPath && (
        <Link path={local.linkPath} emboss={true}>
          {local.linkName}
        </Link>
      )}
    </div>
  );
}