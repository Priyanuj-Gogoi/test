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
        theme: {
  plain: { color: '#ffffff', backgroundColor: '#282c34' },
  styles: [
    // OceanicNext Theme
    { types: ['attr-name', 'keyword'], style: { color: '#c5a5c5' } },
    { types: ['attr-value', 'string', 'punctuation'], style: { color: '#8dc891' } },
    { types: ['comment', 'block-comment', 'prolog', 'doctype', 'cdata', 'shebang'], style: { color: '#999999' } },
    { types: ['property', 'number', 'function-name', 'constant', 'symbol', 'deleted'], style: { color: '#5a9bcf' } },
    { types: ['boolean'], style: { color: '#ff8b50' } },
    { types: ['tag'], style: { color: '#fc929e' } },
    { types: ['selector', 'char', 'builtin' 'inserted'], style: { color: '#D8DEE9' } },
    { types: ['function'], style: { color: '#79b6f2' } },
    { types: ['variable', 'operator', 'url', 'entity'], style: { color: '#d7deea' } },
    { types: ['atrule', 'class-name'], style: { color: '#FAC863' } },
    { types: ['important'], style: { fontWeight: '400' } },
    { types: ['bold'], style: { fontWeight: 'bold' } },
    { types: ['italic'], style: { fontStyle: 'italic' } },
    { types: ['namespace'], style: { opacity: 0.7 } },

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
