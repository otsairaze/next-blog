import { dirname } from "path";
import { fileURLToPath } from "url";

import { FlatCompat } from "@eslint/eslintrc";
import importPlugin from "eslint-plugin-import";
import prettierPlugin from "eslint-plugin-prettier";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    plugins: {
      prettier: prettierPlugin,
      import: importPlugin
    },
    settings: {
      "import/resolver": {
        typescript: {}
      }
    },
    rules: {
      "import/order": [
        "error",
        {
          groups: ["builtin", "external", "internal"],
          "newlines-between": "always",
          alphabetize: {
            order: "asc",
            caseInsensitive: true
          }
        }
      ],
      "max-len": ["error", { code: 120, ignoreComments: true }],
      "react/jsx-filename-extension": [2, { extensions: [".js", ".jsx", ".tsx"] }],
      "react/function-component-definition": [2, { namedComponents: "arrow-function" }],
      "react/react-in-jsx-scope": "off",
      "no-unused-vars": "warn",
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
  }
];

export default eslintConfig;
