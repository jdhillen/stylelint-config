import { cssRules } from './rules/css.js';
import { sassRules } from './rules/sass.js';
import { bemRules } from './rules/bem.js';
import { vueRules } from './rules/vue.js';
import { markdownRules } from './rules/markdown.js';
import { ignoreRules } from './rules/ignore.js';

export default {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-standard-scss',
    'stylelint-config-standard-vue',
    'stylelint-config-recess-order'
  ],
  plugins: ['stylelint-scss'],
  customSyntax: 'postcss-html',
  rules: {
    ...cssRules,
    ...sassRules,
    ...bemRules,
    ...vueRules
  },
  overrides: [
    {
      files: ['*.scss', '**/*.scss'],
      customSyntax: 'postcss-scss'
    },
    {
      files: ['*.vue', '**/*.vue'],
      customSyntax: 'postcss-html'
    },
    {
      files: ['*.md', '**/*.md'],
      customSyntax: 'postcss-markdown',
      rules: { ...markdownRules }
    }
  ],
  ignore: ignoreRules
};
