# Sakura Portfolio Website

This repository powers the main [sakura-sedaia.com](https://sakura-sedaia.com) portfolio app using SolidStart,
TypeScript, and SCSS.

- **Repository:** [codeberg.org/SakuraSedaia/Sakura-Portfolio](https://codeberg.org/SakuraSedaia/Sakura-Portfolio)
- **Issues:** [codeberg.org/SakuraSedaia/Sakura-Portfolio/issues](https://codeberg.org/SakuraSedaia/Sakura-Portfolio/issues)
- **Homepage:** [sakura-sedaia.com](https://sakura-sedaia.com)
- **License:** GPL-3.0-or-later

## Branches

- `main`: default branch and active primary line for current development and deployment.
- `portfolio-v3-dev`: active v3 development/staging branch (currently aligned with `main`).
- `portfolio-v2`: Archived V2 portfolio SolidStart V1 Javascript branch, retained for historical reference.
- `portfolio-v1`: Archived V1 portfolio SolidStart V1 Javascript branch, retained for historical reference.
- `portfolio-classic`: imported classic HTML/CSS portfolio branch retained as a legacy archive.

## Roadmap

This project is being rebuilt in phases from a fresh SolidStart template to a consolidated production platform.

1. Foundation (Completed)

- Initialize SolidStart + TypeScript + SCSS baseline.
- Configure Vite + Nitro (`vercel` preset) and metadata infrastructure.
- Establish shared layout shell (`app.tsx`) with global navigation/footer.

2. Core Portfolio Shell (Completed)

- Implement primary portfolio routes: `/`, `/about`, `/debug`, and catch-all `404`.
- Add shared components for header, navigation, footer, icons, and routing links.
- Introduce route manifest JSON (`src/data/json/routes.json`) for navigation and metadata coordination.

3. Content Migration (In Progress)

- Populate home page sections with production-ready content.
- Expand programming/projects presentation beyond placeholder sections.
- Continue migrating and organizing static media and project data JSON under `src/data/json/` and `public/images/`.

4. Metadata, SEO, and Indexing (Completed)

- Maintain per-route metadata and canonical URL handling.
- Keep sitemap generation automated via `pnpm update:sitemap`.
- Align no-index behavior and route metadata coverage as pages are added.

5. Cross-Site Consolidation Planning (In Progress)

- Preserve `wiki://` and `projects://`-aware URL prefix resolution for cross-site linking.
- Keep wiki/projects route-group manifests and planning docs in `docs/`.
- Define migration path for consolidating standalone wiki/projects deployments into this codebase.

6. Production Hardening (Planned)

- Expand route coverage and ship missing production pages (for example contact/projects/wiki endpoints where needed).
- Validate responsive behavior, accessibility, and error/loading states across routes.
- Add broader regression checks for route data, metadata integrity, and critical rendering paths.

7. Full Production Deployment (Target State)

- Deploy this app as the canonical production source for `sakura-sedaia.com`.
- Optionally unify subdomain experiences (`wiki.sakura-sedaia.com`, `projects.sakura-sedaia.com`) through one routed
  platform when migration is complete.
- Operate with repeatable release workflow, updated sitemap metadata, and stable routing/SEO behavior across all public
  pages.

## Tech Stack

- **Framework:** [SolidJS](https://www.solidjs.com/) (`solid-js` ^1.9.5)
- **Meta-framework:** [SolidStart](https://start.solidjs.com/) (`@solidjs/start` 2.0.0-alpha.3)
- **Routing:** [`@solidjs/router`](https://github.com/solidjs/solid-router) ^0.15.0
- **Metadata:** [`@solidjs/meta`](https://github.com/solidjs/solid-meta) ^0.29.4
- **Bundler / Dev Server:** [Vite](https://vitejs.dev/) 8.0.5
- **SSR Adapter:** [`@solidjs/vite-plugin-nitro-2`](https://www.npmjs.com/package/@solidjs/vite-plugin-nitro-2) ^0.3.0
- **Styling:** [SCSS](https://sass-lang.com/) via `sass` ^1.99.0
- **Language:** TypeScript (ESM)
- **Deployment Target:** Vercel (Nitro preset)

## Requirements

- Node.js `>=22`
- PNPM

## Getting Started

macOS/Linux:

```bash
./scripts/setup-project.sh
pnpm dev
```

Windows (PowerShell):

```powershell
.\scripts\setup-project.ps1
pnpm dev
```

Windows (Command Prompt):

```bat
.\scripts\setup-project.cmd
pnpm dev
```

Dev server runs on `http://localhost:3232` (with `--host` enabled).

## Scripts

| Command               | Description                                                                         |
|-----------------------|-------------------------------------------------------------------------------------|
| `pnpm dev`            | Start local Vite dev server on port `3232`.                                         |
| `pnpm build`          | Build production output via `vite build`.                                           |
| `pnpm format`         | Format project files with Prettier.                                                 |
| `pnpm format:check`   | Check Prettier formatting without writing changes.                                  |
| `pnpm lint`           | Run ESLint for `src` TypeScript and TSX files.                                      |
| `pnpm lint:fix`       | Run ESLint and apply safe autofixes.                                                |
| `pnpm start`          | Run `vite start`.                                                                   |
| `pnpm preview`        | Preview the production build via `vite preview`.                                    |
| `pnpm update:sitemap` | Regenerate `public/sitemap.xml` with route-aware `lastmod` values from git history. |
| `pnpm setup:githooks` | Configure local git hooks path to `.githooks`.                                      |

## Setup Scripts

| Script                        | Description                                                                                   |
|-------------------------------|-----------------------------------------------------------------------------------------------|
| `./scripts/setup-project.sh`  | Runs full environment setup (Node/PNPM + Python/uv fallback) on macOS/Linux.                  |
| `./scripts/setup-node.sh`     | Installs Node dependencies and configures local git hooks on macOS/Linux.                     |
| `./scripts/setup-python.sh`   | Creates/syncs Python environment using `uv` (or falls back to `.venv`) on macOS/Linux.        |
| `.\scripts\setup-project.ps1` | Runs full environment setup (Node/PNPM + Python/uv fallback) on Windows PowerShell.           |
| `.\scripts\setup-node.ps1`    | Installs Node dependencies and configures local git hooks on Windows PowerShell.              |
| `.\scripts\setup-python.ps1`  | Creates/syncs Python environment using `uv` (or falls back to `.venv`) on Windows PowerShell. |
| `.\scripts\setup-project.cmd` | Command Prompt launcher for `setup-project.ps1`.                                              |
| `.\scripts\setup-node.cmd`    | Command Prompt launcher for `setup-node.ps1`.                                                 |
| `.\scripts\setup-python.cmd`  | Command Prompt launcher for `setup-python.ps1`.                                               |

## Key Directories

- `src/routes/` - SolidStart route files
- `src/components/` - shared UI and section components
- `src/data/json/` - route and project metadata sources
- `src/styles/` - global and route-level SCSS
- `src/markdown/` - project changelog markdown content
- `public/` - static assets and generated `sitemap.xml`
- `docs/` - architecture and migration planning notes

---

Created and maintained by Sedaia Designs.
