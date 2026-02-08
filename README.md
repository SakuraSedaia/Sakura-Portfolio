# Sedaia Design's Portfolio

Sedaia Design's Portfolio is a modern and interactive web experience built with [SolidJS](https://www.solidjs.com/) and [SolidStart](https://start.solidjs.com/). This project serves as a showcase for Sedaia Design, a brand for 3D and Web-based work, and acts as a test-bed for the custom [Sedaia Design CSS framework](https://github.com/SedaiaDesign/sedaia-design).

The transition to SolidJS and SolidStart was chosen to provide fine-grained reactivity and a modular architecture, allowing for easy expansion and maintenance. By utilizing individual components for elements like the Header and Footer, the site ensures consistency across all pages and simplifies the process of adding new content.

## 🚀 Features

- **Blazing Fast:** Leverages SolidJS for fine-grained reactivity and minimal performance overhead.
- **Modern Tech Stack:** Utilizes SolidStart for server-side rendering (SSR) and efficient routing.
- **Custom CSS Framework:** Built using the [Sedaia Design](https://github.com/SedaiaDesign/sedaia-design) framework, a structured and customizable CSS solution.
- **Modular Architecture:** Highly organized component structure for easy scalability and maintenance.
- **Dynamic Data:** Uses JSON-driven components to manage assets and project information.
- **Responsive Styling:** Styled with SCSS using a structured approach and HSL color definitions.

## 🛠️ Tech Stack

- **Framework:** [SolidJS](https://www.solidjs.com/)
- **Meta-framework:** [SolidStart](https://start.solidjs.com/)
- **Bundler:** [Vinxi](https://github.com/nksaraf/vinxi)
- **Styling:** [SCSS](https://sass-lang.com/) (using the Sedaia Design framework)
- **Language:** JavaScript (ESM)

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

### Development

Start the development server:
```bash
npm run dev
```
The application will be available at `http://localhost:3232`.

To run with host access enabled:
```bash
npm run devh
```

### Building for Production

To create an optimized production build:
```bash
npm run build
```

To preview the production build locally:
```bash
npm run start
```

## 📂 Project Structure

```text
├── src/
│   ├── components/       # Reusable UI components
│   │   ├── index-sections/ # Sections specific to the landing page
│   │   ├── assets-sections/ # Sections for the assets pages
│   │   └── ...           # Other modular components (sacr, commissions, etc.)
│   ├── jsondata/         # Static data (e.g., rig manifests, addon indices)
│   ├── routes/           # File-based routing (SolidStart)
│   ├── styles/           # SCSS stylesheets and framework implementation
│   ├── app.jsx           # Main application entry point
│   ├── entry-client.jsx  # Client-side entry point
│   └── entry-server.jsx  # Server-side entry point
├── public/               # Static assets (images, icons, fonts, etc.)
├── utils/                # Utility scripts (e.g., manifest generators)
├── app.config.js         # SolidStart/Vinxi configuration
└── package.json          # Project dependencies and scripts
```

## 🤝 Contributing

Contributions are welcome! To maintain code quality and consistency, please follow these guidelines:

1. **Branching Strategy:** Create a new branch for each feature or bug fix.
2. **Coding Standards:**
   - Follow the existing code style.
   - Use descriptive names for variables, functions, and components.
   - Use standard HTML attributes (e.g., use `class` instead of `className` as per SolidJS conventions).
3. **Styling Guidelines:**
   - Use SCSS for all styles.
   - Colors must be formatted using **HSL**.
   - Follow the patterns established by the Sedaia Design framework.
4. **Pull Requests:**
   - Ensure your code builds successfully (`npm run build`).
   - Provide a clear description of your changes.


This project was created with the [Solid CLI](https://github.com/solidjs-community/solid-cli).

---
*Created and maintained by Sakura Sedaia.*