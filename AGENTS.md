# Codex Project Guidelines

## Project Overview

This repository is Sakura's Project Hub: a central portfolio and routing hub for software projects, with links to repositories, documentation, marketplaces, and official project pages.

Primary stack:

- SolidStart / SolidJS with TypeScript and TSX
- Vite
- SCSS
- Vercel
- PNPM

## Repository Structure

- `src/`: Main application source code. Treat this as the application root when discussing project paths.
- `src/app.tsx`: Application shell, router, metadata provider, global boundaries, nav, and footer.
- `src/styles/app.scss`: Main SCSS entry point.
- `src/routes/`: File-based SolidStart routes, written as `.tsx` files.
- `src/components/`: Shared UI components.
- `src/components/sections/`: Page and shared sections.
- `src/components/sections/global/`: Shared layout sections such as nav and footer.
- `src/components/sections/index/`: Home page sections.
- `src/styles/`: SCSS partials imported by `src/styles/app.scss`.
- `src/styles/global/`: Shared layout and component partials.
- `src/styles/routes/`: Route-specific partials.
- `src/components/graphics/`: Graphic helpers such as `IconBundle`.
- `src/utils/`: Frontend utility modules.
- `public/`: Static assets, including processed images.
- `public/images/vectors/`: Raw SVG icon files.
- `.hidden/`: Ignore unless the user directly references it.

## SolidJS Rules

- Use `class`, not React's `className`.
- Prefer `class={"..."}` for JSX class literals, while preserving nearby style when editing existing code.
- Name components with PascalCase.
- Write components and routes in TypeScript/TSX.
- Follow SolidJS conventions and avoid React-specific patterns.
- Use semantic HTML elements such as `main`, `section`, `nav`, `article`, and `footer` where appropriate.
- Prefer typed props interfaces near the component.
- Use `splitProps` when a component has local props and forwards remaining JSX attributes.
- Use Solid primitives such as `Show`, `Switch`, `Match`, `createSignal`, `createMemo`, and `children` instead of React patterns.
- Use the project `Link` component from `~/components/routing/link` for app links unless a lower-level router primitive
  is needed.
- Use standard `a` elements only for external links, downloads, or non-router navigation. The project `Link` component already handles external URLs and route prefix resolution.
- Use the `~/*` import alias for imports from `src`.

## SolidStart Routing

- Use file-based routing in `src/routes`.
- Route files should be `.tsx`.
- Keep the app-level `Router`, `MetaProvider`, `ErrorBoundary`, `Suspense`, `NavBar`, and `Footer` wiring in `src/app.tsx`.
- Add page metadata with `Metadata` from `~/components/meta/metadata` on user-facing routes.
- Prefer directory-based parameterized routes when adding dynamic pages, for example
  `src/routes/projects/changelog/[changelog].tsx`.
- Wrap dynamic route content with `Suspense` and `ErrorBoundary` when the page itself performs async loading or has local failure states. The app already provides a global boundary.
- Always provide loading fallbacks and explicit not-found or error states for dynamic routes.
- Do not hardcode the `url` prop in the `Router` in `src/app.tsx` unless SSR state specifically requires it.
- When using route params to load dynamic content such as Markdown files from `import.meta.glob`, use robust case-insensitive matching so behavior is stable across environments.

## Styling Rules

- Write styles in SCSS.
- Import SCSS partials from `src/styles/app.scss`.
- Keep SCSS partials under `src/styles/` unless a new local convention is introduced intentionally.
- Use route partials in `src/styles/routes/` and shared/common partials in `src/styles/global/`.
- Follow the current BEM-like class style, for example `index__hero__content` and `navigation-bar__main-router`.
- Use `hsl()` or `hsla()` for color definitions.
- Prefer existing CSS custom properties defined in `:root` in `src/styles/app.scss`, for example `var(--accent)` or
  `var(--tx-1)`.
