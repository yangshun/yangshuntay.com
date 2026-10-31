# Website

From the workspace root, run:

```bash
vp run dev
```

`portless` is installed as a project dependency, so no separate global install is required.

Visit `http://yangshuntay.localhost:1355`.

Helpful commands:

- `vp run build`
- `vp run start`
- `vp run deploy` (Cloudflare Workers)
- `vp check`

The website runs on Void with React. Pages live in `src/pages`, and companion `.server.ts` files provide blog data and page metadata. `void.config.ts` enables static output; builds write the complete site to `dist/client`.
