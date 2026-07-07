import { JSX, splitProps } from "solid-js";
import Link from "./link";

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
