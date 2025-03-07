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
export default {
  extends: '@jdhillen/stylelint-config',
  rules: {}
};
```

### Prettier Configuration

Create a `prettier.config.js` file in your project root:

```javascript
import { prettierConfig } from '@jdhillen/stylelint-config/prettier';

export default {
  ...prettierConfig
};
```

### Add to package.json scripts

```json
{
  "scripts": {
    "stylelint": "stylelint \"./src/**/*.{css,scss,vue,md}\" || true",
    "stylelint:fix": "stylelint \"./src/**/*.{css,scss,vue,md}\" || true --fix",
    "prettier": "prettier --check \"./src/**/*.{js,jsx,ts,tsx,vue,scss,css,md,json}\"",
    "prettier:fix": "prettier --write \"./src/**/*.{js,jsx,ts,tsx,vue,scss,css,md,json}\""
  }
}
```
