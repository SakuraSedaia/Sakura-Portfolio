import "./css/sr_gui.css"

export default function SRGUI() {
  return (
    <div class="body-container">
      <div class="sr-gui-container body-content">
        <div class="sr-gui-about py-10"></div>
        <div class="section-header">
          <div class="section-header">
            <h1>Sakura's Rig GUI</h1>
          </div>
        </div>
        <div class="content-1">
            <h2>What is the Rig GUI?</h2>
            <p>The Rig GUI developed by Sakura is a collection of UI Scripts used almost exclusively on Sakura's rigs, although it is possible to add configs to other rigs by mimicking SACR's Custom Property Structure.</p>
            
            <p>The Rig GUI was first made exclusively for SACR R7.2 as a quality of life upgrade so that the rig settings can be access from any bone.</p>

            <div class="download-gui">
              <h2>Where do I it?</h2>
              <p>The GUI is available officially through <a href="https://extensions.blender.org/add-ons/sakura-rig-gui/" target="_blank" class="link">Blender Extensions</a> or you can download direct from here</p>
              <a class="btn" href="https://github.com/SakuraSedaia/Sakura-Rig-GUI/releases/download/SR_GUI_V1.1.0/Sakura_Rig_GUI_V1_1_0.zip" target="_blank">Download Rig GUI Addon</a>
            </div>
        </div>
      </div>
    </div>
  );
}