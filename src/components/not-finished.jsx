import { NoHydration } from "solid-js/web";

export default function NotFinished() {
  return (
		<NoHydration >
			<div class="not-finished">
				<h1>Work in Progress</h1>
				<p>This section is currently under development.</p>
			</div>
		</NoHydration>
  );
}
