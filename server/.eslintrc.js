module.exports = {
  env: {
    node: true,
    'jest/globals': true,
  },
  extends: [
    'airbnb-base',
    'plugin:jest/recommended',
    'plugin:jest/style',
    '../.eslintrc.js',
  ],
  plugins: ['jest', 'import'],
  rules: {
    '@typescript-eslint/unbound-method': 'off',
    '@typescript-eslint/explicit-member-accessibility': 'error',
    '@typescript-eslint/explicit-module-boundary-types': 'off',

    'unicorn/no-reduce': 'off',

    'no-useless-constructor': 'off',
    'class-methods-use-this': 'off',
    'max-classes-per-file': 'off',
  },
};
