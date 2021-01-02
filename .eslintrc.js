module.exports = {
  env: {
    browser: true,
    es6: true
  },
  extends: [
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'standard',
    'prettier',
    'prettier/react',
    'prettier/@typescript-eslint'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 12,
    sourceType: 'module'
  },
  plugins: ['react', 'react-hooks', '@typescript-eslint', 'prettier'],
  rules: {
    'no-use-before-define': [0],
    '@typescript-eslint/no-use-before-define': [1],
    '@typescript-eslint/explicit-function-return-type': [0],
    '@typescript-eslint/explicit-module-boundary-types': [0],
    '@typescript-eslint/explicit-member-accessibility': 'off',
    'space-before-function-paren': 'off',
    'prettier/prettier': 'warn',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'react/jsx-filename-extension': [
      1,
      {
        extensions: ['.tsx']
      }
    ],

    'import/prefer-default-export': 'off',
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        ts: 'never',
        tsx: 'never'
      }
    ],
    'react/prop-types': 'off'
  },
  settings: {
    'import/resolver': {
      typescript: {}
    }
  }
}
