import "./css/render.css";

import {
  createFileSystem,
  SyncFileSystemAdapter,
} from "@solid-primitives/filesystem";
import { createSignal } from "solid-js/types/server/reactive.js";
import Heading from "~/components/heading";
import ImgList from "./components/gallery";

export default function Renders() {
  return (
    <>
      <Heading
        title="Render Galleries"
        desc="Blender 3D Artist and Computer-Aided Designer"
        background="renders"
      />
      <div class="body-container">
        <div class="render-content body-content">
          <div class="render-galleries">
            <div class="section-header">
                <h1 id="title">Render Showcase</h1>
            </div>

            <ImgList />
          </div>
        </div>
      </div>
    </>
  );
}
