import Tooltip from "./tooltip";
import { createMemo, JSX, Show } from "solid-js";

interface KnownIssueItemProps {
  issueLink: string;
  title: string;
  confirmed: string;
  children?: JSX.Element;
}

export default function KnownIssueItem(props: KnownIssueItemProps) {
  const isLinkDisabled = createMemo(() => props.issueLink === "disabled");
  const issueNumber = createMemo(() =>
    props.issueLink.substring(props.issueLink.lastIndexOf("/") + 1),
  );

  return (
    <li class={"known-issue-item"}>
      <h3>
        <Show when={!isLinkDisabled()} fallback={<span>{props.title}</span>}>
          <Tooltip text={`Codeberg Issue #${issueNumber()}`}>
            <a href={props.issueLink} class={"link"} target={"_blank"}>
              Issue #{issueNumber()} - {props.title}
            </a>
          </Tooltip>
        </Show>
      </h3>
      <h4>Confirmed on {props.confirmed}</h4>
      <div>{props.children}</div>
      <hr />
    </li>
  );
}
