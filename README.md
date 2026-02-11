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
├── utils/                # Utility scripts and automation tools
│   ├── render_manager.py # TUI tool for image processing and manifest assembly
│   └── render_config.toml# Configuration for the render manager
├── app.config.js         # SolidStart/Vinxi configuration
└── package.json          # Project dependencies and scripts
```

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details on how to set up the project and our coding standards.


This project was created with the [Solid CLI](https://github.com/solidjs-community/solid-cli).

---
*Created and maintained by Sakura Sedaia.*