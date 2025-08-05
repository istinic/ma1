# Contributing to Free Bridge Online

We are thrilled that you're interested in contributing to our project! All contributions, big or small, are welcome and greatly appreciated. By participating in this project, you agree to abide by our [Code of Conduct](https://www.contributor-covenant.org/version/2/1/code_of_conduct/).

## Getting Started

To get your development environment set up, please follow the instructions in our **[Full Setup & Configuration Guide](./docs/Startup.md)**.

## How to Contribute

### 🐛 Reporting Bugs

If you find a bug, please check the existing issues to see if it has already been reported. If not, open a new issue with a clear title and a detailed description of the bug, including steps to reproduce it.

### ✨ Suggesting Enhancements

We love new ideas! If you have a suggestion for a new feature or improvement, please open an issue to discuss it before you start writing any code.

### 📝 Submitting Pull Requests

1.  **Fork the repository** and clone your fork to your local machine.
2.  **Create a new branch** for your changes.
    ```bash
    git checkout -b feature/your-feature-name
    ```
3.  **Make your changes.** Be sure to follow the existing code style.
4.  **Run the checks.** Before committing, ensure your code is clean by running the linting and formatting commands.
    ```bash
    npm run lint
    npm run format
    ```
5.  **Commit your changes** with a clear and descriptive message.
    ```bash
    git commit -m "feat: A brief description of your feature"
    ```
6.  **Push your branch** to your fork.
7.  **Open a pull request** from your branch to our `main` branch. Provide a clear description of your changes and reference the issue you're addressing.

## Development Workflow

Our project uses a standardized development workflow to ensure code quality:

- **Code Style**: We use **ESLint** and **Prettier** to maintain a consistent code style.
- **Testing**: Our project uses **Jest** for testing. Please ensure all new code has appropriate tests. You can run tests with `npm test`.

Thank you for your contribution!
