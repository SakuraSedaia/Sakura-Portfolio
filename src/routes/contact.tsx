import "./contact.css";

export default function Contact() {
  function copyEmailToClip() {
    const email = "sakura@sakura-sedaia.com";
    navigator.clipboard.writeText(email);

    window.alert('Copied Email to Clipboard')
  }
  return (
    <div class="body-container">
      <div class="about-content body-content">
        <div class="section-header">
        <div class="section-header"><h1>How to Contact Me</h1></div>
        </div>
        <p>
          I have a few different ways of getting in touch, the two best ways are
          through my{" "}
          <a class="contact-link" href="https://discord.gg/Qk4pfbG7Pf" target="_blank">
            Asset Support Server
          </a>{" "}
          or by emailing me at{" "}
          <a class="contact-link" onclick={copyEmailToClip}>
            sakusedaia@outlook.com
          </a>
        </p>
      </div>
    </div>
  );
}
