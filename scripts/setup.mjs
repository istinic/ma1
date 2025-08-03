import { fileURLToPath } from 'url';
import prompts from 'prompts';
import fs from 'fs-extra';
import path from 'path';
import choices from '../configs/setup-options.mjs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const rootPackageJsonPath = path.join(rootDir, 'package.json');

(async () => {
  const response = await prompts({
    type: 'select',
    name: 'config',
    message: 'Choose a configuration to apply to the root:',
    choices: choices,
    initial: 0,
  });

  const configDir = path.join(rootDir, 'configs', response.config);
  const templatePackageJsonPath = path.join(configDir, 'package.json');

  if (fs.existsSync(configDir) && fs.existsSync(templatePackageJsonPath)) {
    console.log(
      `Applying configuration from ${response.config} to the root...`
    );

    const templatePackageJson = fs.readJsonSync(templatePackageJsonPath);
    const cleanPackageJson = {
      name: 'TypescriptReactSetup',
      version: '1.0.0',
      description: 'Setup based on tested phone&desktop configs.',
      main: 'index.js',
      ...templatePackageJson,
      scripts: {
        ...(templatePackageJson.scripts || {}),
        setup: 'node ./setup.mjs',
      },
    };

    fs.writeJsonSync(rootPackageJsonPath, cleanPackageJson, { spaces: 2 });
    console.log('  - Applied clean package.json successfully.');

    const filesToCopy = [
      'tsconfig.json',
      'webpack.config.js',
      'vite.config.ts',
      'eslint.config.mjs',
      'tsconfig.app.json',
      'tsconfig.node.json',
    ];

    filesToCopy.forEach(file => {
      const source = path.join(configDir, file);
      const destination = path.join(rootDir, file);
      if (fs.existsSync(source)) {
        fs.copySync(source, destination, { overwrite: true });
        console.log(`  - Copied ${file}`);
      }
    });

    console.log(
      `\nSetup complete! The root directory has been configured with the ${response.config} template.`
    );
    console.log("Please run 'npm install' to install the new dependencies.");
  } else {
    console.error(
      `Error: Configuration directory "${configDir}" or its package.json not found.`
    );
  }
})();
