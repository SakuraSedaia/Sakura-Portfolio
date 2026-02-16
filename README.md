# Sedaia Design's Portfolio

Sedaia Design's Portfolio is a modern and interactive web experience built with [SolidJS](https://www.solidjs.com/) and [SolidStart](https://start.solidjs.com/). This project serves as a showcase for Sedaia Design, a brand for 3D and Web-based work, and acts as a test-bed for the custom [Sedaia Design CSS framework](https://github.com/SedaiaDesign/sedaia-design).

The transition to SolidJS and SolidStart was chosen to provide fine-grained reactivity and a modular architecture, allowing for easy expansion and maintenance. By utilizing individual components for elements like the Header and Footer, the site ensures consistency across all pages and simplifies the process of adding new content.

## 🚀 Features

- **Blazing Fast:** Leverages SolidJS for fine-grained reactivity and minimal performance overhead.
- **Modern Tech Stack:** Utilizes SolidStart for server-side rendering (SSR) and efficient routing.
- **Custom CSS Framework:** Built using the [Sedaia Design](https://github.com/SedaiaDesign/sedaia-design) framework, a structured and customizable CSS solution.
- **Modular Architecture:** Highly organized component structure for easy scalability and maintenance.
- **Dynamic Data:** Uses JSON-driven components to manage assets and project information.
- **Asset Optimization:** Integrated Python pipeline for JXL conversion with robust PNG/JPG fallbacks.
- **Responsive Styling:** Styled with SCSS using a structured approach and HSL color definitions.

## 🛠️ Tech Stack

- **Framework:** [SolidJS](https://www.solidjs.com/)
- **Meta-framework:** [SolidStart](https://start.solidjs.com/)
- **Bundler:** [Vinxi](https://github.com/nksaraf/vinxi)
- **Styling:** [SCSS](https://sass-lang.com/) (using the Sedaia Design framework)
- **Language:** JavaScript (ESM)

## 📂 Project Structure

```text
├── src/
│   ├── components/       # Reusable UI components
│   ├── sections/         # Page-specific sections
│   ├── jsondata/         # Static data (e.g., rig manifests, addon indices)
│   ├── routes/           # File-based routing (SolidStart)
│   ├── styles/           # SCSS partials (mirrors components/sections/pages folders)
│   ├── app.jsx           # Main application entry point
│   ├── app.scss          # Main SCSS entry point
│   ├── entry-client.jsx  # Client-side entry point
│   └── entry-server.jsx  # Server-side entry point
├── public/               # Static assets (images, icons, fonts, etc.)
├── utils/                # Asset Optimization Pipeline
│   ├── install_requirements.sh # Linux/macOS setup script
│   ├── install_requirements.bat# Windows setup script
│   ├── launch_optimizer.py # Linux launcher for the TUI
│   ├── launch_optimizer.bat# Windows launcher for the TUI
│   ├── config.toml         # Pipeline configuration
│   ├── scripts/            # Modular Python automation scripts
│   ├── pipeline_sources/   # Sandboxed procedural source assets
│   ├── renders/            # Source PNG renders
│   └── lib/                # Individual image manifest JSON files
├── OPTIMIZATION_PIPELINE.md # Detailed pipeline documentation
├── app.config.js         # SolidStart/Vinxi configuration
└── package.json          # Project dependencies and scripts
```

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details on how to set up the project and our coding standards.


This project was created with the [Solid CLI](https://github.com/solidjs-community/solid-cli).

---
*Created and maintained by Sedaia Designs.*