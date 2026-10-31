import { defineConfig, type CloudflareConfig } from 'cf/config';
import config from './cloudflare.json' with { type: 'json' };

export default defineConfig(config as CloudflareConfig);
