export const bemRules = {
  // Modern CSS features
  'selector-class-pattern': [
    '^[a-z][-a-z0-9]+(__[-a-z0-9]+)?(--[a-z0-9]+)?$',
    {
      message: (selector) => `Selector class ${selector} violates BEM Convention`,
      resolveNestedSelectors: true
    }
  ]
};

export default bemRules;
