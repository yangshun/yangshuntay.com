# yangshuntay.com

## Getting started

1. Install `vp` globally — https://viteplus.dev
2. Install the pinned Node.js runtime with `vp env install`.
3. Install dependencies with `vp install`.
4. Start the website with `vp run dev`.

Visit `http://yangshuntay.localhost:1355`.

## Common commands

- `vp run dev` starts the Next.js app through `portless`.
- `vp run build` runs the production Next.js build for `apps/website`.
- `vp run start` starts the production server for `apps/website`.
- `vp check` runs format, lint, and type checks across the workspace.
- `vp test` runs the workspace test suite.

Use `vp run build` for the website build. `vp build` is Vite+'s built-in Vite build command and is not wired to this Next.js app.
