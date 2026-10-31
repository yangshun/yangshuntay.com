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
- `vp run typecheck` generates Void types and checks the website's TypeScript.
- `vp check` runs format, lint, and type checks across the workspace.
- `vp test` runs the workspace test suite.

Use `vp run build` from the workspace root, or `vp build` inside `apps/website`.

The site uses Void's file-based React pages in `apps/website/src/pages`. Blog content stays in `apps/website/content/blog` and is compiled with Content Collections and MDX. All routes, including blog posts and Lunchbox examples, are prerendered at build time with their existing URLs and page metadata.

`apps/website/vercel.json` configures Vercel to serve the static build. Other static hosts can serve `apps/website/dist/client`; configure missing URLs to return `404.html` with a 404 status. Pages navigation also uses the generated `_void/pages` files, so publish the entire directory.
