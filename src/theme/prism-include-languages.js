const prismIncludeLanguages = (Prism) => {
  // ...

  additionalLanguages.forEach((lang) => {
    require(`prismjs/components/prism-${lang}`);
  });

  require('/path/to/your/prism-language-definition');

  // ...
};
