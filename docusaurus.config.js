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
        theme: {
  plain: { color: '#f8f8f2', backgroundColor: '#272822' },
  styles: [
    // Okadia Theme
    { types: ['changed'], style: { color: 'rgb(162, 191, 252)', fontStyle: 'italic' } },
    { types: ['deleted'], style: { color: '#f92672' } },
    { types: ['inserted'], style: { color: 'rgb(173, 219, 103)' } },
    { types: ['comment'], style: { color: '#8292a2', fontStyle: 'italic' } },
    { types: ['symbol'], style: { color: '#F7639C' }},
    { types: ['operator', 'tag', 'keyword'], style: { color: '#66d9ef' } },
    { types: ['string', 'url'], style: { color: '#a6e22e' } },
    { types: ['variable'], style: { color: '#f8f8f2' } },
    { types: ['number'], style: { color: '#ae81ff' } },
    { types: ['builtin', 'char', 'constant', 'function', 'class-name'], style: { color: '#e6db74' } },
    { types: ['punctuation'], style: { color: '#f8f8f2' } },
    { types: ['selector', 'doctype'], style: { color: '#a6e22e', fontStyle: 'italic' } },
    { types: ['boolean'], style: { color: '#ae81ff' } },
    { types: ['property'], style: { color: '#f92672' } },
    { types: ['namespace'], style: { color: 'rgb(178, 204, 214)' } },
    { types: ['attr-name'], style: { color: '#a6e22e !important' } },
    { types: ['rule'], style: { color: '#e6db74' } },
    { types: ['doctype'], style: { color: '#8292a2' } },

    // BDScript
    { types: ['bds-nomention'], style: { color: '#b25ae8' } },
    { types: ['bds-operator'], style: { color: '#44e2eb' } },
    { types: ['bds-escape-chars'], style: { color: '#baeda4' } },
    { types: ['bds-callbacks'], style: { color: '#eb9a44' } },
    { types: ['bds-variables'], style: { color: '#eb4444' } },
    { types: ['bds-http-funcs'], style: { color: '#f28fd3' } },
    { types: ['bds-if'], style: { color: '#a0eb44' } },
    { types: ['bds-async'], style: { color: '#dfeb44' } },
    { types: ['bds-try'], style: { color: '#7eeb44' } },
    { types: ['bds-embeds'], style: { color: '#34eb77' } },
    { types: ['bds-webhooks'], style: { color: '#d8b6db' } },
    { types: ['bds-func'], style: { color: '#5aade8' } },
    { types: ['bds-comment'], style: { color: '#b2afb3' } },
    { types: ['bds-symbol'], style: { color: '#eb446b' } },
  ],
}
      }
    }),
};
