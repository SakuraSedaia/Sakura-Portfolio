import IconBundle from "~/components/graphics/icon-bundle";
import { Link } from "~/components/routing/link";

export default function ContactMe() {
  return (
    <section class={"contact__me"}>
      <h2 id={"contactMethods"}>Contact Methods</h2>
      <p class={"contact__me__intro"}>
        Reach out directly through email or Discord.
      </p>
      <ul class={"contact__me__methods"}>
        <li class={"contact__me__method"}>
          <IconBundle name={"envelope"} />
          <span class={"contact__me__label"}>Email:</span>
          <a href={"mailto:sakusedaia@outlook.com"}>sakusedaia@outlook.com</a>
        </li>
        <li class={"contact__me__method"}>
          <IconBundle name={"discord"} />
          <span class={"contact__me__label"}>Discord:</span>
          <Link path={"https://discord.com/invite/Qk4pfbG7Pf"}>
            discord.com/invite/Qk4pfbG7Pf
          </Link>
        </li>
      </ul>
    </section>
  );
}
