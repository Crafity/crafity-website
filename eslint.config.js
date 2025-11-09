import js from '@eslint/js'
import cssModules from 'eslint-plugin-css-modules'
import formatjs from 'eslint-plugin-formatjs'
import jszA11y from 'eslint-plugin-jsx-a11y'
import prettier from 'eslint-plugin-prettier/recommended'
import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import simpleImportSort from 'eslint-plugin-simple-import-sort'
import sortDestructureKeys from 'eslint-plugin-sort-destructure-keys'
import sortKeysFix from 'eslint-plugin-sort-keys-fix'
import typescriptSortKeys from 'eslint-plugin-typescript-sort-keys'
import unicorn from 'eslint-plugin-unicorn'
import unusedImports from 'eslint-plugin-unused-imports'
import tseslint from 'typescript-eslint'

// ============================================================================
// Language Options
// ============================================================================

const baseLanguageOptions = {
  parser: tseslint.parser,
  parserOptions: {
    ecmaVersion: 'latest',
    projectService: {
      allowDefaultProject: ['eslint.config.js'],
      defaultProject: 'tsconfig.json',
    },
    sourceType: 'module',
    tsconfigRootDir: import.meta.dirname,
  },
}

const jsxLanguageOptions = {
  ...baseLanguageOptions,
  parserOptions: {
    ...baseLanguageOptions.parserOptions,
    ecmaFeatures: {
      jsx: true,
    },
  },
}

// ============================================================================
// Configuration
// ============================================================================

export default [
  // Global ignores
  {
    ignores: [
      '.nitro/**',
      '.output/**',
      '.tanstack/**',
      'node_modules/**',
      'public/storybook/**',
      '**/*.mdx',
    ],
  },

  // Base configurations
  js.configs.recommended,
  ...tseslint.configs.recommended,

  // CSS Modules
  {
    ...cssModules.configs.recommended,
    plugins: { 'css-modules': cssModules },
  },

  // JSX Accessibility
  jszA11y.flatConfigs.strict,

  // Prettier (moet als laatste in extends)
  prettier,

  // ============================================================================
  // File-specific configurations
  // ============================================================================

  // CommonJS files
  {
    files: ['**/*.{cjs,js}'],
    languageOptions: {
      globals: {
        __dirname: 'readonly',
        __filename: 'readonly',
        module: 'readonly',
        require: 'readonly',
      },
    },
  },

  // All JavaScript/TypeScript files
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    ignores: ['src/routeTree.gen.ts'],
    languageOptions: baseLanguageOptions,
    plugins: {
      'simple-import-sort': simpleImportSort,
      'sort-destructure-keys': sortDestructureKeys,
      'sort-keys-fix': sortKeysFix,
      'typescript-sort-keys': typescriptSortKeys,
      unicorn,
      'unused-imports': unusedImports,
    },
    rules: {
      // ============================================================================
      // TypeScript Rules
      // ============================================================================
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/explicit-member-accessibility': 'off',
      '@typescript-eslint/no-deprecated': 'error',
      '@typescript-eslint/no-non-null-assertion': 'off',
      '@typescript-eslint/no-unnecessary-condition': 'error',
      '@typescript-eslint/no-unused-vars': 'off',
      '@typescript-eslint/no-var-requires': 'off',

      // ============================================================================
      // ESLint Core Rules
      // ============================================================================
      eqeqeq: ['error', 'smart'],
      'no-console': ['error', { allow: ['warn', 'error'] }],
      'no-duplicate-imports': 'error',
      'no-restricted-exports': [
        'off',
        { restrictDefaultExports: { direct: true } },
      ],
      'no-unused-vars': 'off',
      'no-useless-concat': 'error',
      'no-warning-comments': 'warn',
      'object-shorthand': ['error', 'always'],
      'prefer-template': 'error',

      // ============================================================================
      // Import Sorting
      // ============================================================================
      'simple-import-sort/exports': 'error',
      'simple-import-sort/imports': [
        'error',
        {
          groups: [
            // React first, then external packages
            ['^react', String.raw`^@?\w`],
            // Internal packages
            ['^(components|modules|utils)(/.*|$)'],
            // Side effect imports
            [String.raw`^\u0000`],
            // Parent imports
            [String.raw`^\.\.(?!/?$)`, String.raw`^\.\./?$`],
            // Relative imports
            [
              String.raw`^\./(?=.*/)(?!/?$)`,
              String.raw`^\.(?!/?$)`,
              String.raw`^\./?$`,
            ],
            // Style imports
            [String.raw`^.+\.s?css$`],
          ],
        },
      ],

      // ============================================================================
      // Sorting Rules
      // ============================================================================
      'sort-destructure-keys/sort-destructure-keys': [
        'error',
        { caseSensitive: false },
      ],
      'sort-keys-fix/sort-keys-fix': 'error',
      'typescript-sort-keys/interface': 'error',
      'typescript-sort-keys/string-enum': 'error',

      // ============================================================================
      // Unicorn Rules
      // ============================================================================
      ...unicorn.configs['flat/all'].rules,
      'unicorn/catch-error-name': 'off',
      'unicorn/no-array-callback-reference': 'off',
      'unicorn/no-array-for-each': 'off',
      'unicorn/no-array-reduce': 'off',
      'unicorn/no-keyword-prefix': 'off',
      'unicorn/no-null': 'off',
      'unicorn/no-object-as-default-parameter': 'off',
      'unicorn/prefer-global-this': 'off',
      'unicorn/prevent-abbreviations': 'off',
      'unicorn/switch-case-braces': ['error', 'avoid'],

      // ============================================================================
      // Unused Imports
      // ============================================================================
      'unused-imports/no-unused-imports': 'error',
      'unused-imports/no-unused-vars': [
        'error',
        {
          args: 'after-used',
          argsIgnorePattern: '^_',
          vars: 'all',
          varsIgnorePattern: '^_',
        },
      ],
    },
  },

  // React/JSX files
  {
    files: ['**/*.{jsx,tsx}'],
    languageOptions: jsxLanguageOptions,
    plugins: {
      formatjs,
      react,
      'react-hooks': reactHooks,
    },
    rules: {
      // ============================================================================
      // JSX A11y Rules
      // ============================================================================
      'jsx-a11y/no-autofocus': 'off',

      // ============================================================================
      // React Hooks Rules
      // ============================================================================
      'react-hooks/exhaustive-deps': 'error',

      'react-hooks/rules-of-hooks': 'error',

      // ============================================================================
      // React Rules
      // ============================================================================
      'react/jsx-curly-brace-presence': [
        'error',
        { children: 'ignore', props: 'never' },
      ],

      'react/jsx-filename-extension': [
        'warn',
        { extensions: ['.jsx', '.tsx', '.mdx'] },
      ],

      'react/jsx-sort-props': [
        'error',
        { ignoreCase: true, reservedFirst: true, shorthandFirst: true },
      ],

      'react/jsx-uses-react': 'off',

      'react/prop-types': 'off',
      'react/react-in-jsx-scope': 'off',
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
]
