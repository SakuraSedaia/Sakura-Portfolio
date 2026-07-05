import { children as resolveChildren, JSX, Show } from "solid-js";

const DEFAULT_NAME = "Sedaia Designs";
const DEFAULT_IMAGE = "/images/minecraft-renders/hylian_sakura_in_rito.png";

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
    <section
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
      </div>
      <div class={"header__fade"} />
    </section>
  );
}
