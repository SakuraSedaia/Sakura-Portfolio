import { cache, createAsync, useParams, A } from "@solidjs/router";
import { Show, Suspense, ErrorBoundary, For, createMemo } from "solid-js";
import { SolidMarkdown } from "solid-markdown";
import Metadata from "~/components/meta/metadata";
import Header from "~/components/sections/global/header";
import SideNavWrapper from "~/components/wrappers/side-nav-wrapper";
import Routes from "~/data/json/routes.json";

interface SubSection {
  title: string;
  content: string;
}

interface ChangelogSection {
  title: string;
  id: string;
  subSections: SubSection[];
  content: string;
}

interface ChangelogResult {
  content: string | null;
  requestedName: string;
}

const MarkdownLink = (props: any) => (
  <Show
    when={props.href?.startsWith("/") && !props.href?.startsWith("//")}
    fallback={<a {...props} class={"link"} />}
  >
    <A {...props} class={"link"} />
  </Show>
);

const changelogs = import.meta.glob("../../../markdown/changelogs/**/*.md", {
  query: "?raw",
  import: "default",
});

const getChangelog = cache(
  async (item: string | undefined): Promise<ChangelogResult> => {
    if (!item) return { content: null, requestedName: "Changelog" };

    try {
      const decodedItem = decodeURIComponent(item);
      const filename = `${decodedItem}.md`.toLowerCase();
      const keys = Object.keys(changelogs);

      const match = keys.find((key) => {
        const normalizedKey = key.toLowerCase().replace(/\\/g, "/");
        return normalizedKey.endsWith(`/${filename}`);
      });

      if (match) {
        const content = await changelogs[match]();
        if (typeof content === "string") {
          return { content, requestedName: decodedItem };
        }
        if (content && typeof content === "object" && "default" in content) {
          const defaultContent = (content as { default?: unknown }).default;
          return {
            content:
              typeof defaultContent === "string"
                ? defaultContent
                : (JSON.stringify(defaultContent) ?? ""),
            requestedName: decodedItem,
          };
        }
        return { content: String(content), requestedName: decodedItem };
      }

      return { content: null, requestedName: decodedItem };
    } catch (error: unknown) {
      console.error("Failed to load changelog:", error);
      throw error;
    }
  },
  "changelogs",
);

export default function Changelog() {
  const params = useParams();
  const content = createAsync(() => getChangelog(params.changelog));

  const parseChangelog = (content: string): ChangelogSection[] => {
    if (!content) return [];
    const lines = content.split("\n");
    const sections: ChangelogSection[] = [];
    let currentSection: ChangelogSection | null = null;

    lines.forEach((line) => {
      if (line.startsWith("## ")) {
        if (currentSection) {
          sections.push(currentSection);
        }
        currentSection = {
          title: line.replace("## ", "").trim(),
          id: line.replace("## ", "").trim().toLowerCase().replace(/\s+/g, "-"),
          subSections: [],
          content: "",
        };
      } else if (line.startsWith("### ")) {
        if (currentSection) {
          currentSection.subSections.push({
            title: line.replace("### ", "").trim(),
            content: "",
          });
        }
      } else if (currentSection) {
        if (currentSection.subSections.length > 0) {
          currentSection.subSections[
            currentSection.subSections.length - 1
          ].content += line + "\n";
        } else {
          currentSection.content += line + "\n";
        }
      }
    });

    if (currentSection) {
      sections.push(currentSection);
    }

    return sections;
  };

  const getTitle = (data: string) => {
    const titleLine = data.split("\n").find((l) => l.startsWith("# "));
    return titleLine
      ? titleLine.replace("# ", "").trim()
      : params.changelog || "Changelog";
  };

  const title = createMemo(() => {
    const result = content();
    return result?.content
      ? getTitle(result.content)
      : result?.requestedName || params.changelog || "Changelog";
  });

  const sections = createMemo(() => {
    const data = content()?.content;
    return data ? parseChangelog(data) : [];
  });

  return (
    <main class={"projects__landing"}>
      <Metadata
        title={`Changelog: ${title()} | Sedaia Designs`}
        description={`Detailed changelog and update history for ${title()}.`}
        image={"/images/headers/sr-gui.avif"}
        url={`/projects/changelog/${params.changelog}`}
      />

      <Header
        title={`Changelog: ${title()}`}
        description={"Track the latest changes and improvements."}
        class={"index__header"}
        image={"/images/headers/sr-gui.avif"}
      />

      <SideNavWrapper projectRoutes={Routes.projects}>
        <ErrorBoundary
          fallback={(err) => <p>Failed to load changelog: {err.message}</p>}
        >
          <Suspense fallback={<p>Loading...</p>}>
            <Show
              when={content()?.content}
              fallback={
                <section class={"changelog-content"}>
                  <h2>Changelog not found</h2>
                  <p>
                    The requested changelog “{content()?.requestedName}” could
                    not be found.
                  </p>
                </section>
              }
            >
              {() => (
                <article class={"changelog-page"}>
                  <div class={"content-container"}>
                    <section class={"changelog-content"}>
                      <For each={sections()}>
                        {(section) => (
                          <div id={section.id} class={"changelog-section"}>
                            <div class={"heading"}>
                              <h2>{section.title}</h2>
                            </div>

                            <Show when={section.content.trim()}>
                              <SolidMarkdown
                                children={section.content}
                                components={{
                                  p: (props) => (
                                    <p
                                      style={{ "white-space": "pre-line" }}
                                      {...props}
                                    />
                                  ),
                                  ul: (props) => <ul {...props} />,
                                  li: (props) => <li {...props} />,
                                  a: MarkdownLink,
                                }}
                              />
                            </Show>

                            <For each={section.subSections}>
                              {(sub) => (
                                <div class={"changelog-subsection"}>
                                  <h3>{sub.title}</h3>
                                  <SolidMarkdown
                                    children={sub.content}
                                    components={{
                                      p: (props) => (
                                        <p
                                          style={{ "white-space": "pre-line" }}
                                          {...props}
                                        />
                                      ),
                                      ul: (props) => <ul {...props} />,
                                      li: (props) => <li {...props} />,
                                      a: MarkdownLink,
                                    }}
                                  />
                                </div>
                              )}
                            </For>
                          </div>
                        )}
                      </For>
                    </section>
                  </div>
                </article>
              )}
            </Show>
          </Suspense>
        </ErrorBoundary>
      </SideNavWrapper>
    </main>
  );
}
