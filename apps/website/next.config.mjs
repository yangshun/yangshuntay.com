import {withContentlayer} from 'next-contentlayer';

const config = {
  transpilePackages: ['ui'],
  reactStrictMode: true,
};

export default withContentlayer(config);
