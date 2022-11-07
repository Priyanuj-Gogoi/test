// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Bot Designer for Discord - Unofficial Wiki',
  tagline: 'Create your own discord bot with BDFD today!',
  url: 'https://priyanuj-gogoi.github.io',
  baseUrl: '/docusaurus-test/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  onDuplicateRoutes: 'warn',
  favicon: 'img/favicon.ico',
  trailingSlash: false,
  organizationName: 'Priyanuj-Gogoi',
  projectName: 'docusaurus-test',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Bot Designer for Discord - Unofficial Wiki',
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Tutorial',
          },
          {
            href: 'https://github.com/facebook/docusaurus',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Community',
            items: [
              {
                label: 'Reddit',
                href: 'https://www.reddit.com/r/DiscordBotDesigner/',
              },
              {
                label: 'Discord',
                href: 'https://discord.com/servers/bot-designer-for-discord-official-server-566363823137882154',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Android App',
                href: 'https://play.google.com/store/apps/details?id=com.jakubtomana.discordbotdesinger',
              },
              {
                label: 'iOS App',
                href: 'https://apps.apple.com/app/bot-designer-for-discord/id1495536477',
              },
              {
                label: 'Web App',
                href: 'https://botdesignerdiscord.com/webapp',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/nilpointer-software/bdfd-wiki',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Priyanuj Gogoi.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
