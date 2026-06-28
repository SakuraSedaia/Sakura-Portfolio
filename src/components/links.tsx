import { JSX, Match, splitProps, Switch } from "solid-js";
import { A } from "@solidjs/router";
import { resolvePrefix } from "~/utils/url-prefixer";

interface LinkProps extends JSX.HTMLAttributes<HTMLLIElement> {
  children: JSX.Element;
  class?: string;
  path: string;
  onClick?: () => void;
  emboss?: boolean;
}

export function Link(props: LinkProps) {
  const [local, others] = splitProps(props, ["children", "class", "path"]);

  const resolvedPath = resolvePrefix(local.path);
  const isExternal =
    resolvedPath.startsWith("http") || resolvedPath.startsWith("//");

  return (
    <Switch
      fallback={
        <A href={resolvedPath} end={true} {...(others as any)}>
          {local.children}
        </A>
      }
    >
      <Match when={isExternal}>
        <a
          href={resolvedPath}
          target={"_blank"}
          class={local.class}
          rel={"noopener noreferrer"}
          {...(others as any)}
        >
          {local.children}
        </a>
      </Match>
      <Match when={props.emboss}>
        <button
          href={resolvedPath}
          target={"_blank"}
          class={local.class}
          rel={"noopener noreferrer"}
          {...(others as any)}
        >
          {local.children}
        </button>
      </Match>
    </Switch>
  );
}