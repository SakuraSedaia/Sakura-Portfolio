import "./css/addons.css";

export default function Addons() {
  return (
    <div class="sr-gui-content body-container">
      <div class="sr-gui-about py-10">
        <div class="section-header mt-6">
          <h1 class="mb-0">Sakura's Rig GUI</h1>
        </div>
        <div class="sacr-info mx-5 flex gap-5 py-10">
          <div class="rig-header">
            <h2 class="text-xl">Mutli-Rig Addon</h2>
            <p>
              Sakura's Rig GUI is a new addon developed by Sakura to ease the
              distribution and use of various rigs, ui's, and assets created and
              distributed by Sakura. The UI's are custom built for each rig,
              meaning ultimate compatability making the Addon Seamless to use
            </p>
            <div class="sacr-downloads flex gap-5">
              <div class="branch stable">
                <img src="images/rig-headers/Rig GUI/Rig_GUI_V2.png"/>
                <div>
                  <a
                    class="btn"
                    target="_blank"
                    href="https://extensions.blender.org/add-ons/sakura-rig-gui/"
                  >
                    Download via Blender Extensions
                  </a>
                  <div class="rig-info flex gap-2">
                    <div>
                      <a
                        class="link"
                        href="https://extensions.blender.org/add-ons/sakura-rig-gui/"
                        target="_blank"
                      >
                        Github
                      </a>
                    </div>
                    <div class="vseparator"></div>
                    <div>October 2025</div>
                  </div>
                </div>
              </div>
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
              <h2 class="text-xl">SACR</h2>
              <p>
                This GUI is designed for use with rigs made by Sakura, currently the only supported rigs is SACR, which is available below
              </p>
              <div class="join-server">
                <a class="btn" href="/sakura-character-rig">
                  Download SACR
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
