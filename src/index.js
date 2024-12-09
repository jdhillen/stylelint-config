// =================================================================================================
// ---- Stylelint Config ----
// =================================================================================================

// ==|== Imports ===================================================================================
import { mainRules } from './rules/main.js';
import { sassRules } from './rules/sass.js';
import { vueRules } from './rules/vue.js';

export default {
 extends: [
   'stylelint-config-standard',
   'stylelint-config-standard-scss',
   'stylelint-config-standard-vue'
 ],
 plugins: [
   'stylelint-scss',
   'stylelint-order'
 ],
 customSyntax: 'postcss-html',
 rules: {
   ...mainRules,
   ...sassRules,
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
   }
 ],
 ignoreFiles: [
   'node_modules/**/*',
   'dist/**/*',
   'build/**/*'
 ]
};
