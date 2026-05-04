### Project Information: Sakura's Project Hub

#### Project Mission
- Build and create a central hub for all of my software projects with routes going to their associated repositories, documentation, and official pages (E.g. Blender Extensions (extensions.blender.org), Jetbrains Marketplace (https://plugins.jetbrains.com/), etc)

#### Key Technologies Used
- Solid.js
- SCSS
- Vercel

#### Project Structure (Key Paths)
- `!/src/`: Main application source code.
- `!/src/components/`: Categorized reusable UI components.
- `!/src/sections/`: Page-specific sections (may include local `components/` subdirectories).
- `!/src/json/`: JSON data files for dynamic content.
- `!/src/styles/`: Global SCSS files and mirrored partial subdirectories.
  - `sections/` Contains partials for shared sections (e.g. Header, Footer, etc.)
  - `pages/` Contains partials for page-specific components contained in a single file per page `_page.scss` (e.g. About, Notable Projects, etc.)
  - `components/` Contains partials for reusable UI components (e.g. buttons, cards, etc.)
  - `_main.scss`: Main SCSS Framework.
  - `_common.scss`: Common styles shared across multiple components and pages.
  - `_variables.scss`: SCSS variables and constants.
- `!/src/app.scss`: Main SCSS entry point.
- `!/utils/`: Utility scripts and tools
- `!/public/`: Static assets, including processed images.
- `!/.junie/`: Configuration and guidelines for AI agents.

#### Project-Specific Styling
- Page Framework: `_main.scss`.
- Common styles: `_common.scss`.
- Variables: `_variables.scss`.
- Page-specific styles: Associated `_page.scss` file.
- Component styles: Associated `_custom.scss` file.

