import {
  cleanBuildOutputDir,
  writeAssets,
  writeRootConfig,
  writeWorkerConfig,
} from '@cloudflare/build-output-utils';
import { resolveAndParseConfig } from '@cloudflare/config';
import { access, readFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('../', import.meta.url));
const assets = fileURLToPath(new URL('../dist/client/', import.meta.url));
const input = JSON.parse(
  await readFile(new URL('../cloudflare.json', import.meta.url), 'utf8'),
);
const context = { isPreview: false };
const result = await resolveAndParseConfig(input, context);

if (!result.success) {
  throw new Error(`Invalid cloudflare.json: ${result.error.message}`);
}

await access(new URL('../dist/client/index.html', import.meta.url));
await cleanBuildOutputDir(root);
await writeRootConfig(root, { accountId: result.data.accountId }, context);
await writeWorkerConfig({ root, config: result.data.worker });
await writeAssets({ root, sourceDirectory: assets });
