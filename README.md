# Project MA1 - Dynamic Web App Setup

This repository is a flexible boilerplate for creating React and TypeScript web applications with multiple pre-configured environments. It includes templates for both modern build tools (Vite) and established ones (Webpack), as well as specific device configurations.

## Configurations Available

- **`desktop`**: A lightweight, modern setup using **Vite**. See `configs/desktop/README.md` for details.
- **`phone`**: A robust, production-ready setup using **Webpack**. See `configs/phone/README.md` for details.
- **`SamsungA54`**: A verified, working snapshot of the **Webpack** configuration for a specific device. See `configs/SamsungA54/README.md` for details.

## Getting Started

To begin, you must first set up the project by choosing a configuration.

1.  **Run the Setup Script**:

    ```bash
    npm install
    npm run setup
    ```

    (This will guide you through selecting and copying the configuration files for your chosen environment.)

2.  **Install Dependencies**: After the script finishes, run the following command to install the dependencies for your chosen configuration.
    ```bash
    npm install
    ```

## Post-Setup Workflow

Once the setup is complete, you can find the specific commands (e.g., `npm start`, `npm run build`, `npm test`) and documentation for your chosen environment in its `README.md` file, located in the `configs/` directory.

## Technologies Used (Post-Setup)

- React & TypeScript
- Vite or Webpack
- Jest or Vitest
- ESLint, Stylelint, Prettier
