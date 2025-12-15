import Header from "~/components/Header";
import rigIndex from "./sacr_index.json";
import "./sakura-character-rig.css";
import { For, Show, createSignal } from "solid-js";
import { NoHydration } from "solid-js/web";
function sacr() {
  const stable = rigIndex.stable[0];
  const stableInfo = stable.styles;
  const dev = rigIndex.dev[0];
  const devInfo = dev.styles;


  // Github Info
  const downloadPath = "releases/download/";
  const tagPath = "releases/tag/";

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

  function updateStyleDev() {
    var selectVal = document.getElementById("devSelect").value;
    const newStyle = setDevStyle(() => selectVal);
  }

  return (
    <div>
      <NoHydration>
        <Header title="Sakura Minecraft Character Rig" background="sacr" />
      </NoHydration>


      <div class="sacr-content">
        <div class="sacr-about">
          <div class="sacr-area breakdown">
            <div class="section-header inline-block">
              <h1>What is SACR</h1>
            </div>
            <p class="indent-8 py-4">
              SACR is a rig developed by Sakura for use in Blender in the
              creation of Minecraft Character based renders with a huge emphasis
              on a comprehensive feature package that is light on the system and
              easy to use. The Rig has evolved from a simple, bare-bones rig to a lightweight and versatile base rig with the tools to modify and customize the rig however the user wants.
            </p>
            <p class="indent-8 pb-5">
              Revision 7 is the latest stable iteration of SACR, with 7.4 being the most stable SACR has ever been. One of the biggest features that I have developed for the rig has been the new Python based <a href="/addon/sakura-rig-interface">Rig Interface</a>, which was first developed during the development of Revision 7.3
            </p>

          </div>

          <hr />

          <div class="sacr-area rigs">
            <div class="sacr-downloads">
              <div class="branch stable">
                <div class="dwn-img-contain">
                  <img src={stable.logo} />
                </div>
                <p class="desc">{stable.description}</p>

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

                <div class="dwn-btn-contain">
                  <a class="btn dwn-sacr"
                    target="_blank"
                    href={
                      `${stable.github}${downloadPath}${stable.version}/${stableInfo[stableIndex()].fileName}`
                    }
                  >
                    Download {stable.version} {stableInfo[stableIndex()].btn_label}
                  </a>
                  <div class="rig-info flex gap-2">
                    <div class="rig-info-item">
                      <a class="link" href={`${stable.github}${tagPath}${stable.version}`}
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

                    <hr />
                    <div class="rig-notes mb-3">
                      {stableInfo[stableIndex()].notes}
                    </div>
                  </Show>
                </div>
              </div>

              <Show when={dev.enabled}>
                <div class="branch dev">
                  <div class="dwn-img-contain"><img src={dev.logo} /></div>
                  <p class="desc">{dev.description}</p>
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
                  <div class="dwn-btn-contain">
                    <a class="btn dwn-sacr"
                      target="_blank"
                      href={
                        `${dev.github}${downloadPath}${devInfo[devIndex()].git_tag}/${devInfo[devIndex()].fileName}`
                      }
                    >
                      Download {dev.version}{devInfo[devIndex()].btn_label}
                    </a>
                    <div class="rig-info flex gap-2">
                      <div class="rig-info-item">
                        <a class="link"
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

                    <Show when={devInfo[devIndex()].notes != null}>
                      <hr />
                      <div class="rig-notes mb-3">
                        {devInfo[devIndex()].notes}
                      </div>
                    </Show>
                  </div>
                </div>
              </Show>

            </div>
          </div>

          <hr />

          <div class="sacr-area discord">
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

          <div class="sacr-area rig-gui">
            <h2 class="text-xl">Sedaia Rig Interface</h2>
            <p>
              A new Blender extension developed to be the new front-end for SACR preferences, as well as be a way for users to make their UI's with ease.
            </p>
            <br />
            <div class="join-server">
              <a class="btn" href="/addon/sakura-rig-interface">
                See the Rig UI
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default sacr;