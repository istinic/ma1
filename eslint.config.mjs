// eslint.config.mjs
import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import css from "@eslint/css";

export default [
  // Base config for JS/TS/React files
  {
    files: ["**/*.{js,mjs,cjs,ts,tsx,jsx}"],
    languageOptions: {
      globals: { ...globals.browser, ...globals.node }
    },
    plugins: {
      react: pluginReact
    },
    settings: {
      react: {
        version: "detect"
      }
    },
    rules: {
      ...js.configs.recommended.rules,
      ...pluginReact.configs.recommended.rules,
    }
  },
  
  // TypeScript specific rules
  ...tseslint.configs.recommended.map(config => ({
    ...config,
    files: ["**/*.{ts,tsx}"]
  })),
  
  // CSS files with CSS-specific rules
  {
    files: ["**/*.css"],
    plugins: {
      css: css
    },
    language: "css/css",
    rules: {
      ...css.configs.recommended.rules
    }
  },
  
  // Still ignore JSON and MD files if you don't want to lint them
  {
    ignores: ["**/*.json", "**/*.md"]
  }
];