export const ignoreRules = [
  // Dependencies
  'node_modules/**/*',

  // Build outputs
  'dist/**/*',
  'build/**/*',
  'out/**/*',
  '.output/**/*',
  '.nuxt/**/*',

  // Cache & Logs
  '.cache/**/*',
  '.temp/**/*',
  '*.log',

  // Editor directories
  '.idea/**/*',
  '.vscode/**/*',
  '*.sublime-*',

  // System files
  '.DS_Store',
  'Thumbs.db',

  // Test coverage
  'coverage/**/*',

  // Environment variables
  '.env*',
  '!.env.example',

  // Package manager files
  'package-lock.json',
  'yarn.lock',
  'pnpm-lock.yaml'
];

export default ignoreRules;
