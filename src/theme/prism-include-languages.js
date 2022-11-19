import siteConfig from '@generated/docusaurus.config';

export default function prismIncludeLanguages(Prism) {
  const { themeConfig: {prism} } = siteConfig;
  const {additionalLanguages} = prism;

  additionalLanguages.forEach((lang) => {
    require(`prismjs/components/prism-${lang}`);
  });

  Prism.languages.bds = require('./bdscript').definition;
}
