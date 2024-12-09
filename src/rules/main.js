// =================================================================================================
// ---- Main ----
// =================================================================================================

export const mainRules = {
  // Modern CSS features
  'selector-class-pattern': '^[a-z][a-zA-Z0-9]+$',
  'max-nesting-depth': 3,
  'selector-max-compound-selectors': 3,
  'media-feature-range-notation': 'prefix',
  'alpha-value-notation': 'percentage',
  'color-function-notation': 'modern',
  
  // Additional quality rules
  'no-duplicate-selectors': true,
  'block-no-empty': true,
  'comment-no-empty': true,
  'no-empty-source': true,
  'length-zero-no-unit': true,
  
  // Property order
  'order/properties-alphabetical-order': true,

  // Disable comment formatting
  'comment-whitespace-inside': null,
  'comment-empty-line-before': null
 };
 
 export default mainRules;
 