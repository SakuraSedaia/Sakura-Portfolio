import { A } from "@solidjs/router";

export default function DeprecationNotice(props) {
	return (
		<div class="deprecation-notice">
			<h1>Deprecation Notice:</h1>
			<p>{props.message}</p>
		</div>
	);
}
