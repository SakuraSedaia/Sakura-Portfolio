### SolidJS HTML Elements
- When generating HTML elements, always use the `class` attribute instead of React's `className`. SolidJS follows standard HTML attribute naming for classes.
- Always wrap HTML attributes in curly braces (e.g., `class={styles.container}`) for consistency and to avoid potential issues with static vs dynamic attributes.
- Ensure all components follow the SolidJS naming convention
- Ensure component compliance with SolidJS best practices

### Frontend & Accessibility
- Use semantic HTML elements (e.g., `<main>`, `<section>`, `<nav>`) to ensure structural clarity and SEO.
- Follow WCAG guidelines for accessibility. 
- Use the `alt` attribute for all media elements and the `title` attribute for tooltips.
- Wrap page sections in their own components; use `<section>` tags with unique IDs for modularity.

### SolidStart & Routing
- Use the `<A>` component from `@solidjs/router` for all internal links to ensure proper SPA navigation and prevent full page reloads.
- Page components and routes should be wrapped in `Suspense` and `ErrorBoundary` to handle loading states and catch runtime errors.
- Do not hardcode the `url` prop in the `Router` component in `app.jsx` unless specifically required for SSR state, as it can cause unexpected redirects on page reload.
- When loading dynamic content (e.g., Markdown files via `import.meta.glob`) based on route parameters, use robust and case-insensitive matching logic to ensure compatibility across different environments.
- Use directory-based parameterized routing for cleaner route structure and to ensure reliable parameter resolution.
- Always implement loading fallbacks and explicit "not found" or error states for dynamic routes.

### Styling
- This project is styled using SCSS.
- Any modifications to the stylesheets must be done using the SCSS syntax.
- Any colors used must be formatted using hsl. If a provided color is not hsl, it must be converted to hsl.
- Use the `!important` rule sparingly and only when necessary.
- Use `em` and `rem` units for element sizing and typography, and `em` or `px` for @media queries. Using `em` for media queries is preferred for better accessibility and scaling. Using `pt` is discouraged except for print-specific stylesheets.
- Ensure SCSS files are formatted with proper indentation and adhere to the SCSS style guide.
- Framework essential code (structural layout, resets) belongs in the global design partial (e.g., `_sedaia-design.scss`).
- Thematic styles, component-specific styles, and page-specific styles should be placed in their respective partials within the `src/styles/components/`, `src/styles/sections/`, or `src/styles/pages/` subdirectories, mirroring the folder structure of their respective components or routes for easier navigation.
- Move `app.scss` to the source root (`src/`) for consistency across projects.

### Path Handling
- Always use forward slashes `/` for path handling.
- Use the `!/` alias to refer to the Project Root in chat and guidelines.
- Use the prefix `$PROJECT_NAME/` to refer to other projects in the WebstormProjects library (This Project's parent folder).
- When referencing to another component, use the relative path from the source root.
- Use the `src` directory as the root for all relative paths.
- When referencing an Image, use absolute paths.
- When using the word `root` in a path, use the `src` directory as the root. Only refer to root as the Linux root directory when explicitly asked.

### Ignore Files
- Unless directly referenced in the request, ignore any files in `.hidden`

### Compressing Files
- If developing on Linux, use `tar` to compress files into the `.tar.gz` format instead of 7zip.
- Unless otherwise noted, place all compressed files in the `.compressed` folder.

### Version Control
- Upon creation of new files, automatically add them to git unless they are ignored by `.gitignore`.

### File Naming Conventions
- Use descriptive and consistent naming (lowercase and hyphens).
- Avoid spaces or special characters in file and folder names.
- All imports must strictly match the filename casing (usually lowercase).

### Running System Commands
- If multiple commands are required to run, use a script or batch file to automate the process.
- Ensure that all commands are tested and working correctly before including them in the guidelines.

### Coding Standards
- **Python**: Follow `autopep8`. Keep external libraries to a minimum. Aim for a maximum of 4 indents (soft rule).
- **Automation**: Follow the specific automation pipeline rules defined in `.junie/project.md`.
- **Helper Scripts**: Use the `utils/` folder to store helper scripts that automate processes or generate files. Ensure scripts are tested and working correctly.

### Languages & Semantics
- NOTE: This section applies exclusively to user-facing content visible on the final website (e.g., "About Me" paragraphs, descriptions, and labels). It does not apply to code, comments, or commit messages.
- Use professional language and semantics in website copy.
- Avoid colloquialisms and slang in user-facing text.
- Avoid overly complex or technical language that may confuse non-expert readers in general content.
- Ensure clarity and conciseness in all written website content.
