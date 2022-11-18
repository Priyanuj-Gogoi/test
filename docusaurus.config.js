module.exports = {
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
           disableSwitch: true,
       },
      metadata : [
        { name: 'og:title', content: 'Bot Designer for Discord • Documention' },
        { name: 'og:description', content: 'Unofficial documention of BDFD functions,  callbacks, features etc.' },
        { name: 'og:url', content: 'https://priyanuj.gogoi.github.io/test' }, // Change
        { name: 'theme-color', content: '#748bd4' }
      ],
      footer: {
        logo: {
           alt: 'NilPointer Software Logo',
           src: 'img/nilpointer_software.png',
           href: 'https://nilpointer.software',
           width: 94,
           height: 87,
           target: '_blank'
        },
        links: [
         {
            title: 'Community',
            items: [
              { label: 'Discord', href:  'https://discord.com/servers/bot-designer-for-discord-official-server-566363823137882154' },
              { label: 'Reddit', href: 'https://www.reddit.com/r/DiscordBotDesigner/' }
            ]
          },
          {
            title: 'Quick Links',
            items: [
              { label: 'Website', href: 'https://botdesignerdiscord.com' },
              { label: 'Web App', href: 'https://botdesignerdiscord.com/app' }
            ]
          },
          {
             title: 'Download',
             items: [
              { label: 'Android App', href: 'https://play.google.com/store/apps/details?id=com.jakubtomana.discordbotdesinger' },
              { label: 'iOS App', href: 'https://apps.apple.com/app/bot-designer-for-discord/id1495536477' }
             ]
           }
        ],
        copyright: `Copyright © ${ new Date().getFullYear() } NilPointer Software`,
      },
      prism: {
        theme: {
  plain: { color: '#d6deeb', backgroundColor: '#292d3e' },
  styles: [
    {
      types: ["changed"],
      style: {
        color: "rgb(162, 191, 252)",
        fontStyle: "italic",
      },
    },
    { types: ['deleted'], style: { color: '#f21D1D' }},
    { types: ['inserted'], style: { color: '#64F720' }},
    { types: ['comment'], style: { color: '#7F8787', fontStyle: 'italic' }},
    { types: ['symbol'], style: { color: '#F7639C' }},
    { types: ['keyword'], style: { color: '#8553FF' }},
    { types: ['callbacks'], style: { color: '#32A852' }},
    {
      types: ["string"],
      style: {
        color: "rgb(173, 219, 103)",
      },
    },
    {
      types: ["variable"],
      style: {
        color: "rgb(239, 71, 111)",
      },
    },
    {
      types: ["number"],
      style: {
        color: "rgb(247, 140, 108)",
      },
    },
    {
      types: ["builtin", "char", "constant", "function"],
      style: {
        color: "rgb(130, 170, 255)",
      },
    },
    {
      // This was manually added after the auto-generation
      // so that punctuations are not italicised
      types: ["punctuation"],
      style: {
        color: "rgb(199, 146, 234)",
      },
    },
    {
      types: ["selector", "doctype"],
      style: {
        color: "rgb(199, 146, 234)",
        fontStyle: "italic",
      },
    },
    {
      types: ["class-name"],
      style: {
        color: "rgb(255, 203, 139)",
      },
    },
    {
      types: ["tag"],
      style: {
        color: "rgb(127, 219, 202)",
      },
    },
    {
      types: ["boolean"],
      style: {
        color: "rgb(255, 88, 116)",
      },
    },
    {
      types: ["property"],
      style: { color: "rgb(128, 203, 196)" }
    },
    {
      types: ["namespace"],
      style: { color: "rgb(178, 204, 214)" }
    },
    {
      types: ['entity'],
      style: { color: "#FF6E6E" }
    },
    { types: ['url'], style: { color: '#8fbcff', fontStyle: 'italic' }},
    {
       types: ['operator'],
       style: { color: 'rgb(200,162,200)' }
    },
  ],
}
      }
    }),
};
