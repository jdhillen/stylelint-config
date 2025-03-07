#!/usr/bin/env node

import { readFile, writeFile, mkdir } from 'fs/promises';
import { join } from 'path';
import { existsSync } from 'fs';

async function createStylelintConfig() {
  const stylelintConfigPath = join(process.cwd(), 'stylelint.config.js');

  if (existsSync(stylelintConfigPath)) {
    console.log('ℹ️ stylelint.config.js already exists');
    return;
  }

  const stylelintConfig = `import stylelintConfig from '@jdhillen/stylelint-config';

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
};`;

  console.log('📝 Creating stylelint.config.js...');
  await writeFile(stylelintConfigPath, stylelintConfig, 'utf8');
}

async function createPrettierConfig() {
  const prettierConfigPath = join(process.cwd(), 'prettier.config.js');

  if (existsSync(prettierConfigPath)) {
    console.log('ℹ️ prettier.config.js already exists');
    return;
  }

  const prettierConfig = `import { prettierConfig } from '@jdhillen/stylelint-config/prettier';

// Add any project-specific prettier overrides here
const customOptions = {
  // Example:
  // printWidth: 120,
  // tabWidth: 4
};

export default {
  ...prettierConfig,
  ...customOptions
};`;

  console.log('📝 Creating prettier.config.js...');
  await writeFile(prettierConfigPath, prettierConfig, 'utf8');
}

async function updatePackageJson() {
  try {
    const packagePath = join(process.cwd(), 'package.json');
    const packageContent = await readFile(packagePath, 'utf8');
    const packageJson = JSON.parse(packageContent);

    let modified = false;

    packageJson.scripts = packageJson.scripts || {};

    // Stylelint scripts
    if (!packageJson.scripts.stylelint) {
      console.log('📝 Adding stylelint script...');
      packageJson.scripts.stylelint = 'stylelint "**/*.{vue,css,scss}" --allow-empty-input';
      modified = true;
    } else {
      console.log('ℹ️ Stylelint script already exists');
    }

    if (!packageJson.scripts['stylelint:fix']) {
      console.log('📝 Adding stylelint:fix script...');
      packageJson.scripts['stylelint:fix'] = 'stylelint "**/*.{vue,css,scss}" --fix --allow-empty-input';
      modified = true;
    } else {
      console.log('ℹ️ Stylelint:fix script already exists');
    }

    // Prettier scripts
    if (!packageJson.scripts.prettier) {
      console.log('📝 Adding prettier script...');
      packageJson.scripts.prettier = 'prettier --check .';
      modified = true;
    } else {
      console.log('ℹ️ Prettier script already exists');
    }

    if (!packageJson.scripts['prettier:fix']) {
      console.log('📝 Adding prettier:fix script...');
      packageJson.scripts['prettier:fix'] = 'prettier --write .';
      modified = true;
    } else {
      console.log('ℹ️ Prettier:fix script already exists');
    }

    if (modified) {
      await writeFile(packagePath, JSON.stringify(packageJson, null, 2) + '\n', 'utf8');
      console.log('✅ Successfully updated package.json');
    } else {
      console.log('✨ No changes needed in package.json');
    }
  } catch (error) {
    console.error('❌ Error updating package.json:', error.message);
    return false;
  }

  return true;
}

async function createReleaseConfig() {
  const releaseConfigPath = join(process.cwd(), 'release.config.js');

  if (existsSync(releaseConfigPath)) {
    console.log('ℹ️ release.config.js already exists');
    return;
  }

  const releaseConfig = `import releaseConfig from '@jdhillen/release-config';

// Add any project-specific release config overrides here
const customOptions = {
  // Example:
  // branches: ['main', 'next'],
  // plugins: [
  //   // additional plugins
  // ]
};

export default {
  ...releaseConfig,
  ...customOptions
};`;

  console.log('📝 Creating release.config.js...');
  await writeFile(releaseConfigPath, releaseConfig, 'utf8');
}

async function setupStylelintConfig() {
  try {
    console.log('🚀 Setting up stylelint and prettier configuration...');

    await createStylelintConfig();
    await createPrettierConfig();
    await createReleaseConfig();
    const packageUpdated = await updatePackageJson();

    if (packageUpdated) {
      console.log('✅ Setup completed successfully');
    } else {
      console.log('❌ Setup failed');
      process.exit(1);
    }
  } catch (error) {
    console.error('❌ Error during setup:', error.message);
    process.exit(1);
  }
}

setupStylelintConfig();
