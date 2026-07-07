import { JSX } from "solid-js";

interface TooltipProps {
  children: JSX.Element;
  text: string;
}

export default function Tooltip({
    children,
    text,
  }: TooltipProps) {
	return (
    <div class={"tooltip-container"}>
      <span class={"tooltip"}>{text}</span>
      {children}
    </div>
  );
}
