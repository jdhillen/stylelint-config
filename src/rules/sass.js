// =================================================================================================
// ---- SASS ----
// =================================================================================================

export const sassRules = {
  // Core SASS rules
  'at-rule-no-unknown': null,
  'scss/at-rule-no-unknown': true,
  'scss/selector-no-redundant-nesting-selector': true,
  'scss/no-duplicate-mixins': true,
  
  // Naming patterns
  'scss/dollar-variable-pattern': '^[a-z][a-zA-Z0-9]+$',
  'scss/at-mixin-pattern': '^[a-z][a-zA-Z0-9]+$',
  'scss/at-function-pattern': '^[a-z][a-zA-Z0-9]+$',

  // Comment formatting
  'scss/double-slash-comment-empty-line-before': ['always', {
    'except': ['first-nested']
  }],
  'scss/double-slash-comment-whitespace-inside': 'always',

  // Disabled spacing rules
  'custom-property-empty-line-before': null,
  'declaration-empty-line-before': null,
  'comment-empty-line-before': null,
  'scss/comment-no-empty': null
};

export default sassRules;