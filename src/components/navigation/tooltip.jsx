
export default function Tooltip(props) {
	return (
		<div class={"tooltip-container"}>
			{props.children}
			<span class={"tooltip"}>
				{props.text}
			</span>
		</div>
	);
}
