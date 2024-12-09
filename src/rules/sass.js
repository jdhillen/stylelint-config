// src/rules/sass.js
export const sassRules = {
  // SASS/SCSS specific
  'at-rule-no-unknown': null,
  'scss/at-rule-no-unknown': true,
  'scss/selector-no-redundant-nesting-selector': true,
  'scss/at-import-partial-extension': null,
  'scss/operator-no-newline-after': true,
  'scss/operator-no-unspaced': true,
  'scss/no-duplicate-mixins': true,
  
  // SASS Variables and Mixins
  'scss/dollar-variable-pattern': '^[a-z][a-zA-Z0-9]+$',
  'scss/at-mixin-pattern': '^[a-z][a-zA-Z0-9]+$',
  'scss/at-function-pattern': '^[a-z][a-zA-Z0-9]+$',
  'scss/at-extend-no-missing-placeholder': true,
  'scss/at-if-no-null': true,
  
  // SASS Comments
  'scss/double-slash-comment-empty-line-before': 'always',
  'scss/double-slash-comment-whitespace-inside': 'always',
  
  // SASS Imports
  'scss/load-no-partial-leading-underscore': true,
  'scss/at-import-no-partial-leading-underscore': true
};

export default sassRules;
