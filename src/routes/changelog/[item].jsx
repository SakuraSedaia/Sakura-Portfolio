import Header from "~/sections/header.jsx";
import { SolidMarkdown } from "solid-markdown";
import Footer from "~/sections/footer.jsx";
import { cache, createAsync, useParams } from "@solidjs/router";
import { Show, Suspense, ErrorBoundary } from "solid-js";
import NotFinished from "~/components/not-finished.jsx";

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
	console.log("Changelog component rendering for item:", params.item);
	const content = createAsync(() => getChangelog(params.item));

	return (
		<>
			<Header title={params.item ? `Changelog - ${params.item}` : "Changelog"} img="rigs" />
			<main class="content-container">
				<section class="changelog">
					<NotFinished />
					{/*
					<ErrorBoundary fallback={(err) => (
						<div class="error-box">
							<h2>Error Rendering Content</h2>
							<p>{err.message}</p>
						</div>
					)}>
						<Suspense fallback={<p>Loading changelog content...</p>}>
							<Show when={content()} fallback={<p>Searching for changelog...</p>}>
								{(data) => (
									<SolidMarkdown children={data} />
								)}
							</Show>
						</Suspense>
					</ErrorBoundary>
					*/}
				</section>
			</main>
			<Footer />
		</>
	)
}