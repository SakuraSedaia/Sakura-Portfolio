import { NoHydration } from "solid-js/web";
import Link from "~/components/routing/link";
import IconBundle from "~/components/graphics/icon-bundle";

export default function GetInTouch() {
  return (
    <NoHydration>
      <section class={"index__get-in-touch"}>
        <h2>Get in touch</h2>
        <p>
          Like what you see and want to work with me? Feel free to shoot me an
          email or message me on Discord!
        </p>
        <div class={"index__get-in-touch__actions"}>
          <Link path="mailto:email@sakura-sedaia.com" emboss={true}>
            <IconBundle name={"envelope"} /> Email
          </Link>
          <Link
            path={"https://discord.com/users/705154478382252053"}
            emboss={true}
          >
            <IconBundle name={"discord"} /> Direct Message
          </Link>
          <Link path={"https://discord.com/invite/Qk4pfbG7Pf"} emboss={true}>
            <IconBundle name={"discord"} /> Server
          </Link>
        </div>
      </section>
    </NoHydration>
  );
}
