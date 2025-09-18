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
              <div class="section-header">
                <h1 id="title">Render Showcase</h1>
              </div>
            </div>

            <div class="render-accordian">
              <div class="accord-header">
                <div class="accord-header-text">
                  <h2>Characters in Environments</h2>
                </div>
              </div>
              <div class="accord-content" id="accord-content">
                <div class="section-details">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio
                  commodi voluptates enim corrupti delectus saepe.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
