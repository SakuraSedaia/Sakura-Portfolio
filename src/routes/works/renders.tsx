import { createFileSystem, SyncFileSystemAdapter } from "@solid-primitives/filesystem"
import { createSignal } from "solid-js/types/server/reactive.js"



export default function Renders() {
  return (
    <div class="body-container">
      <div class="<name>-content body-content">
        <div class="section-header">
          <div class="section-header">
            <h1 id="title">Render Showcase</h1>
          </div>
        </div>
        <div class="env-contianer">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni quas
            illum nemo harum maxime alias velit debitis natus ut hic laboriosam
            excepturi corrupti repellat optio, consectetur quo exercitationem
            architecto dicta.
          </p>
        </div>
        <div class="char-env-contianer">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni quas
            illum nemo harum maxime alias velit debitis natus ut hic laboriosam
            excepturi corrupti repellat optio, consectetur quo exercitationem
            architecto dicta.
          </p>
        </div>
        <div class="char-contianer">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni quas
            illum nemo harum maxime alias velit debitis natus ut hic laboriosam
            excepturi corrupti repellat optio, consectetur quo exercitationem
            architecto dicta.
          </p>
        </div>

      </div>
    </div>
  );
}
