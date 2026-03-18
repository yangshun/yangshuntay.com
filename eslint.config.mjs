import {defineConfig, globalIgnores} from 'eslint/config';
import customConfig from 'eslint-config-custom';

export default defineConfig([
  ...customConfig,
  {
    settings: {
      next: {
        rootDir: ['apps/*/'],
      },
    },
  },
  globalIgnores([
    '**/.next/**',
    '**/out/**',
    '**/build/**',
    '**/next-env.d.ts',
    '**/.content-collections/**',
  ]),
]);
