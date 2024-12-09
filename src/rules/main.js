// src/rules/main.js
export const mainRules = {
  // Modern CSS features
  'color-hex-case': 'lower',
  'color-hex-length': 'short',
  'declaration-no-important': true,
  'selector-class-pattern': '^[a-z][a-zA-Z0-9]+$',
  'max-nesting-depth': 3,
  'selector-max-compound-selectors': 3,
  'media-feature-range-notation': 'prefix',
  'alpha-value-notation': 'percentage',
  'color-function-notation': 'modern',
  
  // Additional quality rules
  'declaration-block-no-duplicate-properties': true,
  'no-duplicate-selectors': true,
  'block-no-empty': true,
  'comment-no-empty': true,
  'no-empty-source': true,
  'length-zero-no-unit': true,
  'declaration-block-no-shorthand-property-overrides': true,
  
  // Property order
  'order/properties-alphabetical-order': true
};

export default mainRules;
