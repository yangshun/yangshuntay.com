import remarkGfm from 'remark-gfm';

const config = {
  plugins: [
    [
      '@contentsaurus/blog',
      {
        path: './src/blog',
        remarkPlugins: [remarkGfm],
      },
    ],
  ],
};

export default config;
