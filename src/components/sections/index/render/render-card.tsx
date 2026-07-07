import ImageModal from "~/components/media/image-modal";
import { createSignal } from "solid-js";
import Tooltip from "~/components/text/tooltip";

interface Render {
  name: string;
  filename: string;
  description: string;
  // tags: string[];
  // link: string;
  // date: string;
}

export default function RenderCard({
  name,
  filename,
  description,
  // tags,
  // link,
  // date,
}: Render) {
  const [modalOpen, setModalOpen] = createSignal(false);

  return (
    <a onClick={() => setModalOpen(true)}>
      <Tooltip text={"Click to preview"}>
        <div class={"card"}>
          <ImageModal
            show={modalOpen()}
            onClose={() => setModalOpen(false)}
            title={name}
            description={description}
            src={`/${filename}`}
            alt={name}
          />
          <img
            src={`/${filename}`}
            alt={name}
            aria-label={`Open ${name} image preview`}
          />

          <div class={"index__renders__card__description"}>
            <h3>{name}</h3>
            <p>{description}</p>
          </div>
        </div>
      </Tooltip>
    </a>
  );
}
