const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

const config = {
  title: 'BDFD Docs',
  tagline: 'Documention of BDFD Functions, Callbacks, Features etc.',
  url: 'https://priyanuj-gogoi.github.io',
  baseUrl: '/test/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  onDuplicateRoutes: 'warn',
  trailingSlash: false,
  organizationName: 'Priyanuj-Gogoi',
  projectName: 'test',
  favicon: 'https://cdn.discordapp.com/emojis/980037317353930772.png',
  noIndex: true,
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  presets: [
    [
      'classic',
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
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
    ({
      navbar: {
        title: 'BDFD Docs',
        logo: {
           alt: 'BDFD Logo',
           src: 'https://cdn.discordapp.com/emojis/980037317353930772.png',
        },
        items: [
          {
             to: 'changelog',
             label: 'Changelog',
             position: 'left',
          },
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Tutorial',
          },
          {
            href: 'https://github.com/nilpointer-software/bdfd-wiki',
            position: 'right',
            label: 'GitHub',
          },
        ],
      },
      colorMode: {
           defaultMode: 'dark',
        },
      metadata : [
        { name: 'og:title', content: 'BDFD Docs' },
        { name: 'og:description', content: 'Unofficial documention of BDFD functions,  callbacks, features etc.' },
        { name: 'og:url', content: 'https://priyanuj.gogoi.github.io/test' },
        { name: 'og:type', content: 'website' },
        { name: 'theme-color', content: '#748bd4' }
      ],
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Community',
            items: [
              {
                label: 'Discord',
                href: 'https://discord.com/servers/bot-designer-for-discord-official-server-566363823137882154',
              },
              {
                label: 'Reddit',
                href: 'https://www.reddit.com/r/DiscordBotDesigner/'
              },
            ],
          },
          {
            title: 'External Links',
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
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} NilPointer Software. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
