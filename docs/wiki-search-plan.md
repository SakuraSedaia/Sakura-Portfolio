# Wiki Search Integration Plan

This plan captures a future internal search feature for the wiki. For now, the
wiki can continue to be built as static TSX routes.

## Current State

- Wiki pages are handwritten SolidStart routes under `src/routes/wiki/`.
- `src/components/wiki-layout.tsx` owns the main wiki navigation and per-page
  section navigation.
- The current wiki route list is manually defined in `wiki-layout.tsx`.
- Styles for the wiki layout live in `src/styles/_wiki.scss`.

## Recommended Approach

Use a shared wiki registry as the source of truth for navigation and search.
This keeps the current TSX page model while reducing duplication.

Create a data module such as `src/data/wiki.ts` with page records:

```ts
interface WikiPageEntry {
  title: string;
  path: string;
  description: string;
  sections: WikiSectionEntry[];
  keywords?: string[];
}

interface WikiSectionEntry {
  title: string;
  id: string;
  excerpt: string;
  keywords?: string[];
}
```

Use this registry for:

- Main wiki navigation
- Search results
- Wiki index summaries
- Page metadata or excerpts where useful

## Search UX

Add a `WikiSearch` component near the top of the left wiki sidebar.

Expected behavior:

- Typing filters wiki pages and sections.
- Results show page title, matching section, and a short excerpt.
- Selecting a result navigates to `/wiki/page#section-id` when a section match
  exists, or the page path for page-level matches.
- `Escape` clears the search.
- Empty query shows normal wiki navigation.
- No-results state is compact and unobtrusive.

## Implementation Steps

1. Add `src/data/wiki.ts` with page, section, and keyword metadata.
2. Update `wiki-layout.tsx` to render main wiki navigation from the registry.
3. Add `src/components/wiki-search.tsx`.
4. Use Solid signals and memos for client-side filtering.
5. Add search styles to `src/styles/_wiki.scss`.
6. Verify keyboard behavior, mobile sidebar layout, and production build.

## Future Markdown Option

If the wiki grows significantly, consider moving content to Markdown-backed
pages and generating the registry/search index from content files with
`import.meta.glob`. This would make search more complete, but it is not needed
for the current small static wiki.
