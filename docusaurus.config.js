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
  url: 'http://yangshun.im',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  themeConfig: {
    internetProfiles,
    navbar: {
      title: 'Yangshun',
      links: [
        { to: 'blog', label: 'Blog', position: 'left' },
        { to: 'resume', label: 'Resume', position: 'left' },
        { to: 'bucket-list', label: 'Bucket List', position: 'left' },
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
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.json'),
        },
      },
    ],
  ],
};
