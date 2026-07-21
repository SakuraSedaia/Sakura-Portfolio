import { createMemo, JSX, Match, splitProps, Switch } from "solid-js";
import { A } from "@solidjs/router";
import { resolvePrefix } from "~/utils/url-prefixer";

interface LinkProps extends JSX.HTMLAttributes<HTMLLIElement> {
  children: JSX.Element;
  class?: string;
  external?: boolean;
  path: string;
  onClick?: () => void;
  emboss?: boolean;
}

export default function Link(props: LinkProps) {
  const [local, others] = splitProps(props, [
    "children",
    "class",
    "external",
    "path",
    "emboss",
  ]);

  const resolvedPath = createMemo(() => resolvePrefix(local.path));
  const isExternal = createMemo(
    () =>
      local.external === true ||
      resolvedPath().startsWith("http") ||
      resolvedPath().startsWith("//"),
  );
  const baseClass = createMemo(() => local.class?.trim());
  const linkClass = createMemo(() =>
    baseClass() ? `${baseClass()} link` : "link",
  );
  const buttonClass = createMemo(() =>
    baseClass() ? `${baseClass()} button` : "button",
  );

  return (
    <Switch
      fallback={
        <A
          href={resolvedPath()}
          end={true}
          class={linkClass()}
          {...(others as any)}
        >
          {local.children}
        </A>
      }
    >
      <Match when={local.emboss && isExternal()}>
        <a
          href={resolvedPath()}
          target={"_blank"}
          class={buttonClass()}
          rel={"noopener noreferrer"}
          {...(others as any)}
        >
          {local.children}
        </a>
      </Match>
      <Match when={local.emboss}>
        <A
          href={resolvedPath()}
          end={true}
          class={buttonClass()}
          {...(others as any)}
        >
          {local.children}
        </A>
      </Match>
      <Match when={isExternal()}>
        <a
          href={resolvedPath()}
          target={"_blank"}
          class={linkClass()}
          rel={"noopener noreferrer"}
          {...(others as any)}
        >
          {local.children}
        </a>
      </Match>
    </Switch>
  );
}
