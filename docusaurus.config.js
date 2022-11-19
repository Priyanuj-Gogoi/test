const bdfd = require('./src/theme/bdscript').highlight;

const config = {
  title: 'BDFD Docs',
  tagline: 'Documention of BDFD Functions, Callbacks, Features etc.',
  url: 'https://priyanuj-gogoi.github.io', // Change
  baseUrl: '/test/', // Change
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  onDuplicateRoutes: 'throw',
  organizationName: 'Priyanuj-Gogoi',  // Change
  projectName: 'test', // Change
  trailingSlash: false,
  favicon: 'https://cdn.discordapp.com/emojis/980037317353930772.png',
  noIndex: true,
  presets: [
    [
      'classic',
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars'),
          editUrl: 'https://github.com/priyanuj-gogoi/test/edit/main/', // Change
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
          { label: 'Resources', type: 'doc', docId: 'bdscript/intro', position: 'left' }
        ],
       hideOnScroll: true
      },
      image: 'img/banner.jpg',
      colorMode: {
           defaultMode: 'dark',
       },
      metadata : [
        { name: 'og:title', content: 'Bot Designer for Discord • Documention' },
        { name: 'og:description', content: 'Unofficial documention of BDFD functions,  callbacks, features etc.' },
        { name: 'og:url', content: 'https://priyanuj.gogoi.github.io/test' }, // Change
        { name: 'theme-color', content: '#748bd4' }
      ],
      footer: {
        style: 'dark',
        logo: {
           alt: 'NilPointer Software Logo',
           src: 'img/nilpointer_software.png',
           href: 'https://nilpointer.software',
           width: 94,
           height: 87,
        },
        links: [
              { label: 'Discord', href:  'https://discord.com/servers/bot-designer-for-discord-official-server-566363823137882154' },
              { label: 'Reddit', href: 'https://www.reddit.com/r/DiscordBotDesigner/' },
              { label: 'Website', href: 'https://botdesignerdiscord.com' },
              { label: 'Web App', href: 'https://botdesignerdiscord.com/app' },
              { label: 'Android App', href: 'https://play.google.com/store/apps/details?id=com.jakubtomana.discordbotdesinger' },
              { label: 'iOS App', href: 'https://apps.apple.com/app/bot-designer-for-discord/id1495536477' }
        ],
        copyright: `Copyright © ${ new Date().getFullYear() } NilPointer Software`,
      },
      prism: {
        theme: bdfd
      }
    }),
};

module.exports = config;
