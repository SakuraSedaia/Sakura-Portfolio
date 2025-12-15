import Header from "~/components/Header";
import "./addons.css";

function addons() {
    return (
        <div>
            <Header title="Extensions/Plugins" background="extensions" />

            <div class="body-content rigs">
                <div class="about-section">
                    <p class="about-content">Here is a catalog of different Addons, Extensions and Plugins by Sakura Sedaia, each each one is made for the latest release of Blender at the time of their completion, and will have the recommended version of blender listed on their page. All Extensions on this page require at least Blender 4.2 to function properly, attempting to install </p>
                </div>

                <div class="cards">
                    <div class="rig-card">
                        <div class="card-header">
                            <img src="/images/rig-headers/rig-interface/rig-interface-3.png" style="width: 100%; max-width: 540px; margin: 0 auto;" />
                        </div>
                        <p>Sakura's Rig Interfaces is a container addon designed to make development of UI scripts even easier by adding a dynamic loading script along with global utilities which make having duplicate classes a rarer occurance. This Branch is the Development branch, </p>
                        <h2>Current Release: V3</h2>
                        <p>V3 see's another architecture change, making it much easier to add more Rig Interfaces to the UI with an Autoload script and dynamic loading for other modules, as well as the addition of proper User Preferences and working utilities</p>
                        <div class="btn-center"><a href="/addon/sakura-rig-interface" class="btn">Open the Rig Interface page</a></div>
                        <div class="btn-center"><a href="https://discord.com/invite/Qk4pfbG7Pf" class="btn">Join the Support Discord</a></div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default addons;