const config = {
  transpilePackages: ['ui', '@contentsaurus/blog'],
  reactStrictMode: true,
  webpack: (config, options) => {
    // TODO: Shift into @contentsaurus/next.
    config.module.rules.push({
      test: /contentsaurus\.config/,
      use: [options.defaultLoaders.babel],
    });
    return config;
  },
};

export default config;
