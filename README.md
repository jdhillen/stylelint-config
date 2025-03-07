# @jdhillen/stylelint-config

Stylelint and Prettier configuration for CSS, SCSS, and Vue.js projects with industry-standard rules for clean and consistent styling.

## Features

- CSS support with [stylelint-config-standard](https://github.com/stylelint/stylelint-config-standard)
- SCSS support with [stylelint-config-standard-scss](https://github.com/stylelint-scss/stylelint-config-standard-scss)
- Vue.js support with [stylelint-config-standard-vue](https://github.com/ota-meshi/stylelint-config-standard-vue)
- Property ordering with [stylelint-config-recess-order](https://github.com/stormwarning/stylelint-config-recess-order)
- BEM naming pattern validation
- Special handling for Markdown files
- Consistent rules for CSS and SCSS across files
- Integrated Prettier configuration with sensible defaults
- Auto-ignores common directories and files

## Installation

```bash
npm install --save-dev @jdhillen/stylelint-config
```

With npm v7+ peer dependencies (stylelint, prettier, sass, postcss) are automatically installed. For yarn or pnpm, or if you want to install specific versions:

```bash
# npm with specific versions
npm install --save-dev @jdhillen/stylelint-config stylelint@^16 prettier@^3 sass@^1 postcss@^8

# yarn
yarn add --dev @jdhillen/stylelint-config

# pnpm
pnpm add --save-dev @jdhillen/stylelint-config
```

## Usage

### Automatic Setup

After installing, you can use the setup script to automatically configure Stylelint and Prettier in your project:

```bash
npx setup-stylelint-config
```

This will:

1. Create a `stylelint.config.js` file in your project root
2. Create a `prettier.config.js` file in your project root
3. Add stylelint and prettier scripts to your package.json
4. Add a release.config.js if needed for semantic release

### Manual Configuration

If you prefer to set up manually, create the following files in the root of your project:

```js
// stylelint.config.js
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
```

```js
// prettier.config.js
import { prettierConfig } from '@jdhillen/stylelint-config/prettier';

// Add any project-specific prettier overrides here
const customOptions = {
  // Example:
  // printWidth: 120,
  // tabWidth: 4
};

export default {
  ...prettierConfig,
  ...customOptions
};
```

Then add the following scripts to your package.json:

```json
{
  "scripts": {
    "stylelint": "stylelint \"**/*.{vue,css,scss}\" --allow-empty-input",
    "stylelint:fix": "stylelint \"**/*.{vue,css,scss}\" --fix --allow-empty-input",
    "prettier": "prettier --check .",
    "prettier:fix": "prettier --write ."
  }
}
```

> The `--allow-empty-input` flag prevents errors when no matching files are found, which is helpful in CI/CD environments and with Git hooks like Husky.

### VSCode Integration

For a better development experience, install the [Stylelint VSCode extension](https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint) and [Prettier VSCode extension](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode).

Add the following to your VSCode settings:

```json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.codeActionsOnSave": {
    "source.fixAll.stylelint": "explicit"
  },
  "stylelint.validate": ["css", "scss", "vue"],
  "prettier.documentSelectors": ["**/*.{js,jsx,ts,tsx,vue,css,scss,json,md,yaml,yml}"]
}
```

## License

MIT
