// src/stylelint.js
export const stylelintConfig = {
  extends: ['stylelint-config-standard'],
  rules: {
    // Modern CSS best practices
    'color-hex-case': 'lower',
    'color-hex-length': 'short',
    'declaration-no-important': true,
    'selector-class-pattern': '^[a-z][a-zA-Z0-9]+$',
    'max-nesting-depth': 3,
    'selector-max-compound-selectors': 3,
    'selector-no-qualifying-type': true,
    
    // Modern CSS features
    'media-feature-range-notation': 'prefix', // For modern range syntax
    'import-notation': 'url', // Modern import syntax
    'length-zero-no-unit': true,
    'alpha-value-notation': 'percentage',
    'color-function-notation': 'modern',
    
    // Property order for better organization
    'order/properties-alphabetical-order': true
  },
  ignoreFiles: [
    'node_modules/**/*',
    'dist/**/*'
  ]
};

export default stylelintConfig;