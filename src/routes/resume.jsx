import Nav from "~/components/navigation/nav.jsx";
import SocialIcon from "~/components/media/social-icon.jsx";
import Footer from "~/sections/footer.jsx";
import { SolidMarkdown } from "solid-markdown";
import resumeContent from "~/markdown/resume.md?raw";
import { For, Show, createMemo, ErrorBoundary, Suspense } from "solid-js";
import Breadcrumb from "~/components/navigation/breadcrumb.jsx";

function Resume() {
  // Simple parser to split markdown into sections based on ## headers
  const parseResume = (content) => {
    if (!content) return { headerInfo: { name: '', contact: [] }, sections: [] };
    const lines = content.split('\n');
    const sections = [];
    let currentSection = null;
    let headerInfo = {
      name: '',
      contact: []
    };

    let readingHeader = true;

    lines.forEach(line => {
      const trimmedLine = line.trim();
      
      if (readingHeader) {
        if (line.startsWith('## ')) {
          readingHeader = false;
        } else if (trimmedLine !== '') {
          if (!headerInfo.name) {
            headerInfo.name = trimmedLine;
          } else {
            headerInfo.contact.push(trimmedLine);
          }
          return;
        } else if (headerInfo.name && trimmedLine === '') {
          // Keep reading header if we have a name but no sections yet
        }
      }

      if (line.startsWith('## ')) {
        if (currentSection) {
          sections.push(currentSection);
        }
        currentSection = {
          title: line.replace('## ', '').trim(),
          id: line.replace('## ', '').trim().toLowerCase().replace(/\s+/g, '-'),
          subSections: [],
          content: ''
        };
      } else if (line.startsWith('### ')) {
        if (currentSection) {
          currentSection.subSections.push({
            title: line.replace('### ', '').trim(),
            content: ''
          });
        }
      } else if (currentSection) {
        if (currentSection.subSections.length > 0) {
          currentSection.subSections[currentSection.subSections.length - 1].content += line + '\n';
        } else {
          currentSection.content += line + '\n';
        }
      }
    });

    if (currentSection) {
      sections.push(currentSection);
    }

    return { headerInfo, sections };
  };

  const resumeData = createMemo(() => parseResume(resumeContent));
  const headerInfo = () => resumeData().headerInfo;
  const sections = () => resumeData().sections;

  const getContactLink = (item) => {
    const mdMatch = item.match(/\[(.*?)\]\((.*?)\)/);

    if (item.includes('mailto:') || item.includes('@')) {
      let email = item.match(/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/)?.[0] || item;
      let text = email;
      if (mdMatch) {
        // If the contact is provided as a markdown link like [Email](address)
        text = mdMatch[1] || text;
        email = (mdMatch[2] || email).replace(/^mailto:/i, '');
      }
      return { href: `mailto:${email}`, text, icon: 'envelope', copyText: email };
    }

    if (item.includes('github.com')) {
      if (mdMatch) {
        return { href: mdMatch[2], text: mdMatch[1], icon: 'github' };
      }
      return { href: item, text: 'GitHub', icon: 'github' };
    }

    if (mdMatch) {
      return { href: mdMatch[2], text: mdMatch[1], icon: null };
    }

    return { href: '#', text: item, icon: null };
  };

  return (
    <ErrorBoundary fallback={(err) => <div class="content-container"><h1>Error loading Resume</h1><p>{err.message}</p></div>}>
      <Suspense fallback={<div class="content-container"><p>Loading Resume...</p></div>}>
        <header id={"resume-header"} style={{"background-image": "image-set(url('/images/headers/about.jxl') type('image/jxl'), url('/images/headers/about.jpg') type('image/jpeg'))"}}>
          <Nav title={"Resume"} />
          <div class={"header-box"}>
            <div class={"header-position"}>
              <div class={"header-content"}>
                <h1>{headerInfo().name}</h1>
                <div class={"socials"}>
                  <For each={headerInfo().contact}>
                    {(item) => {
                      const link = getContactLink(item);
                      return (
                        <a
                          href={link.href}
                          class={"link"}
                          title={link.icon === 'envelope' ? 'Click to copy email address' : undefined}
                          onclick={(e) => {
                            if (link.icon === 'envelope') {
                              e?.preventDefault?.();
                              const toCopy = link.copyText || link.href?.replace(/^mailto:/i, '');
                              if (typeof navigator !== 'undefined' && navigator.clipboard && toCopy) {
                                navigator.clipboard.writeText(toCopy).catch(() => {
                                  // Fallback: do nothing silently
                                });
                              }
                            }
                          }}
                        >
                          <Show when={link.icon}>
                            <SocialIcon name={link.icon} />
                          </Show>
                          {link.text}
                        </a>
                      );
                    }}
                  </For>
                </div>
              </div>
            </div>
          </div>
        </header>
        <div class={"content-container"}>
	        <Breadcrumb items={[
		        { label: "Home", href: "/"},
		        { label: "Resume", href: "/resume" }
	        ]} />
          <For each={sections()}>
            {(section) => (
              <section id={section.id}>
                <div class={"heading"}>
                  <h1>{section.title}</h1>
                </div>

                <Show when={section.content.trim()}>
                  <SolidMarkdown
                    children={section.content}
                    components={{
                      h1: (props) => <div class="heading"><h1 {...props} /></div>,
                      p: (props) => <p style={{"white-space": "pre-line"}} {...props} />,
                      ul: (props) => <ul {...props} />,
                      li: (props) => <li {...props} />,
                      a: (props) => {
                        const isInternal = props.href?.startsWith("/") && !props.href?.startsWith("//");
                        return isInternal ? <A {...props} /> : <a {...props} />;
                      }
                    }}
                  />
                </Show>

                <Show when={section.id === "work-experience" || section.id === "education"}>
                  <div class={"row-container"}>
                    <For each={section.subSections}>
                      {(sub) => (
                        <div class={"content-row"}>
                          <h2>{sub.title}</h2>
                          <SolidMarkdown
                            children={sub.content}
                            components={{
                              p: (props) => {
                                // Detect metadata lines (Company | Location, Dates)
                                if (typeof props.children === 'string' && (props.children.includes('|') || props.children.match(/^[A-Z][a-z]+ \d{4}/))) {
                                  return <span>{props.children}</span>;
                                }
                                // Handle bold/italic metadata
                                if (Array.isArray(props.children)) {
                                  const hasStrong = props.children.some(child => typeof child === 'object' && child?.type === 'strong');
                                  const hasEm = props.children.some(child => typeof child === 'object' && child?.type === 'em');
                                  if (hasStrong || hasEm) {
                                    return <span>{props.children}</span>;
                                  }
                                }
                                return <p style={{"white-space": "pre-line"}}>{props.children}</p>;
                              },
                              ul: (props) => <ul {...props} />,
                              li: (props) => <li {...props} />,
                              strong: (props) => <strong {...props} />,
                              em: (props) => <em {...props} />,
                              a: (props) => {
                                const isInternal = props.href?.startsWith("/") && !props.href?.startsWith("//");
                                return isInternal ? <A {...props} class={"link"} /> : <a {...props} class={"link"} />;
                              }
                            }}
                          />
                        </div>
                      )}
                    </For>
                  </div>
                </Show>

                <Show when={section.id === "skills"}>
                  <div class={"column-container flow"}>
                    <For each={section.subSections}>
                      {(sub) => (
                        <div class={"column"}>
                          <h3>{sub.title}</h3>
                          <SolidMarkdown
                            children={sub.content}
                            components={{
                              ul: (props) => <ul {...props} />,
                              li: (props) => <li {...props} />,
                              a: (props) => {
                                const isInternal = props.href?.startsWith("/") && !props.href?.startsWith("//");
                                return isInternal ? <A {...props} class={"link"} /> : <a {...props} class={"link"} />;
                              }
                            }}
                          />
                        </div>
                      )}
                    </For>
                  </div>
                </Show>

                <Show when={section.id !== "work-experience" && section.id !== "skills" && section.id !== "education" && section.subSections.length > 0}>
                  <For each={section.subSections}>
                    {(sub) => (
                      <div>
                        <h2>{sub.title}</h2>
                        <SolidMarkdown
                          children={sub.content}
                          components={{
                            p: (props) => <p style={{"white-space": "pre-line"}} {...props} />,
                            a: (props) => {
                              const isInternal = props.href?.startsWith("/") && !props.href?.startsWith("//");
                              return isInternal ? <A {...props} class={"link"} /> : <a {...props} class={"link"} />;
                            }
                          }}
                        />
                      </div>
                    )}
                  </For>
                </Show>
              </section>
            )}
          </For>
        </div>
        <Footer />
      </Suspense>
    </ErrorBoundary>
  );
}

export default Resume;


