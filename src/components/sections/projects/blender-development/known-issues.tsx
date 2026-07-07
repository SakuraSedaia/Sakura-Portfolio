import { ErrorBoundary, Suspense } from "solid-js";
import { NoHydration } from "solid-js/web";
import KnownIssueItem from "~/components/projects/known-issue-item";
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
                Currently there are no known issues impacting user experience,
                though there are guaranteed to be more as the plugin is tested
                and stressed. Issues listed here are confirmed, verified, and
                are either planned or are currently being worked on.
              </p>
              <div class={"known-issues-list"}>
                <ul>
                  <KnownIssueItem
                    title={"No Known issues as this time."}
                    confirmed={"MM-DD-YYYY"}
                    issueLink={"disabled"}
                  >
                    {/*
										The issueLink attribute can either be a proper link or "disabled". If set to disabled, the tooltip and link are disabled, and no longer can be clicked.
										*/}
                    <p>
                      No known issues as of now, this page will be updated as
                      more issues are discovered and logged.
                    </p>
                  </KnownIssueItem>
                </ul>
              </div>
            </div>
          </Suspense>
        </section>
      </ErrorBoundary>
    </NoHydration>
  );
}
