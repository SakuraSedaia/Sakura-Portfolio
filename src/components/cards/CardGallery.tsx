import { createSignal, JSX, splitProps } from "solid-js";
import { Link } from "~/components/links";
import { handleHorizontalWheel } from "~/utils/scroll-behavior";
import ImageModal from "~/components/graphics/ImageModal";

interface CardContainerProps extends JSX.HTMLAttributes<HTMLDivElement> {
  children: JSX.Element;
}

interface CardItemProps extends JSX.HTMLAttributes<HTMLDivElement> {
  title: string;
  description?: string;
  image: string;
  imageDescription?: string;
  imageAlt?: string;
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
    "imageDescription",
    "imageAlt",
    "linkPath",
  ]);

  const [modalOpen, setModalOpen] = createSignal(false);

  return (
    <div class={"card-item"} {...(others as any)}>
      <h3>{local.title}</h3>
      {local.description && <p>{local.description}</p>}
      <div class={"card-item__image-container"}>
        {local.image && (
          <button
            class={"card-item__image-button"}
            type={"button"}
            onClick={() => setModalOpen(true)}
            aria-label={`Open ${local.imageAlt || local.title} image preview`}
          >
            <img src={local.image} alt={local.imageAlt || ""} />
          </button>
        )}
      </div>
      <ImageModal
        show={modalOpen()}
        onClose={() => setModalOpen(false)}
        src={local.image}
        alt={local.imageAlt}
        title={local.title}
        description={local.imageDescription}
      />
      {local.linkPath && (
        <Link path={local.linkPath} emboss={true} class={"card-item__link"}>
          {local.title}
        </Link>
      )}
    </div>
  );
}
