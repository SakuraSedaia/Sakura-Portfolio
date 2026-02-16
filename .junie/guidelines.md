### SolidJS HTML Elements
- When generating HTML elements, always use the `class` attribute instead of React's `className`. SolidJS follows standard HTML attribute naming for classes.
- Ensure all components follow the SolidJS naming convention
- Ensure component compliance with SolidJS best practices

### SolidStart & Routing
- Use the `<A>` component from `@solidjs/router` for all internal links to ensure proper SPA navigation and prevent full page reloads.
- Page components and routes should be wrapped in `Suspense` and `ErrorBoundary` to handle loading states and catch runtime errors.
- Do not hardcode the `url` prop in the `Router` component in `app.jsx` unless specifically required for SSR state, as it can cause unexpected redirects on page reload.
- When loading dynamic content (e.g., Markdown files via `import.meta.glob`) based on route parameters, use robust and case-insensitive matching logic to ensure compatibility across different environments.
- Use directory-based parameterized routing (e.g., `src/routes/changelog/[item].jsx`) for cleaner route structure and to ensure reliable parameter resolution.
- Always implement loading fallbacks and explicit "not found" or error states for dynamic routes.

### Styling
- This project is styled using SCSS.
- Any modifications to the stylesheets must be done using the SCSS syntax.
- Any colors used must be formatted using hsl
- If a provided color is not hsl, it must be converted to hsl.
- Use the `!important` rule sparingly and only when necessary.
- Use `em` and `rem` units for element sizing
- use `pt` units for typography
- Use `px` for @media queries
- Global layout styles should be placed in the `_sedaia-design.scss` file.
- All other styles should be placed in the associated `_custom.scss` file, where the text `custom` is replaced with the name of the page or component.
- Ensure SCSS files are formatted with proper indentation and adhere to the SCSS style guide.
- `text-decoration` should never be used when making links, as the property cannot be animated to fade in and out unlike `box-shadow` which is the preferred implementation for link effects.

### Ignore Files
- Unless directly referenced in the request, ignore any files in `.hidden`

### Compressing Files
- Unless otherwise noted, use 7zip to compress files using the installed binary
- Compress all files into the 7z format
- Unless otherwise noted, place all compressed files in the `.compressed` folder
- If developing on Linux, use `tar` to compress files instead of 7zip.
- If developing on Linux, compress into the `.tar.gz` format instead of the `.7z` format.

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

### Helper Scripts
- Use the `utils` folder to store helper scripts.
- Use the `utils` folder to store scripts that are used to automate processes.
- Use the `utils` folder to store scripts that are used to generate files.
- Ensure that all scripts are tested and working correctly before including them in the guidelines.