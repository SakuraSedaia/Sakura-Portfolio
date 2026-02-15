### Project Information: Sakura-Portfolio

#### Project Mission
- Maintain and expand the portfolio site built on the SolidStart + SCSS foundation.
- Utilize the Python automation pipeline for efficient media asset management.
- Use Python scripts in `utils/` to automate asset optimization (e.g., render images).

#### Project Structure (Key Paths)
- `!/src/`: Main application source code.
- `!/src/components/`: Reusable UI components.
- `!/src/sections/`: Page-specific sections.
- `!/src/jsondata/`: JSON data files for dynamic content.
- `!/src/styles/`: Global SCSS files and mirrored partial subdirectories (`components/`, `sections/`, `pages/`).
- `!/src/app.scss`: Main SCSS entry point.
- `!/public/`: Static assets, including processed images.
- `!/utils/`: Python scripts for automation (image processing, manifest assembly).
- `!/utils/renders/`: Source PNG renders.
- `!/utils/lib/`: Individual image manifest JSON files.
- `!/.junie/`: Configuration and guidelines for AI agents.
- `!/.logs/`: Chat session history.
- `$PROJECT_NAME/`: Reference to other sibling projects in `WebstormProjects/`.
- `!/.junie/siblings/`: Sister project documentation (excluded from VCS).

#### Automation Pipeline (Render Map V2.1)
- **Workflow**:
    1.  `utils/render_manager.py`: TUI tool to process images and assemble manifests.
    2.  Frontend components (`renders.jsx`, `char-gallery.jsx`) consume the consolidated JSON.
- **Rules**:
    - **Filename format**: `Name-MonthYear.ext` (e.g., `Enchanting Room-Oct2023.png`).
    - **Date parsing**: Use `calendar.month_name` for case-insensitive month matching.
    - **Image processing**: Use OpenCV (cv2) for resizing and web optimization (JPEG quality 80).
    - **Multi-size generation**: Generate `lg` (1920px), `md` (1600px), and `sm` (1200px) versions.
    - **Path handling**: Always use `pathlib.Path` for filesystem operations.
    - **Manifest preservation**: Ensure existing descriptions in JSON manifests are preserved during regeneration.
    - **Output structure**: Web images should be stored in a slug-named subdirectory within the category folder (e.g., `public/images/renders/env/enchanting-room/`).
    - **Individual manifests**: Store individual JSON files in the `utils/lib` directory, grouped by category.
    - **Debug mode**: Implement a `DEBUG` toggle that uses separate `debug_renders` and `debug_lib` directories for safety.

#### Project-Specific Styling
- Global layout styles: `src/styles/_sedaia-design.scss`.
- Component styles: Associated `_custom.scss` file.

#### Project-Specific Routing
- Example: `src/routes/changelog/[item].jsx`.
