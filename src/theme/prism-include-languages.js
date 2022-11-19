import siteConfig from '@generated/docusaurus.config';

export default function prismIncludeLanguages(Prism) {
  const { themeConfig: {prism} } = siteConfig;
  const {additionalLanguages} = prism;
  const bdfd = require('./bdscript').definition;

  additionalLanguages.forEach((lang) => {
    require(`prismjs/components/prism-${lang}`);
  });

  Prism.languages.bds = bdfd;
}
