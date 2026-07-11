import ImageModal from "~/components/media/image-modal";
import { createSignal } from "solid-js";
import Tooltip from "~/components/text/tooltip";

type ImageFit = "cover" | "contain";

interface Render {
  name: string;
  filename: string;
  width: number;
  height: number;
  imageFit: ImageFit;
  description: string;
  // tags: string[];
  // link: string;
  // date: string;
}

export default function RenderCard({
  name,
  filename,
  width,
  height,
  imageFit,
  description,
  // tags,
  // link,
  // date,
}: Render) {
  const [modalOpen, setModalOpen] = createSignal(false);

  return (
    <article class={"card-gallery__item"}>
      <div class={"card"}>
        <ImageModal
          show={modalOpen()}
          onClose={() => setModalOpen(false)}
          title={name}
          description={description}
          src={`/${filename}`}
          alt={name}
        />
        <Tooltip text={"Click to preview"}>
          <button
            type={"button"}
            class={"card__image-button"}
            onClick={() => setModalOpen(true)}
            aria-label={`Open ${name} image preview`}
          >
            <span class={`card__image card__image--${imageFit}`}>
              <img
                src={`/${filename}`}
                alt={name}
                width={width}
                height={height}
              />
            </span>
          </button>
        </Tooltip>
        <div>
          <h3>{name}</h3>
          <p>{description}</p>
        </div>
      </div>
    </article>
  );
}
