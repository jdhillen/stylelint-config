// =================================================================================================
// ---- Prettier ----
// =================================================================================================

export const prettierRules = {
  // Line Formatting
  printWidth: 100,
  endOfLine: 'lf',
  
  // Indentation
  tabWidth: 2,
  useTabs: false,
  
  // Quotes and Punctuation
  semi: true,
  singleQuote: true,
  trailingComma: 'none',
  
  // Spacing and Brackets
  bracketSpacing: true,
  bracketSameLine: false,
  arrowParens: 'always',
  
  // Vue Specific
  singleAttributePerLine: true,
  vueIndentScriptAndStyle: true
};

export default prettierRules;
