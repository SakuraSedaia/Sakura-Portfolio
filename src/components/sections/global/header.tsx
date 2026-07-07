import { children as resolveChildren, JSX, Show } from "solid-js";
import Link from "~/components/routing/link";
import IconBundle from "~/components/graphics/icon-bundle";

const DEFAULT_NAME = "Sedaia Designs";
const DEFAULT_IMAGE = "/images/headers/about.avif";

interface HeaderProps {
  children?: JSX.Element;
  class?: string;
  title: JSX.Element | string;
  description?: JSX.Element | string;
  image?: string;
}

export default function Header({
  children,
  title = DEFAULT_NAME,
  description,
  image = DEFAULT_IMAGE,
  class: className,
}: HeaderProps) {
  const resolvedChildren = resolveChildren(() => children);

  return (
    <header
      class={"header__container " + className}
      style={{ "background-image": `url(${image})` }}
    >
      <div class={"header__content"}>
        <h1
          style={{
            "margin-bottom": resolvedChildren.toArray().length ? "initial" : 0,
          }}
        >
          {title}
        </h1>
        <Show when={description != undefined}>{description}</Show>
        <Show when={resolvedChildren.toArray().length > 0}>
          <div class={"header__children"}>{resolvedChildren()}</div>
        </Show>

        <div class={"header__social-links"}>
          <Link path={"https://youtube.com/c/SakuraSedaia"}>
            <IconBundle name={"youtube"} />{" "}
            <span class={"index__header-link-text"}>Youtube</span>
          </Link>
          <Link path={"https://codeberg.org/SakuraSedaia"}>
            <IconBundle name={"codeberg"} />{" "}
            <span class={"index__header-link-text"}>Codeberg</span>
          </Link>
          <Link path={"https://github.com/SakuraSedaia"}>
            <IconBundle name={"github"} />{" "}
            <span class={"index__header-link-text"}>Github</span>
          </Link>
        </div>
      </div>
      <div class={"header__fade"} />
    </header>
  );
}
