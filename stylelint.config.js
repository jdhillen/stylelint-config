import stylelintConfig from '@jdhillen/stylelint-config';

// Add any project-specific overrides here
const customRules = {
  // Example:
  // 'color-hex-length': 'long',
  // 'selector-class-pattern': null
};

export default {
  ...stylelintConfig,
  rules: {
    ...stylelintConfig.rules,
    ...customRules
  }
};
