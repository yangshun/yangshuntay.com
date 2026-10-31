import { cloudflare } from '@cloudflare/vite-plugin';
import tailwindcss from '@tailwindcss/vite';
import contentCollections from '@content-collections/vite';
import { voidReact } from '@void/react/plugin';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vite-plus';
import { voidPlugin } from 'void';

export default defineConfig(({ mode }) => {
  // Cloudflare packages the site after Void prerenders it.
  if (mode === 'cloudflare') {
    return {
      publicDir: 'dist/client',
      plugins: [cloudflare({ types: { generate: false } })],
    };
  }

  return {
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
  };
});
