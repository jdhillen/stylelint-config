// src/prettier.js
export const prettierConfig = {
  printWidth: 80,
  tabWidth: 2,
  useTabs: false,
  semi: true,
  singleQuote: true,
  trailingComma: 'all', // Updated to 'all' for modern JS
  bracketSpacing: true,
  bracketSameLine: false,
  arrowParens: 'always',
  endOfLine: 'lf',
  
  overrides: [
    {
      files: '*.css',
      options: {
        singleQuote: true
      }
    }
  ]
};

export default prettierConfig;