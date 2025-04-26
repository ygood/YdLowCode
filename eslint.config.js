import js from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import pluginVue from 'eslint-plugin-vue';
import { defineConfig } from 'eslint/config';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';

const ignores = [
  'node_modules',
  'dist/',
  'test',
  'build/',
  '.vscode',
  '.github',
  '.husky',
  '.stylelintrc.cjs',
  '.prettierrc.cjs',
  'commitlint.config.cjs',
  'src/vite-env.d.ts',
];

export default defineConfig([
  {
    files: ['**/*.{js,mjs,cjs,ts,vue}'],
    plugins: { js },
    extends: ['js/recommended'],
    ignores,
  },
  { files: ['**/*.{js,mjs,cjs,ts,vue}'], languageOptions: { globals: globals.browser }, ignores },
  tseslint.configs.recommended,
  eslintPluginPrettierRecommended,
  pluginVue.configs['flat/essential'],
  { files: ['**/*.vue'], languageOptions: { parserOptions: { parser: tseslint.parser } }, ignores },
]);
