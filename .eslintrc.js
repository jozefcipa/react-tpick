'use strict'

module.exports = {
  plugins: ['react', '@typescript-eslint'],
  extends: [
    '@strv/eslint-config-typescript',
    '@strv/eslint-config-typescript/style',
    '@strv/eslint-config-react',
    '@strv/eslint-config-react/optional',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
  },
  rules: {
    'max-len': ['warn', 130, 2],
    'import/group-exports': 'off',
    'import/no-unresolved': 'off', // TODO: temp fix
  },
}
