import tailwindcss from '@tailwindcss/vite';
import contentCollections from '@content-collections/vite';
import { voidReact } from '@void/react/plugin';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vite-plus';
import { voidPlugin } from 'void';

export default defineConfig({
  plugins: [
    tailwindcss(),
    contentCollections({ environment: 'ssr' }),
    voidPlugin(),
    voidReact({
      viewTransitions: true,
      react: { jsxImportSource: 'reclassify' },
    }),
  ],
  resolve: {
    alias: { '~': fileURLToPath(new URL('./src', import.meta.url)) },
  },
});
