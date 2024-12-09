// README.md
# @jdhillen/stylelint-config

JD Hillen's shareable Stylelint configuration for Vue 3 with SASS/SCSS and Prettier support.

## Installation

```bash
npm install --save-dev @jdhillen/stylelint-config
```

## Usage

### StyleLint Configuration
Create a `stylelint.config.js` file in your project root:

```javascript
import stylelintConfig from '@jdhillen/stylelint-config';

export default stylelintConfig;
```

### Prettier Configuration
Create a `prettier.config.js` file in your project root:

```javascript
import prettierConfig from '@jdhillen/stylelint-config/prettier';

export default prettierConfig;
```

### Add to package.json scripts

```json
{
  "scripts": {
    "stylelint": "stylelint \"src/**/*.{css,scss,vue}\"",
    "stylelint:fix": "stylelint \"src/**/*.{css,scss,vue}\" --fix",
    "prettier": "prettier --write \"src/**/*.{js,jsx,ts,tsx,vue,scss,css,md,json}\"",
    "prettier:check": "prettier --check \"src/**/*.{js,jsx,ts,tsx,vue,scss,css,md,json}\"",
  }
}
```
