import Header from "~/components/Header";
import "./contact.css"
function contact() {
    function copyEmailToClip() {
        const email = "sakura@sakura-sedaia.com";
        navigator.clipboard.writeText(email);

        window.alert("Copied Email to Clipboard");
    }
    return (
        <div class="contact">
            <Header title="Contact" background="rigs" />
            <div class="contact-container">

                <div class="contact-content">
                    <p>You can find me in my <a href="https://discord.gg/Qk4pfbG7Pf" target="_blank">Discord Server</a> or for more professional communications, you can email me at <a class="contact-link" onclick={copyEmailToClip}>
                        sakusedaia@outlook.com
                    </a>
                    </p>
                    <p>Mailing address is not shown for privacy and security reasons, and will be provided when absolutely required for business purposes.</p>
                </div>
            </div>
        </div>
    );
}
export default contact;