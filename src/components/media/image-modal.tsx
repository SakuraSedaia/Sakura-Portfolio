import { Show } from "solid-js";
import { Portal } from "solid-js/web";

interface ImageModalProps {
  show: boolean;
  onClose: () => void;
  src: string;
  alt?: string;
  description?: string;
  title?: string;
}

export default function ImageModal(props: ImageModalProps) {
  return (
    <Show when={props.show}>
      <Portal>
        <div class={"image-modal-overlay"} onClick={props.onClose}>
          <div
            class={"image-modal-content"}
            role={"dialog"}
            aria-modal={"true"}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              class={"image-modal-content__close-button"}
              type={"button"}
              onClick={props.onClose}
              aria-label={"Close image preview"}
            >
              &times;
            </button>
            <img src={props.src} alt={props.alt} />
            <Show when={props.title || props.description}>
              <div class={"image-modal-content__info"}>
                {props.title && <h3>{props.title}</h3>}
                {props.description && <p>{props.description}</p>}
              </div>
            </Show>
          </div>
        </div>
      </Portal>
    </Show>
  );
}
