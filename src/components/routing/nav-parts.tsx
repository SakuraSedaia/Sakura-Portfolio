import { createSignal, JSX, splitProps, createMemo, children } from "solid-js";
import Link from "./link";
import IconBundle from "~/components/graphics/icon-bundle";

interface NavRouterProps extends JSX.HTMLAttributes<HTMLDivElement> {
  children: JSX.Element;
  class?: string;
  heading?: string;
}

interface NavItemProps extends JSX.HTMLAttributes<HTMLDivElement> {
  children: JSX.Element;
  class?: string;
  external?: boolean;
  path: string;
  emboss?: boolean;
}

export function NavRouter(props: NavRouterProps) {
  const [local, others] = splitProps(props, ["children", "class", "heading"]);
  return (
    <div class={local.class} {...others}>
      {local.children}
    </div>
  );
}

export function NavItem(props: NavItemProps) {
  const [local] = splitProps(props, [
    "children",
    "class",
    "external",
    "path",
    "emboss",
  ]);
  return (
    <div class={local.class}>
      <Link path={local.path} external={local.external} emboss={local.emboss}>
        {local.children}
      </Link>
    </div>
  );
}

interface NavSubRouterProps {
  children: JSX.Element;
  class?: string;
  title?: string;
}

export function NavSubRouter(props: NavSubRouterProps) {
  const [subNavOpen, setSubNavOpen] = createSignal(false);
  const itemHeight = 2.5; // Matches $nav-item-height in SCSS

  const subNavHeight = createMemo(() => {
    if (!subNavOpen()) return 0;
    return children(() => props.children).toArray().length * itemHeight;
  });

  function toggleSubNav() {
    setSubNavOpen(!subNavOpen());
  }

  return (
    <li class={props.class}>
      <span onClick={toggleSubNav}>
        {props.title}{" "}
        <IconBundle name={"arrow-down"} class={subNavOpen() ? "open" : ""} />
      </span>
      <div
        class={`sub-nav-container`}
        style={{ height: `${subNavHeight()}rem` }}
      >
        <ul>{props.children}</ul>
      </div>
    </li>
  );
}
