import Header from "~/components/Header";
import "./rigs.css";
function rigs() {

    return (
        <div>
            <Header title="Rigs" background="rigs" />

            <div class="body-content rigs">
                <div class="about-section">
                    <p class="about-content">Here is a catalog of different rig offereings by Sakura Sedaia, each each one is made for the latest release of Blender at the time of their completion, and will have the recommended version of blender listed on their page. All addons on this page require at least Blender 4.0 to function properly, loading these rigs in earlier versions will break them.</p>
                </div>

                <div class="cards">
                    <div class="rig-card">
                        <div class="card-header" style="text-align: center;">
                            <img src="/images/rig-headers/SACR/R7.4 Full.png" style="max-width: 540px; display: inline-block;" />
                        </div>
                        <p>SACR is the flagship rig developed by Sakura, over the course of 6 years and 7 Major Revisions, the rig has been refined time after time to become better, more optimized, complete and more feature packed with each release.</p>
                        <h2>Current Release: 7.4.0</h2>
                        <p>Revision 7.4.0, is the current Version of SACR, officially updating the rig to Blender 5.0 and adding more hooks for the UI script to grab properties, and with this version a new UI script was built from the ground up &#40;Check Addons for more info&#41;</p>
                        <div class="btn-center"><a href="/rig/sakura-character-rig" class="btn">Open the SACR page</a></div>
                        <div class="btn-center"><a href="https://discord.com/invite/Qk4pfbG7Pf" class="btn">Join the Support Discord</a></div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default rigs;