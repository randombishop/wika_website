const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Wika Network',
  tagline: 'Make the internet a better place!',
  url: 'https://wika_website.github.io',
  baseUrl: '/wika_website/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'randombishop', // Usually your GitHub org/user name.
  projectName: 'wika_website', // Usually your repo name.
  themeConfig: {
    colorMode: {
      defaultMode: 'light',
      disableSwitch: true
    },
    navbar: {
      title: 'Wika Network',
      logo: {
        alt: 'Wika Logo',
        src: 'img/logo32.png',
      },
      items: [
        {
          type: 'doc',
          docId: 'intro',
          position: 'left',
          label: 'Documentation',
        }
      ]
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Community',
          items: [
            {
              label: 'Github',
              href: 'https://github.com/randombishop',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/sPEwJUmAwH',
            }
          ],
        },
        {
          title: 'Docs',
          items: [
            {
              label: 'White paper',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: 'Code',
          items: [
            {
              label: 'Browser Extension',
              href: 'https://github.com/randombishop/wika_browser_ext',
            },
            {
              label: 'Blockchain Node',
              href: 'https://github.com/randombishop/wika_node',
            },
            {
              label: 'This website',
              href: 'https://github.com/randombishop/wika_website',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Wika Network.`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/randombishop/wika_website',
        },
        blog: {
          showReadingTime: true,
          editUrl:
            'https://github.com/randombishop/wika_website',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
