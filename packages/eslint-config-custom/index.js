import nextVitals from 'eslint-config-next/core-web-vitals';
import nextTs from 'eslint-config-next/typescript';
import prettier from 'eslint-config-prettier/flat';
import turbo from 'eslint-config-turbo/flat';

export default [
  ...nextVitals,
  ...nextTs,
  ...turbo,
  prettier,
  {
    rules: {
      '@next/next/no-html-link-for-pages': 'off',
      'react/jsx-key': 'off',
    },
  },
];
