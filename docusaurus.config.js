/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const internetProfiles = {
  github: {
    label: 'GitHub',
    href: 'https://github.com/yangshun',
  },
  stackoverflow: {
    label: 'StackOverflow',
    href: 'https://stackoverflow.com/u/1751946',
  },
  linkedin: {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/yangshun',
  },
  medium: {
    label: 'Medium',
    href: 'https://medium.com/@yangshun',
  },
  twitter: {
    label: 'Twitter',
    href: 'https://twitter.com/yangshunz',
  },
  facebook: {
    label: 'Facebook',
    href: 'https://facebook.com/yangshun',
  },
};

module.exports = {
  title: 'Yangshun Tay',
  tagline: 'Front End Engineer',
  url: 'https://yangshun.im',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'yangshun',
  projectName: 'yangshun.im',
  themeConfig: {
    internetProfiles,
    navbar: {
      title: 'Yangshun',
      items: [
        {to: 'blog', label: 'Blog', position: 'left'},
        {to: 'resume', label: 'Resume', position: 'left'},
        {to: 'goals', label: 'Life Goals', position: 'left'},
        {
          href: 'https://github.com/yangshun',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {},
        {
          title: 'Professional',
          items: [
            internetProfiles.github,
            internetProfiles.stackoverflow,
            internetProfiles.linkedin,
          ],
        },
        {
          title: 'Social',
          items: [
            internetProfiles.medium,
            internetProfiles.twitter,
            internetProfiles.facebook,
          ],
        },
        {},
      ],
    },
    gtag: {
      trackingID: 'UA-44622716-1',
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
