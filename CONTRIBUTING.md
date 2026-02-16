# Contributing to Sakura Portfolio

This guide will help you get started with contributing to the Sakura Portfolio project.

## 🏗️ Getting Started

### Prerequisites

- **Node.js:** version 22 or higher is required (as specified in `package.json`).
- **npm** or your preferred package manager.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/SakuraSedaia/Sakura-Portfolio.git
   cd Sakura-Portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

## 💻 Development

Start the development server:
```bash
npm run dev
```
The application will be available at `http://localhost:3232`.

To run with host access enabled:
```bash
npm run devh
```

## 📦 Building for Production

To create an optimized production build:
```bash
npm run build
```

To preview the production build locally:
```bash
npm run start
```

## 🐍 Python Development

When working on the **Asset Optimization Pipeline**, please follow these steps to ensure a consistent and safe development environment:

### 1. Environment Setup
- **Virtual Environment:** Always create and use a Python virtual environment to manage dependencies and avoid system-wide conflicts.
  ```bash
  python -m venv .venv
  source .venv/bin/activate  # Linux/macOS
  .venv\Scripts\activate     # Windows
  ```
- **Launch Utility:** The central TUI utility now includes a built-in dependency checker and installer. If you are missing any required modules, the utility will notify you and provide an option to install them automatically using the cross-platform setup scripts.
  - **Linux/macOS:** `python3 utils/launch_optimizer.py`
  - **Windows:** `utils/launch_optimizer.bat`

### 2. Development Workflow
- **Modular Structure:** Maintain the modular architecture in `utils/scripts/`. Consolidate shared logic into `common.py`.
- **Configuration:** Use `utils/config.toml` for path and parameter management. Never hardcode absolute paths.
- **Path Handling:** Strictly use `pathlib.Path` for all filesystem operations to ensure cross-platform compatibility.

### 3. Testing & Verification
- **DEBUG Mode:** Mandatory for all pipeline changes. Ensure `debug = true` is set in `config.toml` to redirect all operations to the `.hidden/testing` sandbox.
- **Thorough Testing:** Run the full pipeline (Option 5 in the TUI) and verify the outputs in the testing directory before committing any changes.
- **Edge Cases:** If you encounter an error, integrate a specific test case to prevent regressions.

## 🤝 Contribution Guidelines

Contributions are welcome! To maintain code quality and consistency, please follow these guidelines:

### 1. General Principles
- **Branching Strategy:** Create a new branch for each feature or bug fix.
- **Code Consistency:** Mirror existing patterns and idioms in the surrounding code.
- **User-Facing Text:** Website copy (e.g., "About Me" sections, labels, descriptions) should not be edited or added unless you are fixing spelling or grammar errors.
- **No CDNs:** All resources (fonts, images, libraries) must be hosted locally within the project (e.g., `public/fonts/`).

### 2. Coding Standards
- **SolidJS (JSX):**
  - Always use the `class` attribute instead of React's `className`.
  - Always wrap HTML attributes in curly braces (e.g., `class={styles.container}`).
  - Use semantic HTML elements (`<main>`, `<section>`, `<nav>`, etc.) for structure.
  - Wrap page sections in their own components using `<section>` tags with unique IDs.
- **Python (Automation):**
  - Follow the modular structure in `utils/scripts/`.
  - Use `pathlib.Path` for all filesystem operations.
  - Implement verbose logging and descriptive progress bars using `tqdm`.
  - Maintain `utils/scripts/requirements.txt` when adding or removing dependencies.
  - Test all changes in **DEBUG mode** (sandboxed in `.hidden/testing`).

### 3. Styling (SCSS)
- **Format:** Use SCSS syntax with proper indentation.
- **Colors:** All colors must be formatted using **HSL**.
- **Sizing:** Use `rem` and `em` for element sizing and `pt` for typography.
- **Media Queries:** Use `px` for `@media` queries to ensure consistent breakpoints across devices.
- **Organization:** 
  - Framework essential code belongs in the global design partial (`_sedaia-design.scss`).
  - Thematic, component, and page styles must be placed in mirrored subdirectories within `src/styles/` (e.g., `src/styles/sections/index/`).

### 4. File & Path Management
- **Naming:** Use lowercase and hyphens for all files and folders.
- **Paths:** Always use forward slashes `/` for path handling.
- **Imports:** Imports must strictly match the filename casing.
- **VCS:** New files must be automatically added to Git unless ignored by `.gitignore`.

### 5. Pull Requests
- Ensure your code builds successfully (`npm run build`).
- Provide a clear and concise description of your changes.
