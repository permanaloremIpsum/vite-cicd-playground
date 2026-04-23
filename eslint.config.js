import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import jsxA11y from "eslint-plugin-jsx-a11y";
import { defineConfig, globalIgnores } from "eslint/config";

export default defineConfig([
  globalIgnores(["dist", "node_modules"]),

  {
    files: ["**/*.{js,jsx,ts,tsx}"],

    extends: [js.configs.recommended, ...tseslint.configs.recommended],

    languageOptions: {
      globals: globals.browser,
    },

    plugins: {
      react: pluginReact,
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
      "jsx-a11y": jsxA11y,
    },

    settings: {
      react: {
        version: "detect",
      },
    },

    rules: {
      /*
      BASIC JS RULES
      */
      "no-console": "warn",
      "prefer-const": "error",
      "no-multi-spaces": "error",
      camelcase: "error",

      /*
      REACT RULES
      */
      "react/react-in-jsx-scope": "off",
      "react/jsx-pascal-case": "error",
      "react/jsx-closing-bracket-location": ["error", "tag-aligned"],
      "react/jsx-closing-tag-location": "error",
      "react/jsx-tag-spacing": ["error", { beforeSelfClosing: "always" }],
      "react/jsx-curly-spacing": ["error", { when: "never", children: true }],
      "react/jsx-boolean-value": ["error", "never"],
      "react/self-closing-comp": "error",
      "react/jsx-wrap-multilines": "error",
      "react/no-string-refs": "error",

      /*
      REACT HOOKS
      */
      ...reactHooks.configs.recommended.rules,

      /*
      VITE FAST REFRESH
      */
      "react-refresh/only-export-components": "warn",

      /*
      ACCESSIBILITY
      */
      "jsx-a11y/alt-text": "error",
      "jsx-a11y/img-redundant-alt": "error",
      "jsx-a11y/aria-role": ["error", { ignoreNonDOM: true }],
    },
  },
]);
