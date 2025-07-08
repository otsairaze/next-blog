import { dirname } from "path";
import { fileURLToPath } from "url";

import { FlatCompat } from "@eslint/eslintrc";
import prettierPlugin from "eslint-plugin-prettier";
import storybook from "eslint-plugin-storybook";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    ignores: ["node_modules/**", ".next/**", "out/**", "dist/**"]
  },
  {
    plugins: {
      prettier: prettierPlugin
    },
    settings: {
      "import/resolver": {
        typescript: {}
      }
    },
    rules: {
      "max-len": ["error", { code: 120, ignoreComments: true }],
      "react/jsx-filename-extension": [2, { extensions: [".js", ".jsx", ".tsx"] }],
      "react/function-component-definition": [2, { namedComponents: "arrow-function" }],
      "react/react-in-jsx-scope": "off",
      "no-unused-vars": "warn",
      "@typescript-eslint/no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "error",
      "prettier/prettier": [
        "error",
        {
          printWidth: 120,
          endOfLine: "auto"
        }
      ],
      "import/no-unresolved": "off",
      "import/extensions": "off"
    }
  },
  ...storybook.configs["flat/recommended"],
  ...storybook.configs["flat/recommended"]
];

export default eslintConfig;
