// =================================================================================================
// ---- SASS ----
// =================================================================================================

export const sassRules = {
  // SASS/SCSS specific
  'at-rule-no-unknown': null,
  'scss/at-rule-no-unknown': true,
  'scss/selector-no-redundant-nesting-selector': true,
  'scss/no-duplicate-mixins': true,
  
  // SASS Variables and Mixins
  'scss/dollar-variable-pattern': '^[a-z][a-zA-Z0-9]+$',
  'scss/at-mixin-pattern': '^[a-z][a-zA-Z0-9]+$',
  'scss/at-function-pattern': '^[a-z][a-zA-Z0-9]+$',
  
  // SASS Comments
  'scss/double-slash-comment-empty-line-before': 'always',
  'scss/double-slash-comment-whitespace-inside': 'always'
};

export default sassRules;