// =================================================================================================
// ---- Vue ----
// =================================================================================================

export const vueRules = {
  'no-empty-source': null,
  'selector-pseudo-class-no-unknown': [
    true,
    {
      ignorePseudoClasses: ['deep', 'global', 'slotted']
    }
  ]
};

export default vueRules;
