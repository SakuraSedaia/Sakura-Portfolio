import Tooltip from "../navigation/tooltip.jsx";

export default function KnownIssueItem(props) {
	const issueNumber = props.issueLink.substring(props.issueLink.lastIndexOf("/") + 1);
	let isLinkDisabled = false;
	if (props.issueLink == "disabled") {
		isLinkDisabled = true;
	}
	return (
		<li class={"known-issue-item"}>
			<h3>
				{isLinkDisabled ? (
					<span>{props.title}</span>
					) : (
					<Tooltip text={`Github Issue #${issueNumber}`}>
						
							<a href={props.issueLink} class={"link"} target={"_blank"}>
								Issue #{issueNumber} - {props.title}
							</a>
					</Tooltip>
				)}
			</h3>
			<h4>Confirmed on {props.confirmed}</h4>
			<div>
				{props.children}
			</div>
			<hr />
		</li>
	)
}