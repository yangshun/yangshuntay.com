# yangshuntay.com

## Getting started

1. Install `vp` globally — https://viteplus.dev
2. Install the pinned Node.js runtime with `vp env install`.
3. Install dependencies with `vp install`.
4. Start the website with `vp run dev`.

Visit `http://yangshuntay.localhost:1355`.

## Common commands

- `vp run dev` starts the Void React app through `portless`.
- `vp run build` prerenders the website to `apps/website/dist/client`.
- `vp run start` previews the production build locally.
- `vp run deploy` builds and deploys the static site to Cloudflare Workers.
- `vp run typecheck` generates Void types and checks the website's TypeScript.
- `vp check` runs format, lint, and type checks across the workspace.
- `vp test` runs the workspace test suite.

Use `vp run build` from the workspace root, or `vp build` inside `apps/website`.

The site uses Void's file-based React pages in `apps/website/src/pages`. Blog content stays in `apps/website/content/blog` and is compiled with Content Collections and MDX. All routes, including blog posts and Lunchbox examples, are prerendered at build time with their existing URLs and page metadata.

Cloudflare serves the static output from `apps/website/dist/client`. Deployment settings live in `apps/website/cloudflare.json`. Void renders React and MDX at build time; Cloudflare hosts the generated files with clean URLs and a custom 404 page. There is no application Worker or server runtime. Both `www.yangshuntay.com` and `yangshuntay.com` are configured as custom domains; the existing Cloudflare redirect rule sends the apex to `www` and preserves paths and query strings.

Run `vp run deploy` from the workspace root to build and deploy. Wrangler uses a Cloudflare login for the personal account, or `CLOUDFLARE_API_TOKEN` for CI. The token must have access to the account configured in `cloudflare.json`. Pages navigation uses the generated `_void/pages` files, so publish the entire static directory.

## Git deployments

Cloudflare Workers Builds connects `yangshun/yangshuntay.com` to the `yangshuntay-com` Worker. Pushes to `main` deploy production from the repository root using Node.js 24.22.2:

- Build command: `./node_modules/.bin/vp run build`
- Deploy command: `cd apps/website && ./node_modules/.bin/vp exec wrangler deploy --config cloudflare.json`

Cloudflare installs the workspace dependencies using `pnpm-lock.yaml` and the pinned package manager before running the build. The deployed assets are the contents of `apps/website/dist/client`.
