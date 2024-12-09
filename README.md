// README.md
# @jdhillen/stylelint-config

JD Hillen's shareable Stylelint configuration.

## Installation

```bash
npm install --save-dev @jdhillen/stylelint-config stylelint@^16.0.0
```

## Usage

Create a `.stylelintrc.js` file in your project root:

```javascript
import jdhillenConfig from '@jdhillen/stylelint-config';

export default jdhillenConfig;
```

Or if you need to extend it:

```javascript
import jdhillenConfig from '@jdhillen/stylelint-config';

export default {
  ...jdhillenConfig,
  rules: {
    // Your overrides here
    'max-nesting-depth': 4
  }
};
```

### Add to package.json scripts

```json
{
  "scripts": {
    "lint:css": "stylelint \"**/*.css\"",
    "lint:css:fix": "stylelint \"**/*.css\" --fix"
  }
}
```

## Features

- Modern CSS syntax
- Alphabetical property ordering
- Consistent naming conventions
- Best practices enforcement
- Nesting depth control
- Modern color function notation
- Import notation standardization

## Rules Overview

### Code Quality
- Prevents duplicate properties and selectors
- Disallows empty blocks, comments, and sources
- Prevents shorthand property overrides

### Modern Syntax
- Uses modern color function notation
- Enforces prefix notation for media feature ranges
- Uses URL notation for imports

### Naming and Structure
- Enforces camelCase class names
- Limits nesting depth to 3 levels
- Limits selector complexity

### Formatting
- Lowercase hex colors
- Short hex notation when possible
- No units for zero values
- Percentage notation for alpha values

## Note for CommonJS Projects

If you're using this in a CommonJS project, you'll need to use dynamic imports:

```javascript
// .stylelintrc.cjs
module.exports = (async () => {
  const config = await import('@jdhillen/stylelint-config');
  return config.default;
})();
```