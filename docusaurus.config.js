const bdfd = require('./src/theme/bdfd');
const discord = 'https://discord.com/servers/bot-designer-for-discord-official-server-566363823137882154';

const config = {
  title: 'BDFD Docs',
  tagline: 'Documention of BDFD Functions, Callbacks, Features etc.',
  url: 'https://priyanuj-gogoi.github.io',
  baseUrl: '/test/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  onDuplicateRoutes: 'throw',
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
          editUrl: 'https://github.com/priyanuj-gogoi/test/edit/main/',
          routeBasePath: '/',
          showLastUpdateTime: true
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],
 //  plugins: [['docusaurus-plugin-openapi-docs', { id: 'open-api', docsPluginId: 'classic', }]],
  themeConfig:
    ({
      navbar: {
        title: 'Bot Designer For Discord',
        items: [
          { label: 'Changelog', to: 'changelog', position: 'right' },
          { label: 'API', to: 'changelog', position: 'right'},
          { label: 'Getting Started', type: 'doc', docId: 'bdscript/intro', position: 'left' },
          { label: 'Callbacks', type: 'doc', docId: 'bdscript/intro', position: 'left' },
          { label: 'Premium', type: 'doc', docId: 'bdscript/intro', position: 'left' },
          { label: 'BDScript', type: 'doc', docId: 'bdscript/intro', position: 'left' },
          { label: 'JavaScript', type: 'doc', docId: 'javascript/intro', position: 'left' },
          { label: 'Guides', type: 'doc', docId: 'bdscript/intro', position: 'left' },
          { label: 'Resources', type: 'doc', docId: 'bdscript/intro', position: 'left' },
        ],
       hideOnScroll: true
      },
      image: 'img/banner.jpg',
      colorMode: {
           disableSwitch: true,
       },
      metadata : [
        { name: 'og:title', content: 'Bot Designer for Discord • Documention' },
        { name: 'og:description', content: 'Unofficial documention of BDFD functions,  callbacks, features etc.' },
        { name: 'og:url', content: 'https://priyanuj.gogoi.github.io/test' },
        { name: 'theme-color', content: '#748bd4' }
      ],
      footer: {
        logo: {
           alt: 'NilPointer Software Logo',
           src: 'img/nilpointer_software.png',
           href: 'https://nilpointer.software',
           width: 94,
           height: 87
        },
        style: 'dark',
        links: [
          {
            title: 'Community',
            items: [
              { label: 'Discord', href: discord },
              { label: 'Reddit', href: 'https://www.reddit.com/r/DiscordBotDesigner/' },
            ],
          },
          {
            title: 'External Links',
            items: [
              { label: 'Website', href: 'https://botdesignerdiscord.com' },
              { label: 'Android App', href: 'https://play.google.com/store/apps/details?id=com.jakubtomana.discordbotdesinger' },
              { label: 'iOS App', href: 'https://apps.apple.com/app/bot-designer-for-discord/id1495536477' },
              { label: 'Web App', href: 'https://botdesignerdiscord.com/app' },
            ],
          },
        ],
        copyright: `Copyright © ${ new Date().getFullYear() } NilPointer Software`,
      },
      prism: {
        theme: bdfd,
        darkTheme: bdfd,
        defaultLanguage: 'bdscript'
      },
      announcementBar: {
         backgroundColor: '#CAF0F8',
         content: `Need Help? Join us in our official <a target="_blank" title="Bot Designer For Discord Official Server" rel="noopener noreferrer" href="${discord}">Discord server</a>!`
      }
    }),
};

module.exports = config;
