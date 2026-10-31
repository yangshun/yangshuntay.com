import { defineWranglerConfig } from 'wrangler/experimental-config';

export default defineWranglerConfig({
  assetsDirectory: './dist/client',
  types: { generate: false },
});
