import {
  children,
  createMemo,
  createSignal,
  JSX,
  Show,
  splitProps,
} from "solid-js";
import IconBundle from "~/components/graphics/icon-bundle";
import { Link } from "~/components/links";

interface NavRouterProps extends JSX.HTMLAttributes<HTMLUListElement> {
  children: JSX.Element;
  class?: string;
  heading?: string;
}

interface NavSubRouterProps extends JSX.HTMLAttributes<HTMLLIElement> {
  children: JSX.Element;
  class?: string;
  title?: string;
}

interface NavItemProps extends JSX.HTMLAttributes<HTMLLIElement> {
  children: JSX.Element;
  class?: string;
  path: string;
}

export function NavRouter(props: NavRouterProps) {
  const [local, others] = splitProps(props, ["children", "class", "heading"]);
  return (
    <>
      <Show when={props.heading !== undefined}>
        <h3>{props.heading}</h3>
      </Show>
      <nav>
        <ul class={local.class} {...others}>
          {local.children}
        </ul>
      </nav>
    </>
  );
}

export function NavSubRouter(props: NavSubRouterProps) {
  const [local, others] = splitProps(props, ["children", "class", "title"]);
  const [subNavOpen, setSubNavOpen] = createSignal(false);
  const itemHeight = 2.5; // Matches $nav-item-height in SCSS

  const subNavHeight = createMemo(() => {
    if (!subNavOpen()) return 0;
    return children(() => local.children).toArray().length * itemHeight;
  });

  function toggleSubNav() {
    setSubNavOpen(!subNavOpen());
  }

  return (
    <li class={local.class} {...others}>
      <span onClick={toggleSubNav}>
        {local.title}{" "}
        <IconBundle name={"arrow-down"} class={subNavOpen() ? "open" : ""} />
      </span>
      <div
        class={`sub-nav-container`}
        style={{ height: `${subNavHeight()}rem` }}
      >
        <ul>{local.children}</ul>
      </div>
    </li>
  );
}

export function NavItem(props: NavItemProps) {
  const [local] = splitProps(props, ["children", "class", "path"]);
  return (
    <li class={local.class}>
      <Link path={local.path}>{local.children}</Link>
    </li>
  );
}
