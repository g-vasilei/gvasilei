import nextPlugin from "@next/eslint-plugin-next";
import tsParser from "@typescript-eslint/parser";
import tsPlugin from "@typescript-eslint/eslint-plugin";
import prettierConfig from "eslint-config-prettier";

const eslintConfig = [
  {
    ...nextPlugin.configs["core-web-vitals"],
    files: ["src/**/*.{ts,tsx}"],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        ecmaFeatures: { jsx: true },
      },
    },
    plugins: {
      ...nextPlugin.configs["core-web-vitals"].plugins,
      "@typescript-eslint": tsPlugin,
    },
    rules: {
      ...nextPlugin.configs["core-web-vitals"].rules,
      ...tsPlugin.configs.recommended.rules,
    },
  },
  {
    ...prettierConfig,
    files: ["src/**/*.{ts,tsx}"],
  },
];

export default eslintConfig;
