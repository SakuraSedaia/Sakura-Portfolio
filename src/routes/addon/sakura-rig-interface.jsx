import Header from "~/components/Header";
import addonIndex from "./addon_index.json";
import "./sakura-rig-interface.css";
import { For, Show, createSignal } from "solid-js";

function sacr() {
  const stable = addonIndex.stable[0];
  const stableInfo = stable.styles;
  const dev = addonIndex.dev[0];
  const devInfo = dev.styles;

  // Github Info
  const downloadPath = "releases/download/";
  const tagPath = "releases/tag/";
  const treePath = "tree/"

  // Signals
  const [stableIndex, setStableIndex] = createSignal(0);
  const [devIndex, setDevIndex] = createSignal(0);

  const updateBuild = (data, event) => {
    var branch = data[0]
    var index = data[1]
    var build = data[2]

    if (branch == 'stable') {
      const newStyle = setStableIndex(() => index);

      var tabs = document.getElementById('versionStable').children
      for (var i = 0; i < tabs.length; i++) {
        if (i == index) {
          tabs[index].classList.add('tab-active')
        } else {
          tabs[i].classList.remove('tab-active')
        }
      }
    } else {

      const newStyle = setDevIndex(() => index);

      var tabs = document.getElementById('versionDev').children
      for (var i = 0; i < tabs.length; i++) {
        if (i == index) {
          tabs[index].classList.add('tab-active')
        } else {
          tabs[i].classList.remove('tab-active')
        }
      }
    }
  }

  return (
    <div>
      <Header title="Sakura's Blender Rig Interface" background="sr-gui" />


      <div class="sacr-content body-container">
        <div class="sacr-about py-10">
          <div class="sacr-area breakdown">
            <div class="section-header mb-5">
              <h1>What is the Sedaia Rig Interface?</h1>
            </div>
            <p>
              The Rig Interface extension is an API extension which provides utilities for working with and creating new and using Python based rig interfaces such as those found in use by <a href="/rig/sakura-character-rig" class="link">my own SACR project</a>, <a href="https://www.youtube.com/watch?v=XZZUk8BqVOE" class="link" target="_blank">Endertainer's MCS2 rig</a>, <a href="https://www.youtube.com/watch?v=8mnU203_S_s" class="link" target="_blank">Timy's Character Rig V7</a>, and several other advanced rigs. This addon is created in Blender's Python API and included operators include:
            </p>
            <ul class="list-disc ml-5 my-5">
              <li>Image Management Operators</li>
              <li>Rename Rig Operator</li>
              <li>Skin Downloading Utility</li>
              <li>An open file Operator</li>
            </ul>
            <p>
              This extension is very much an ongoing project, and will continue to get new features alongside releases of different rigs by Sakura, namely the <a href="/rig/sakura-character-rig">Advanced Character Rig</a>, of which this extension is packaged with the UI's for.
            </p>
            <h2 class="my-5">What's the plan for the future?</h2>
            <p>As mentioned, this project is ongoing, and has no end in sight. Eventually I want to integrate the ability to easily add UI scripts as well as many more utilities useful for Minecraft based creations within Blender. A portion of that goal has already been realized, as it is extremely easy to add existing, already built UI's into the addon as tested with <a href="https://www.youtube.com/@AceTheBirb/videos" target="_blank" class="link">Ace The Bird's</a> Elgania Rig prototype.</p>
          </div>

          <hr />

          <div class="sacr-area builds">
            <div class="sacr-downloads">
              <div class="branch stable">
                <div class="dwn-img-contain">
                  <img src={stable.logo} />
                </div>
                <p class="description">{stable.description}</p>

                <Show when={stable.styles.length > 1}>
                  <div class="version" id="versionStable">
                    <For
                      each={stable.styles}
                      fallback={<option>Loading...</option>}
                    >
                      {(style, i) => (
                        <div class="build-tab" onclick={[updateBuild, [stable.branch, style.id, style.label]]} id={style.id}>{style.label}
                        </div>
                      )}
                    </For>
                  </div>
                </Show>
                <hr />
                <div class="dwn-btn-contain">
                  <a class="btn"
                    target="_blank"
                    href={
                      stable.blender_ext
                    }
                  >
                    Install from Blender Extensions
                  </a>

                  <a class="btn"
                    target="_blank"
                    href={
                      `${stable.github}/${downloadPath}${stableInfo[stableIndex()].git_tag}/${stableInfo[stableIndex()].fileName}`
                    }
                  >
                    Mirror: {stable.version}{stableInfo[stableIndex()].btn_label}
                  </a>

                  <div class="rig-info flex gap-2">
                    <div class="rig-info-item">
                      <a class="link" href={stable.github + tagPath + stable.version}
                        target="_blank"
                      >
                        Source
                      </a>
                    </div>
                    |
                    <div class="rig-info-item">{stableInfo[stableIndex()].size}</div>
                    |
                    <div class="rig-info-item">{stableInfo[stableIndex()].date}</div>
                    |
                    <div class="rig-info-item">{stableInfo[stableIndex()].license}</div>
                  </div>

                  <Show when={stableInfo[stableIndex()].notes != null}>
                    <div class="rig-notes mb-3">
                      {stableInfo[stableIndex()].notes}
                    </div>
                  </Show>
                </div>
              </div>
              <Show when={dev.enabled}>
                <div class="branch dev">
                  <div class="dwn-img-contain">
                    <img src={dev.logo} />
                  </div>
                  <p class="description">{dev.description}</p>

                  <Show when={dev.styles.length > 1}>
                    <div class="version" id="versionDev">
                      <For
                        each={dev.styles}
                        fallback={<option>Loading...</option>}
                      >
                        {(style, i) => (
                          <div class="build-tab" onclick={[updateBuild, [dev.branch, style.id, style.label]]} id={style.id}>{style.label}
                          </div>
                        )}
                      </For>
                    </div>
                  </Show>
                  <hr />
                  <div class="dwn-btn-contain">
                    <a
                      class="btn"
                      target="_blank"
                      href={
                        stable.github +
                        downloadPath +
                        stable.version +
                        stableInfo[devIndex()].fileName
                      }
                    >
                      Download {dev.version}{stableInfo[devIndex()].btn_label}
                    </a>
                    <Show when={stableInfo[devIndex()].notes != null}>
                      <div class="rig-notes mb-3">
                        {devInfo[devIndex()].notes}
                      </div>
                    </Show>
                    <div class="rig-info flex gap-2">
                      <div class="rig-info-item">
                        <a
                          class="link"
                          href={dev.github + tagPath + dev.version}
                          target="_blank"
                        >
                          Source
                        </a>
                      </div>
                      |
                      <div class="rig-info-item">{devInfo[devIndex()].size}</div>
                      |
                      <div class="rig-info-item">{devInfo[devIndex()].date}</div>
                      |
                      <div class="rig-info-item">{devInfo[devIndex()].license}</div>
                    </div>
                  </div>
                </div>
              </Show>
            </div>
          </div>

          <hr />

          <div class="support-server sacr-area">
            <h2 class="text-xl">Discord Server</h2>
            <p>
              Any comments, questions, concerns, or just want to share your
              creations? Feel free to join my server and post to your heart's
              content!
            </p>
            <br />
            <div class="join-server">
              <a class="btn" href="https://discord.gg/Qk4pfbG7Pf" target="_blank">
                Join the Discord
              </a>
            </div>
          </div>

          <hr />

          <div class="rig-gui sacr-area">
            <h2 class="text-xl">SACR Rig</h2>
            <p>
              This UI works best on SACR Rigs, a lightweight, feature packed and versitile rig which allows for easy customization while being easy to run
            </p>
            <br />
            <div class="join-server">
              <a class="btn" href="/rig/sakura-character-rig">
                Download SACR
              </a>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
export default sacr;