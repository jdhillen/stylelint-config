// =================================================================================================
// ---- Vue ----
// =================================================================================================

export const vueRules = {
  'selector-pseudo-class-no-unknown': [
    true,
    {
      ignorePseudoClasses: ['deep', 'global', 'slotted']
    }
  ]
};

export default vueRules;
