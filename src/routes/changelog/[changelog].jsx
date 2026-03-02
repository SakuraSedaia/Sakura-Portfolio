import Header from "~/sections/header.jsx";
import { SolidMarkdown } from "solid-markdown";
import Footer from "~/sections/footer.jsx";
import { cache, createAsync, useParams, A } from "@solidjs/router";
import { Show, Suspense, ErrorBoundary, For } from "solid-js";
import { Title, Meta } from "@solidjs/meta";
import Breadcrumb from "~/components/navigation/breadcrumb.jsx";

const changelogs = import.meta.glob("../../markdown/changelogs/*.md", {
	query: "?raw",
	import: "default",
});

const getChangelog = cache(async (item) => {
	console.log("Fetching changelog for:", item);
	if (!item) return null;

	try {
		const decodedItem = decodeURIComponent(item);
		const filename = `${decodedItem}.md`.toLowerCase();
		const keys = Object.keys(changelogs);
		
		const match = keys.find(key => {
			const normalizedKey = key.toLowerCase().replace(/\\/g, '/');
			return normalizedKey.endsWith(filename);
		});

		if (match) {
			const content = await changelogs[match]();
			if (typeof content === 'string') return content;
			if (content && typeof content === 'object' && 'default' in content) {
				return typeof content.default === 'string' ? content.default : JSON.stringify(content.default);
			}
			return String(content);
		}

		return `# Changelog not found\nThe requested changelog "${decodedItem}" could not be found.`;
	} catch (e) {
		console.error("Failed to load changelog:", e);
		return `# Error loading changelog\nThere was a problem loading the changelog content: ${e.message}`;
	}
}, "changelogs");

export default function Changelog() {
	const params = useParams();
	console.log("Changelog component rendering for:", params.changelog);
	const content = createAsync(() => getChangelog(params.changelog));

	const parseChangelog = (content) => {
		if (!content) return [];
		const lines = content.split('\n');
		const sections = [];
		let currentSection = null;

		lines.forEach(line => {
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

		return sections;
	};

	return (
		<>
			<Title>{params.changelog ? `Changelog: ${params.changelog} - Sedaia Designs` : "Changelog - Sedaia Designs"}</Title>
			<Meta name="description" content={params.changelog ? `Detailed changelog and update history for ${params.changelog}.` : "Browse the update history and changelogs for projects and assets by Sedaia Designs."} />
			<Header title={params.changelog ? `Changelog - ${params.changelog}` : "Changelog"} img="rigs" />
			<main class={"content-container"}>
				<Breadcrumb items={[
					{ label: "Changelogs", href: "/changelog" },
					{ label: params.changelog || "Current" }
				]} />
				<section class={"changelog"}>
					<ErrorBoundary fallback={(err) => (
						<div class={"error-box"}>
							<h2>Error Rendering Content</h2>
							<p>{err.message}</p>
						</div>
					)}>
						<Suspense fallback={<p>Loading changelog content...</p>}>
							<Show when={content()} fallback={<p>Searching for changelog...</p>}>
								{(data) => {
									const sections = parseChangelog(data());
									return (
										<>
											<Show when={data().split('\n').find(l => l.startsWith('# '))}>
												<div class="heading">
													<h1>{data().split('\n').find(l => l.startsWith('# ')).replace('# ', '').trim()}</h1>
												</div>
											</Show>
											<For each={sections}>
												{(section) => (
													<div id={section.id} class="changelog-section">
														<div class="heading">
															<h2>{section.title}</h2>
														</div>

														<Show when={section.content.trim()}>
															<SolidMarkdown
																children={section.content}
																components={{
																	p: (props) => <p style={{"white-space": "pre-line"}} {...props} />,
																	ul: (props) => <ul {...props} />,
																	li: (props) => <li {...props} />,
																	a: (props) => {
																		const isInternal = props.href?.startsWith("/") && !props.href?.startsWith("//");
																		return isInternal ? <A {...props} class="link" /> : <a {...props} class="link" />;
																	}
																}}
															/>
														</Show>

														<For each={section.subSections}>
															{(sub) => (
																<div class="changelog-subsection">
																	<h3>{sub.title}</h3>
																	<SolidMarkdown
																		children={sub.content}
																		components={{
																			p: (props) => <p style={{"white-space": "pre-line"}} {...props} />,
																			ul: (props) => <ul {...props} />,
																			li: (props) => <li {...props} />,
 																		a: (props) => {
 																			const isInternal = props.href?.startsWith("/") && !props.href?.startsWith("//");
 																			return isInternal ? <A {...props} class="link" /> : <a {...props} class="link" />;
 																		}
 																	}}
																	/>
																</div>
															)}
														</For>
													</div>
												)}
											</For>
										</>
									);
								}}
							</Show>
						</Suspense>
					</ErrorBoundary>
				</section>
			</main>
			<Footer />
		</>
	)
}