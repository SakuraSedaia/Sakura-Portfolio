import { Show } from "solid-js";

export default function ImageModal(props) {
  return (
    <Show when={props.show}>
      <div class="image-modal-overlay" onClick={props.onClose}>
        <div class="image-modal-content" onClick={(e) => e.stopPropagation()}>
          <button class="close-button" onClick={props.onClose}>&times;</button>
          <img src={props.imageSrc} alt={props.imageAlt} />
          <div class="image-info">
            <h3>{props.imageAlt}</h3>
            <p>{props.description}</p>
          </div>
        </div>
      </div>
    </Show>
  );
}
