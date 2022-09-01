const withTM = require('next-transpile-modules')(['ui', 'contentsaurus']);

module.exports = withTM({
  reactStrictMode: true,
});