- Keep new global design tokens in `:root` in `src/styles/app.scss` until a dedicated variables partial exists.
- Prefer `rem` for spacing, borders, and layout sizing where the surrounding code does.
- Preserve existing units when editing nearby code. The current codebase uses `px` for root text-size tokens and `pt` in some paragraph typography.
- Use `px` for media query breakpoints when adding responsive styles.
- Use `!important` sparingly and only when necessary.
- Keep link text decoration disabled through the global link styling unless a specific component needs a different treatment.
- Keep interactive transitions short. The current global transition duration is `150ms`; match existing timing unless there is a clear reason to change it.
- Format SCSS with clear indentation and follow the existing local style.

## Icons and Assets

- Store icons as raw SVG files in `public/images/vectors`.
- The root `svg` element must include an `id` attribute matching the filename.
- Add new icon aliases to the map in `src/components/graphics/icon-bundle.tsx`.
- Render icons through `IconBundle`, for example `<IconBundle name={"icon-name"} />`.
- `IconBundle` renders SVG sprites with `/images/vectors/${iconName}.svg#${iconName}`.
- Use absolute public paths for images in application code, for example `/images/minecraft-renders/farmer-sakura.png`.
- Keep project images in the existing `public/images/` subfolders such as `headers`, `icon`, `minecraft-renders`, `projects`, and `vectors`.
- Download fonts and images locally instead of relying on CDNs.

## Naming and Imports

- Use descriptive names for files and folders.
- Prefer lowercase letters and hyphens for new route, section, style, and utility files.
- Preserve existing exceptions such as `CardGallery.tsx` when editing nearby code.
- Avoid spaces and special characters in file and folder names.
- Imports must exactly match filename casing.
- Use forward slashes `/` in paths.
- Use the `~/*` alias for source imports, for example `~/components/routing/link` and `~/utils/url-prefixer`.
- Use relative imports for local stylesheet partials from `src/styles/app.scss`, matching the existing
  `@use "global/..."` and `@use "routes/..."` patterns.
- When a guideline says "root" in a project path, interpret it as `src`, not the filesystem root, unless the user explicitly means the Linux root directory.

## Scripts and Commands

- Use PNPM for package-manager tasks because this repo has `pnpm-lock.yaml` and `pnpm-workspace.yaml`.
- Use `pnpm build` to verify production builds.
- Use `pnpm dev` to run the local dev server on port `3232` (the default in `package.json`).
- Use `pnpm exec vite dev --configLoader runner --port 3333 --host` when you need a second local server because `3232`
  is already in use.
- Store frontend helper modules in `src/utils/`.
- If adding standalone automation or generation scripts, create a root `utils/` directory only when needed.
- Test scripts before documenting or recommending them.
- If a workflow requires several repeated commands, prefer adding or using a script instead of asking the user to run each command manually.

## Workflow

- Maintain the SolidStart and SCSS foundation of the portfolio site.
- Read relevant project documentation before broad changes, especially `.junie/project.md`, `.junie/context.md`, and this file.
- Keep changes scoped to the requested task.
- Do not modify files in `.hidden/` unless the user explicitly asks.
- Do not create commits unless the user explicitly requests a commit.
- Before broad refactors, account for existing uncommitted work and avoid overwriting unrelated changes.
- At the end of every session, run the git pre-commit hook manually (`.githooks/pre-commit`) and then `pnpm build` so
  formatting/lint/sitemap and compile checks are clean before handoff.

## Git Commit Guidance

The Junie source documents contained conflicting commit rules. For Codex, use this resolved policy:

- Do not automatically commit completed tasks.
- Only commit when the user explicitly requests it.
- If committing, use author `SakuraSedaia <email@sakura-sedaia.com>` unless the user specifies a different author.
- Do not add Junie as a co-author unless the user explicitly requests it.
- Use concise commit messages with a typed prefix.
- Preferred format: `[Type -> module]: Description`
- Valid types include `Feature`, `Refactor`, `Chore`, `Cleanup`, `Asset`, `Fix`, `Docs`, `Style`, and `Test`.
- Omit the module when more than two groups are modified.
- Keep the description brief, ideally under 150 characters.

## Session Logs

- The Junie documents requested chat logs under `.logs/`.
- For Codex, only create or update `.logs/` files when the user asks for session logging, a context summary, or a summary of the day.
- If asked for a context or session summary, create `.logs/summary_YYYY-MM-DD.md`.
