module.exports = {
  root: true,
  env: {
    es6: true,
  },
  extends: [
    'plugin:import/typescript',
    'plugin:sonarjs/recommended',
    'plugin:promise/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:unicorn/recommended',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended',
  ],
  plugins: ['sonarjs', 'promise', 'immutable', 'unicorn', 'prettier'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  ignorePatterns: ['lib/**/*', 'node_modules/**/*'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      typescript: {},
    },
  },
  rules: {
    '@typescript-eslint/no-unused-vars': [
      'error',
      { varsIgnorePattern: '^_', argsIgnorePattern: '^_', ignoreRestSiblings: true },
    ],
    '@typescript-eslint/explicit-function-return-type': [
      'warn',
      {
        allowExpressions: true,
        allowTypedFunctionExpressions: true,
      },
    ],
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/member-ordering': 'error',
    '@typescript-eslint/generic-type-naming': 'off',
    '@typescript-eslint/no-base-to-string': 'off',
    '@typescript-eslint/unbound-method': 'off',

    'immutable/no-let': 'error',
    'immutable/no-mutation': 'error',

    'import/extensions': 'off',
    'import/prefer-default-export': 'off',
    'import/no-cycle': 'error',

    'prettier/prettier': 'warn',

    'sonarjs/cognitive-complexity': ['error', 20],

    'unicorn/prevent-abbreviations': 'warn',
    'unicorn/no-fn-reference-in-iterator': 'off',
    'unicorn/filename-case': [
      'error',
      {
        case: 'kebabCase',
      },
    ],

    'id-length': 'warn',
    'no-console': 'warn',
    'no-process-env': 'off',
    'no-underscore-dangle': 'off',
    'sort-imports': 'off',
  }
};
