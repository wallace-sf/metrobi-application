/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: [
    '@repo/eslint-config/library.js',
    'plugin:@typescript-eslint/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: true,
  },
  ignorePatterns: ['tailwindconfig.js', 'postcss.config.js'],
};
