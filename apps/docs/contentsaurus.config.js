import remarkGfm from 'remark-gfm';

const config = {
  plugins: [
    [
      '@contentsaurus/blog',
      {
        remarkPlugins: [remarkGfm],
      },
    ],
  ],
};

export default config;
