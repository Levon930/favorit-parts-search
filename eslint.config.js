import js from '@eslint/js';
import { defineConfig, globalIgnores } from 'eslint/config';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import globals from 'globals';

const LAYERS = ['shared', 'entities', 'features', 'widgets', 'pages', 'app'];

const layerBoundaries = LAYERS.map((layer, index) => ({
  files: [`src/${layer}/**/*.{js,jsx}`],
  rules: {
    'no-restricted-imports': [
      'error',
      {
        patterns: [
          {
            group: ['@/*/*/*'],
            message: 'Импортируйте слайс через его публичный API (index.js).',
          },
          {
            group: LAYERS.slice(layer === 'shared' ? index + 1 : index).map((upper) => `@/${upper}/*`),
            message: `Слой ${layer} может импортировать только нижележащие слои.`,
          },
        ],
      },
    ],
  },
}));

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{js,jsx}'],
    extends: [js.configs.recommended, reactHooks.configs.flat.recommended, reactRefresh.configs.vite],
    languageOptions: {
      ecmaVersion: 'latest',
      globals: globals.browser,
      parserOptions: { ecmaFeatures: { jsx: true } },
    },
  },
  {
    files: ['*.config.js'],
    languageOptions: { globals: globals.node },
  },
  ...layerBoundaries,
]);
