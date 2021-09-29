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
    'import/prefer-default-export': 'off',
    'react/prop-types': 'off',
    'react/jsx-boolean-value': 'off',
    'no-unused-vars': ['error', { argsIgnorePattern: 'item' }],
    'no-alert': 'off',
  },
};
