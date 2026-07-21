import { NoHydration } from "solid-js/web";
import { A } from "@solidjs/router";
import IconBundle from "~/components/graphics/icon-bundle";

export default function About() {
  return (
    <NoHydration>
      <section id={"sru-about"}>
        <div class={"heading"}>
          <h1>About Sakura Rig Utilities</h1>
        </div>
        <div class={"standard-container"}>
          <p>
            The Sakura Rig Utilities extension is a utility toolkit for Blender
            designed to streamline the management of Python-based rig
            interfaces. It provides essential tools and utilities for managing
            the{" "}
            <A href={"/projects/sakura-character-rig"} class={"link"}>
              Sakura Character Rig (SACR)
            </A>{" "}
            Built using Blender&apos;s Python API, the addon includes several
            key features:
          </p>

          <div class={"feature-grid"}>
            <div class={"feature-card"}>
              <div class={"feature-icon"}>
                <IconBundle name={"image-management"} />
              </div>
              <h3>Image Management</h3>
              <p>
                Advanced utilities for managing textures and image assets within
                Blender efficiently.
              </p>
            </div>
            <div class={"feature-card"}>
              <div class={"feature-icon"}>
                <IconBundle name={"rig-renaming"} />
              </div>
              <h3>Rig Renaming</h3>
              <p>
                Tools for renaming bones and objects in bulk, essential for
                maintaining clean rig structures.
              </p>
            </div>
            <div class={"feature-card"}>
              <div class={"feature-icon"}>
                <IconBundle name={"skin-downloader"} />
              </div>
              <h3>Skin Downloader</h3>
              <p>
                Automated utility for downloading Minecraft skins directly into
                Blender for your rigs.
              </p>
            </div>
            <div class={"feature-card"}>
              <div class={"feature-icon"}>
                <IconBundle name={"quick-access"} />
              </div>
              <h3>Quick Access</h3>
              <p>
                Easy-to-use operators for quick file opening and common rigging
                tasks.
              </p>
            </div>
          </div>

          <p>
            Sakura Rig Utilities is an evolving project that receives regular
            updates alongside new rig releases. It currently comes pre-packaged
            with the user interface for the{" "}
            <A href={"/projects/sakura-character-rig"} class={"link"}>
              Sakura Character Rig
            </A>
            .
          </p>

          <h2 class={"styled-heading"}>Future Plans</h2>
          <p>
            As an ongoing project, Sakura Rig Utilities will continue to expand
            its suite of tools for Minecraft-based creations in Blender. Future
            goals include a simplified system for adding custom UI scripts and
            broader utility integration. We've already made significant
            progress—testing with{" "}
            <a
              href="https://www.youtube.com/@AceTheBirb/videos"
              target="_blank"
              class={"link"}
            >
              Ace The Bird's
            </a>{" "}
            Elgania Rig prototype confirmed how easily existing UIs can be
            integrated.
          </p>
        </div>
      </section>
    </NoHydration>
  );
}
