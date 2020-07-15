module.exports = {
  env: {
    browser: true,
  },
  extends: ['airbnb', 'prettier/react', '../.eslintrc.js'],
  plugins: ['react', 'react-hooks', 'jsx-a11y', 'import'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    'react/jsx-filename-extension': [1, { extensions: ['.tsx'] }],
    'react/prop-types': 'off',
    'react/jsx-one-expression-per-line': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/require-default-props': 'warn',
    'react/default-props-match-prop-types': 'warn',
    'react/jsx-fragments': 'off',
    'react/jsx-boolean-value': ['error', 'never'],
    'react/jsx-handler-names': 'off',
  },
};
