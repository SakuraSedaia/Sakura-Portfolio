import Tooltip from "../navigation/tooltip.jsx";

export default function KnownIssueItem(props) {
	const issueNumber = props.issueLink.substring(props.issueLink.lastIndexOf("/") + 1);
	return (
		<li class={"known-issue-item"}>
			<h3>
				<Tooltip text={`Github Issue #${issueNumber}`}>
					<a href={props.issueLink} class={"link"} target={"_blank"}>
						{props.title}
					</a>
				</Tooltip>
			</h3>
			<h4>Confirmed on {props.confirmed}</h4>
			<div>
				{props.children}
			</div>
			<hr />
		</li>
	)
}