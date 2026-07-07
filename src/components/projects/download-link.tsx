import { createMemo, JSX } from "solid-js";

interface LinkProps {
  path: string;
  class?: string;
  children?: JSX.Element;
  disabled?: boolean;
}

export default function DownloadLink(props: LinkProps) {
  const downloadPath = createMemo(() => `/lib/${props.path}`);

  const fileName = createMemo(() => {
    if (!props.path) return undefined;
    const parts = props.path.split("/");
    return parts[parts.length - 1];
  });

  return (
    <a
      href={props.disabled ? "#" : downloadPath()}
      download={props.disabled ? undefined : fileName()}
      class={`${props.class || ""} ${props.disabled ? "disabled" : ""}`}
      onClick={(e) => {
        if (props.disabled) e.preventDefault();
      }}
    >
      {props.children || "Download"}
    </a>
  );
}
