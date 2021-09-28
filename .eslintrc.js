module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'linebreak-style': 'off',
    'react/jsx-filename-extension': 'off',
    'no-extra-semi': 'off',
    'import/no-unresolved': 'off',
    'react/self-closing-comp': 'off',
  },
};