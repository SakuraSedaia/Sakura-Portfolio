import "./css/sacr.css";
import rigIndex from "./json/RigIndex.json";
import { For, Show, createSignal } from "solid-js";

export default function SACR() {
  const stable = rigIndex.stable[0];
  const stableInfo = stable.styles;
  const dev = rigIndex.dev[0];
  const devInfo = dev.styles;

  // Github Info
  const downloadPath = "releases/download/";
  const tagPath = "releases/tag/";

  // Signals
  const [stableStyle, setStableStyle] = createSignal("Base");
  const [stableIndex, setStableIndex] = createSignal(0);
  const [devStyle, setDevStyle] = createSignal("None");
  const [devIndex, setDevIndex] = createSignal(0);

  function updateStyleStable() {
    var selectVal = document.getElementById("stableSelect").value;
    const newStyle = setStableStyle(() => selectVal);
    for (let i = 0; i < stable.styles.length; i++) {
      if (selectVal == stable.styles[i].label) {
        const updateIndex = setStableIndex(() => i);
      }
    }
  }
  function updateStyleDev() {
    var selectVal = document.getElementById("devSelect").value;
    const newStyle = setDevStyle(() => selectVal);
    for (let i = 0; i < stable.styles.length; i++) {
      if (selectVal == dev.styles[i].label) {
        const updateIndex = setDevIndex(() => i);
      }
    }
  }

  return (
    <div class="sacr-content body-container">
      <div class="sacr-about py-10">
        <div class="section-header mt-6">
          <h1 class="mb-0">Sakura's Advanced Character Rig</h1>
        </div>
        <div class="sacr-info mx-5 flex gap-5 py-10">
          <div class="rig-header">
            <h2 class="text-xl">
              A Highly Customizable and Lightweight Rig for Blender 4.5
            </h2>
            <p>
              SACR is a rig developed by Sakura for use in Blender in the
              creation of Minecraft Character based renders with a huge emphasis
              on a comprehensive feature package that is light on the system and
              easy to use.
            </p>

            <div class="sacr-downloads flex gap-5">
              <div class="branch stable">
                <img src={stable.logo} />
                Select Style:
                <select
                  class="border-b-2"
                  id="stableSelect"
                  onchange={updateStyleStable}
                  value={stableStyle()}
                >
                  <For
                    each={stable.styles}
                    fallback={<option>Loading...</option>}
                  >
                    {(style, i) => (
                      <option value={style.label}>{style.label}</option>
                    )}
                  </For>
                </select>
                <div>
                  <a
                    class="btn"
                    target="_blank"
                    href={
                      stable.github +
                      downloadPath +
                      stable.version +
                      stableInfo[stableIndex()].fileName
                    }
                  >
                    Download {stable.version} {stableInfo[stableIndex()].label}
                  </a>
                  <div class="rig-info flex gap-2">
                    <div>
                      <a
                        class="link"
                        href={stable.github + tagPath + stable.version}
                        target="_blank"
                      >
                        Github
                      </a>
                    </div>
                    <div data-center>{stableInfo[stableIndex()].size}</div>
                    <div>{stableInfo[stableIndex()].date}</div>
                  </div>
                </div>
              </div>

              <Show when={dev.enabled}>
                <div class="branch dev">
                  <img src={dev.logo} />
                  Select Style:
                  <select
                    class="border-b-2"
                    id="devSelect"
                    onchange={updateStyleDev}
                    value={devStyle()}
                  >
                    <For
                      each={dev.styles}
                      fallback={<option>Loading...</option>}
                    >
                      {(style, i) => (
                        <option value={style.label}>{style.label}</option>
                      )}
                    </For>
                  </select>
                  <div>
                    <a
                      class="btn"
                      target="_blank"
                      href={
                        dev.github +
                        downloadPath +
                        dev.version +
                        devInfo[devIndex()].fileName
                      }
                    >
                      Download {dev.version} {devInfo[devIndex()].label}
                    </a>
                    <div class="rig-info flex gap-2">
                      <div>
                        <a
                          class="link"
                          href={dev.github + tagPath + dev.version}
                          target="_blank"
                        >
                          Github
                        </a>
                      </div>
                      <div data-center>{devInfo[devIndex()].size}</div>
                      <div>{devInfo[devIndex()].date}</div>
                    </div>
                  </div>
                </div>
              </Show>
            </div>
          </div>
          <div class="extras">
            <div class="support-server extras-section">
              <h2 class="text-xl">Discord Server</h2>
              <p>
                Any comments, questions, concerns, or just want to share your
                creations? Feel free to join my server and post to your heart's
                content!
              </p>
              <div class="join-server">
                <div class="btn">Join the Discord!</div>
              </div>
            </div>
            <div class="separator block h-5"></div>
            <div class="rig-gui extras-section">
              <h2 class="text-xl">Rig GUI</h2>
              <p>
                A new GUI made bespoke for SACR has been made and is maintained
                alongside the rig, with future updates to include more rigs and
                even some utilities for QoL and managing Rig Instances
              </p>
              <div class="join-server">
                <a class="btn" href="/sakura-rig-gui">
                  See the Rig GUI
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
