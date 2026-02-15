# Contributing to Sakura Portfolio

This guide will help you get started with contributing to the Sakura Portfolio project.

## 🏗️ Getting Started

### Prerequisites

- **Node.js:** version 22 or higher is required (as specified in `package.json`).
- **npm** or your preferred package manager.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/SakuraSedaia/Portfolio-Testing.git
   cd Portfolio-Testing
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
  - Follow `autopep8`.
  - Prefer the standard library over external dependencies.
  - Keep nesting to a maximum of 4 indents.

### 3. Styling (SCSS)
- **Format:** Use SCSS syntax with proper indentation.
- **Colors:** All colors must be formatted using **HSL**.
- **Sizing:** Use `rem` and `em` for element sizing and typography.
- **Media Queries:** Use `em` for `@media` queries to ensure better accessibility and scaling.
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
