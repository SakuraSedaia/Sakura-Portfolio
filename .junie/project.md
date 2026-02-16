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

#### Automation Pipeline (Render Map V2.2)
- **Workflow**:
    1.  `utils/launch_optimizer.py`: The entry point script that launches the TUI (Linux). This script automatically checks for missing dependencies and provides an option to install them.
    2.  `utils/launch_optimizer.bat`: The entry point script that launches the TUI (Windows). This script automatically checks for missing dependencies and provides an option to install them.
    3.  `utils/install_requirements.sh`: Native installer called by the TUI (Linux/macOS).
    4.  `utils/install_requirements.bat`: Native installer called by the TUI (Windows).
    5.  `utils/scripts/tui.py`: The TUI module that integrates all pipeline steps and the dependency manager.
    6.  `utils/scripts/backup_manager.py`: Logic for backing up and restoring original assets.
    7.  `utils/scripts/image_optimizer.py`: Logic for general image optimization.
    8.  `utils/scripts/create_render_map_v2_2.py`: Processes source renders into JXL/fallback formats and generates individual manifests.
    9.  `utils/scripts/assemble_manifest.py`: Consolidates individual manifests into `src/jsondata/render-map.json`.
    10. Frontend components (`renders.jsx`, `char-gallery.jsx`) consume the consolidated JSON.
- **Rules**:
    - **TUI Integration**: Use `utils/launch_optimizer.py` (Linux) or `utils/launch_optimizer.bat` (Windows) as the central hub for running pipeline tasks. Includes options for optimization, render map generation, manifest assembly, combined render pipeline, restoration from standard or source backups, and a built-in configuration manager.
    - **Configuration**: Use `utils/config.toml` to manage global settings for paths (including `backup_dir` and `manual_backup_dir` (Source Backup)), formats, and optimization parameters.
    - **Python Monitoring**: When running Python scripts from the automation pipeline, always ensure verbose logging is enabled and, if possible, run them in a way that allows for real-time console output monitoring to prevent the appearance of being stuck.
    - **Sandboxed Source**: By default, the pipeline scans `utils/pipeline_sources/images` and outputs to `public/images`, keeping source files pristine and separate from processed assets. All procedural inputs should be stored within subdirectories of `utils/pipeline_sources/`.
    - **Filename format**: `Name-MonthYear.ext` (e.g., `Enchanting Room-Oct2023.png`).
    - **Date parsing**: Use `calendar.month_name` for case-insensitive month matching.
    - **Image processing**: Use PIL (Pillow) and jxlpy for primary JXL generation and fallback (PNG/JPG).
    - **Multi-size generation**: Generate `lg` (1920px), `md` (1600px), and `sm` (1200px) versions.
    - **Path handling**: Always use `pathlib.Path` for filesystem operations.
    - **Manifest preservation**: Ensure existing descriptions in individual JSON manifests are preserved during regeneration.
    - **Output structure**: Web images should be stored in a slug-named subdirectory within the category folder (e.g., `public/images/renders/env/enchanting-room/`). Slugs should be lowercase and hyphenated. Filenames should also be slugified (lowercase and hyphenated).
    - **Individual manifests**: Store individual JSON files in the `utils/lib` directory, grouped by category.
    - **Consolidated manifest**: The final manifest is stored at `src/jsondata/render-map.json`, sorted by date descending within each category.
    - **Debug mode**: Use `DEBUG` mode whenever testing the asset optimization pipeline unless asked to run normally by the user. It uses separate `debug_renders` and `debug_lib` directories for safety, and redirects testing to `.hidden/testing` using `.hidden/images_backup_manual` as source. In this mode, only the first image is saved to verify script functionality, while the rest are scanned for real-time validation. When encountering an error while testing, integrate a new test for that specific edge case or error to ensure it can be caught and managed appropriately.
    - **Dependencies**: Maintain `utils/scripts/requirements.txt` for Python dependencies. Update it whenever modules are added or removed.
    - **Documentation**: Automatically update the `OPTIMIZATION_PIPELINE.md` documentation whenever core structure changes are made to the optimization pipeline.
    - **VCS**: Perform a git commit after every prompt to ensure a granular and recoverable project history.

#### Project-Specific Styling
- Global layout styles: `src/styles/_sedaia-design.scss`.
- Component styles: Associated `_custom.scss` file.

#### Project-Specific Routing
- Example: `src/routes/changelog/[item].jsx`.
