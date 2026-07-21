# Sakura Project Hub

This repository powers [sakura-sedaia.com](https://sakura-sedaia.com): a SolidStart-based portfolio and project hub
that centralizes project pages, changelogs, downloads, and cross-site route metadata.

- **Repository:** [codeberg.org/SakuraSedaia/Sakura-Portfolio](https://codeberg.org/SakuraSedaia/Sakura-Portfolio)
- **Issues:** [codeberg.org/SakuraSedaia/Sakura-Portfolio/issues](https://codeberg.org/SakuraSedaia/Sakura-Portfolio/issues)
- **Homepage:** [sakura-sedaia.com](https://sakura-sedaia.com)
- **License:** GPL-3.0-or-later

## Current Scope

- SolidStart app shell with shared global header, navigation, metadata, boundaries, and footer.
- Core public routes: `/`, `/about`, `/contact`, `/credits-and-attributions`, `/debug`, and 404 fallback.
- Project hub routes under `/projects/*`, including dynamic changelog pages (`/projects/changelog/[changelog]`).
- Route manifests in JSON for primary, project, and wiki route groups.
- SEO utilities including route metadata and sitemap generation with git-aware `lastmod`.

## Tech Stack

- SolidJS + SolidStart (TypeScript / TSX)
- Vite + Nitro (`vercel` preset)
- SCSS
- PNPM

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

Local dev runs on `http://localhost:3232` with `--host`.

## Commands

| Command               | Description                                                      |
| --------------------- | ---------------------------------------------------------------- |
| `pnpm dev`            | Start Vite dev server on port `3232`.                            |
| `pnpm build`          | Build production output.                                         |
| `pnpm preview`        | Preview the production build.                                    |
| `pnpm lint`           | Run ESLint for `src` TypeScript and TSX files.                   |
| `pnpm lint:fix`       | Run ESLint with safe autofixes.                                  |
| `pnpm format`         | Format repository files with Prettier.                           |
| `pnpm format:check`   | Validate formatting without changing files.                      |
| `pnpm update:sitemap` | Regenerate `public/sitemap.xml` with git-based `lastmod` values. |
| `pnpm setup:githooks` | Configure local hooks path to `.githooks`.                       |

## Project Structure

- `src/app.tsx`: app shell, router wiring, metadata provider, and global boundaries.
- `src/routes/`: file-based routes (`.tsx`) including project pages.
- `src/components/`: shared UI components and route sections.
- `src/data/json/`: route manifests and project-indexed data sources.
- `src/markdown/`: markdown content loaded by dynamic project changelog routes.
- `src/styles/`: SCSS entrypoint, globals, variables, and route styles.
- `public/`: static assets including icons, project media, and generated sitemap.
- `docs/`: implementation notes and route-group planning docs.

## Content and Routing Data

- Primary route manifest: `src/data/json/routes.json`
- Project route manifest: `src/data/json/project-routes.json`
- Wiki route manifest: `src/data/json/wiki-routes.json`
- Project data indexes: `src/data/json/projects/*.json`

When adding or renaming user-facing routes, update the relevant JSON manifest and run:

```bash
pnpm update:sitemap
```

## Branches

- `main`: primary development and deployment branch.
- `portfolio-v3-dev`: v3 development/staging branch (currently aligned with `main`).
- `portfolio-v2`: archived v2 branch.
- `portfolio-v1`: archived v1 branch.
- `portfolio-classic`: archived legacy HTML/CSS branch.

---

Created and maintained by Sedaia Designs.
