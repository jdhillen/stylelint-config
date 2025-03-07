export const vueRules = {
  'no-empty-source': null,
  'selector-pseudo-class-no-unknown': [
    true,
    {
      ignorePseudoClasses: ['deep', 'global', 'slotted']
    }
  ],
  'function-no-unknown': [
    true,
    {
      ignoreFunctions: ['v-bind']
    }
  ]
};

export default vueRules;
