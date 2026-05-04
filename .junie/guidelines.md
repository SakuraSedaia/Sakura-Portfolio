### SolidJS & Components
- When generating HTML elements, always use the `class` attribute instead of React's `className`. SolidJS follows standard HTML attribute naming for classes.
- Ensure all components follow the SolidJS naming convention (PascalCase for components).
- Ensure component compliance with SolidJS best practices.
- Wrap internal links with the `<A>` component from `@solidjs/router` to ensure proper SPA navigation and prevent full page reloads. Standard `<a>` tags should only be used for external links or downloads.
- When generating components, use semantic HTML elements (`<main>`, `<section>`, `<nav>`, etc.) for structure.

### Icons
- All icons must be stored as raw SVG files in `public/images/vectors`.
- Each SVG file must include an `id` attribute on the root `<svg>` element that matches its filename.
- Icons should be called using the `IconBundle` component (e.g., `<IconBundle name="icon-name" />`).

### SolidStart & Routing
- Page components and routes should be wrapped in `Suspense` and `ErrorBoundary` to handle loading states and catch runtime errors.
- Do not hardcode the `url` prop in the `Router` component in `app.jsx` unless specifically required for SSR state, as it can cause unexpected redirects on page reload.
- When loading dynamic content (e.g., Markdown files via `import.meta.glob`) based on route parameters, use robust and case-insensitive matching logic to ensure compatibility across different environments.
- Use directory-based parameterized routing (e.g., `src/routes/changelog/[changelog].jsx`) for cleaner route structure and to ensure reliable parameter resolution.
- Always implement loading fallbacks and explicit "not found" or error states for dynamic routes.

### Styling
- This project is styled using SCSS.
- Any modifications to the stylesheets must be done using the SCSS syntax.
- Use the `!important` rule sparingly and only when necessary.
- Use `em` and `rem` units for element sizing and typography.
- Use `px` for @media queries.
- Color formats: use `hsl` or `hsla` for all color definitions.
- Prefer using CSS variables for colors (e.g., `hsl(var(--tx-primary-val))`) as defined in `src/styles/_variables.scss`.
- `text-decoration` should never be used when making links (except for a global reset in `_sedaia-design.scss`); use `box-shadow` for animated link effects.
- SCSS file structure:
  - Global framework styles: `src/styles/_sedaia-design.scss`.
  - Thematic, component, and page styles: Mirrored subdirectories within `src/styles/` (e.g., `src/styles/sections/index/`).
- Ensure SCSS files are formatted with proper indentation and adhere to the SCSS style guide.
- User-interactive features (such as links and buttons) must use a maximum transition duration of `0.2s`, with link/button hover animations taking `0.1s`. Always express transition timings in seconds (e.g., `0.2s`, `0.1s`), never in milliseconds.

### Ignore Files
- Unless directly referenced in the request, ignore any files in `.hidden`

### File Naming Conventions
- Use descriptive and consistent naming conventions for files and folders.
- Avoid using spaces or special characters in file and folder names.
- Use lowercase letters and hyphens for file and folder names.
- All imports must strictly match the filename casing. Since filenames are lowercase, imports should also be lowercase.

### Running System Commands
- If multiple commands are required to run, use a script or batch file to automate the process.
- Ensure that all commands are tested and working correctly before including them in the guidelines.

### Project Specific Edits
- If I ask to edit something in the `frostlight-portfolio`, make changes into the `C:/Users/Sakura/Documents/WebstormProjects/frostlight-portfolio-and-blog` project.
- If I mention `frostlight-portfolio`, refer to the `C:/Users/Sakura/Documents/WebstormProjects/frostlight-portfolio-and-blog` project.
- The main goal is to maintain the portfolio site built on the SolidStart + SCSS foundation.

### Path handling
- Always use forward slashes `/` for path handling.
- When referencing to another component, use the relative path from the source root.
- Use the `src` directory as the root for all relative paths.
- When referencing an Image, use absolute paths.
- When using the word `root` in a path, use the `src` directory as the root. Only refer to root as the Linux root directory when explicitly asked.

### Git Commits
- When committing changes, always author the commit by `SakuraSedaia <sakusedaia@outlook.com>`.
- Always add Junie as a co-author by appending the following trailer flag to the `git commit` command: `--trailer "Co-authored-by: Junie <junie@jetbrains.com>"`
- Do NOT initiate commits on your own. Only commit when the user or guidelines explicitly request it.

### Helper Scripts
- Use the `utils` folder to store helper scripts.
- Use the `utils` folder to store scripts that are used to automate processes.
- Use the `utils` folder to store scripts that are used to generate files.
- Ensure that all scripts are tested and working correctly before including them in the guidelines.