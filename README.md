# Sakura Portfolio Website (TypeScript Rebuild)

> **⚠️ Notice:** This branch (`portfolio-v3-ts`) is a **fresh, ground-up rebuild**. It currently contains only a **basic SolidJS / SolidStart starter template** and is intended to become the **new development center** for [https://sakura-sedaia.com](https://sakura-sedaia.com). All packages expected to be needed for the rebuild are already installed — actual application code, components, routes, styling, and content from the previous build have **not** been ported over yet.

This branch starts a clean slate using TypeScript, with the goal of progressively re-implementing the portfolio on a more modern and type-safe foundation while keeping the same overall stack (SolidJS + SolidStart + SCSS).

- **Repository:** [codeberg.org/SakuraSedaia/Sakura-Portfolio](https://codeberg.org/SakuraSedaia/Sakura-Portfolio)
- **Issues:** [codeberg.org/SakuraSedaia/Sakura-Portfolio/issues](https://codeberg.org/SakuraSedaia/Sakura-Portfolio/issues)
- **Homepage:** [sakura-sedaia.com](https://sakura-sedaia.com)
- **License:** GPL-3.0-or-later

## 🌱 Status

- ✅ Project scaffolding (SolidStart + Vite + TypeScript) is in place.
- ✅ Dependencies needed for the rebuild are installed (see `package.json`).
- 🚧 No production components, sections, routes, styles, assets, or content have been migrated yet.
- 🎯 Goal: become the new main development branch / center for `sakura-sedaia.com`.

## 🛠️ Tech Stack

- **Framework:** [SolidJS](https://www.solidjs.com/) (`solid-js` ^1.9.5)
    - **Meta-framework:** [SolidStart](https://start.solidjs.com/) (`@solidjs/start` 2.0.0-alpha.2)
    - **Routing:** [`@solidjs/router`](https://github.com/solidjs/solid-router) ^0.15.0
    - **Metadata:** [`@solidjs/meta`](https://github.com/solidjs/solid-meta) ^0.29.4
- **Bundler / Dev Server:** [Vite](https://vitejs.dev/) ^7.0.0
- **SSR Adapter:** [`@solidjs/vite-plugin-nitro-2`](https://www.npmjs.com/package/@solidjs/vite-plugin-nitro-2) ^0.1.0
- **Analytics:** [`@vercel/analytics`](https://vercel.com/docs/analytics)
- **Styling:** [SCSS](https://sass-lang.com/) via `sass` ^1.99.0
- **Language:** TypeScript (ESM)

## 📜 Available Scripts

The following scripts are defined in `package.json`:

| Command         | Description                                                |
|-----------------|------------------------------------------------------------|
| `pnpm dev`      | Starts the Vite dev server on port `3232` with `--host`.   |
| `pnpm build`    | Produces a production build via `vite build`.              |
| `pnpm start`    | Runs `vite start`.                                         |
| `pnpm preview`  | Previews the production build with `vite preview`.         |

## 🗺️ Roadmap (high level)

- Rewrite a large portion of the application in TypeScript.
- Migrate all components, sections, routes, and JSON-driven data — typed in TypeScript.
- Re-write the asset optimization pipeline (`utils/`).
- Replace the old build as the production deployment target for `sakura-sedaia.com`
    - The old build will continue to be maintained in the `main` branch with project updates.

---
*Created and maintained by Sedaia Designs.*
