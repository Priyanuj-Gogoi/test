const sidebars = {
  bdscript: [
     'bdscript/intro',
    {
      type: 'category',
      label: 'Functions',
      link: { type: 'generated-index' },
      items: [
       'bdscript/functions/webhookUsername',
       'bdscript/functions/year'
      ]
    }
  ],
  javascript: [
    'javascript/intro',
    'javascript/objects',
    {
      type: 'category',
      label: 'Functions',
      link: { type: 'generated-index' },
      items: [ 'javascript/functions/ban' ]
    },
  ],
};

module.exports = sidebars;
