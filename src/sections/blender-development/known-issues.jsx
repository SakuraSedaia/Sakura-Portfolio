import {ErrorBoundary, Suspense} from "solid-js";
import {NoHydration} from "solid-js/web";
import KnownIssueItem from "~/components/ui/known-issue-item.jsx";
export default function BlenderDevKnownIssues() {
	return (
		<NoHydration>
			<ErrorBoundary>
				<section id={"known-issues"}>
					<Suspense fallback={<div>Loading...</div>}>
						<div class={"standard-container"}>
							<div class={"heading"}>
								<h2>Known Issues</h2>
							</div>
							<p>
								Currently there are two big issues that are currently impacting user experience, though there are
								guaranteed to be more as the plugin is tested and stressed. Issues listed here are confirmed,
								verified, and are either planned or are currently being worked on.
							</p>
							<div class={"known-issues-list"}>
								<ul>
									<KnownIssueItem
										title={"Softlock in Project Wizard API"}
										confirmed={"03-08-2026"}
										issueLink={"https://github.com/SakuraSedaia/blender_pycharm/issues/1"}
									>
										<p>
											It is possible to softlock the New Project Wizard by performing these steps.
										</p>
										<ol>
											<li>Start new Project Wizard (<code>File > New Project</code>)</li>
											<li>Select the Blender Extension template</li>
											<li>Toggle one of the 5 permission options (Files, Network, etc)</li>
											<li>While leaving the Permission Reason blank, click Create</li>
										</ol>
										<p>
											This issue is a big one which impacts user experience, as it prevents the smooth creation of new
											projects. The fix for this issue is a complex one, as the logic for the New Project Wizard needs
											to be rewritten to facilitate more efficient and robust field validation.
										</p>
									</KnownIssueItem>
									<KnownIssueItem
										title={"Cannot Download Blender Versions through MBVS"}
										confirmed={"03-08-2026"}
										issueLink={"https://github.com/SakuraSedaia/blender_pycharm/issues/2"}
									>
										<p>
											Users are unable to download Blender versions through the MBVS, which is a critical issue as it
											prevents users from accessing sandboxed installations separate from their main install. Currently,
											the issue has no fix as I have not had time to diagnose and resolve the issue.
										</p>
									</KnownIssueItem>
								</ul>
							</div>
						</div>
					</Suspense>
				</section>
			</ErrorBoundary>
		</NoHydration>
)}