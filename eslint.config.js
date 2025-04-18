const eslintPluginTs = require('@typescript-eslint/eslint-plugin');
const parserTs = require('@typescript-eslint/parser');
const prettier = require('eslint-config-prettier');

/** @type {import("eslint").Linter.FlatConfig} */
module.exports = [
  {
    files: ['**/*.ts'],
    languageOptions: {
      parser: parserTs,
      ecmaVersion: 2020,
      sourceType: 'module',
    },
    plugins: {
      '@typescript-eslint': eslintPluginTs,
    },
    rules: {
      semi: ['error', 'always'],
      'space-before-function-paren': 'off',
      camelcase: 'off',
      'no-return-assign': 'off',
      quotes: ['error', 'single'],
      '@typescript-eslint/no-non-null-assertion': 'off',
      '@typescript-eslint/no-namespace': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
    },
  },
  prettier,
];
