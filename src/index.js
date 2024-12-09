import { mainRules } from './rules/main.js';
import { sassRules } from './rules/sass.js';
import { vueRules } from './rules/vue.js';
import { prettierRules } from './rules/prettier.js';

export default {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-standard-scss',
    'stylelint-config-standard-vue'
  ],
  plugins: [
    'stylelint-scss',
    'stylelint-order',
  ],
  customSyntax: 'postcss-html',
  rules: {
    ...mainRules,
    ...sassRules,
    ...vueRules
  },
  overrides: [
    {
      files: ['*.vue', '**/*.vue'],
      rules: {
        'selector-pseudo-class-no-unknown': [
          true,
          {
            ignorePseudoClasses: ['deep', 'global', 'slotted']
          }
        ]
      }
    },
    {
      files: ['*.scss', '**/*.scss', '*.vue', '**/*.vue'],
      customSyntax: 'postcss-scss'
    }
  ],
  ignoreFiles: [
    'node_modules/**/*',
    'dist/**/*',
    'build/**/*'
  ]
};
