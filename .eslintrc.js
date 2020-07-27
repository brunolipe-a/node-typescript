module.exports = {
  env: {
    es2020: true,
    node: true,
  },
  extends: [
    'standard',
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint',
    'prettier/standard'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 11,
    sourceType: 'module'
  },
  plugins: ['@typescript-eslint', 'prettier', 'import-helpers'],
  rules: {
    "space-before-function-paren": "off",
    "no-new": "off",
    "no-prototype-builtins": "off",
    "no-restricted-syntax": "off",
    "max-classes-per-file": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "no-console": "off",
    "import/prefer-default-export": "off",
    "@typescript-eslint/explicit-function-return-type": ["off"],
    "@typescript-eslint/no-unused-vars": [
      "error",
      {
        "argsIgnorePattern": "_"
      }
    ],
    "no-useless-constructor": "off",
    "@typescript-eslint/naming-convention": [
      "error",
      {
        "selector": "interface",
        "format": ["PascalCase"],
        "custom": {
          "regex": "^I[A-Z]",
          "match": true
        }
      }
    ],
    "@typescript-eslint/explicit-module-boundary-types": ["warn", {
      "allowArgumentsExplicitlyTypedAsAny": true
    }],
    "no-underscore-dangle": "off",
    "@typescript-eslint/camelcase": "off",
    "prettier/prettier": "error",
    "class-methods-use-this": "off",
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        "js": "never",
        "jsx": "never",
        "ts": "never",
        "tsx": "never"
      }
    ],
    "import-helpers/order-imports": [
      "warn",
      {
        "newlinesBetween": "always", // new line between groups
        "groups": [
          "module",
          "/^@server\/shared/",
          "/^@/",
          ["parent", "sibling", "index"]
        ],
        "alphabetize": { "order": "asc", "ignoreCase": true }
      }
    ]
  },
  settings: {
    'import/resolver': {
      alias: {
        extensions: ['.ts', '.js', '.jsx', '.json']
      }
    }
  }
}
