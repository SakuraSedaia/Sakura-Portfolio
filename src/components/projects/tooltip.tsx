import { JSX } from "solid-js";

interface TooltipProps {
  text: string;
  children: JSX.Element;
}

export default function Tooltip(props: TooltipProps) {
  return (
    <div class={"tooltip-container"}>
      {props.children}
      <span class={"tooltip"}>{props.text}</span>
    </div>
  );
}
