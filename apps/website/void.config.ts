import { defineConfig } from 'void/config';

export default defineConfig({
  sourceDir: 'src',
  target: 'node',
  output: 'static',
  head: {
    title: 'Yangshun Tay Homepage',
    htmlAttrs: { lang: 'en' },
    bodyAttrs: { class: 'antialiased' },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        name: 'description',
        content:
          'Full Front End Stack Engineer, experienced in building products, design systems, user experience, and developer tooling.',
      },
    ],
  },
});
