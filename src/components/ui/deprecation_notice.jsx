import { A } from "@solidjs/router";

export default function DeprecationWarning() {
	return (
		<div className="deprecation-warning">
			<p>Following R7.4.1, SACR will no longer be released as an individual asset. From here on out, SACR will be bundled exclusively with the Sedaia Rig Interface starting with SR_GUI V4.</p>
		</div>
	);
}