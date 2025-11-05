import { configs as tseslintConfigs } from 'typescript-eslint'
import { defineConfig } from 'eslint/config'
import eslintPlugin from '@eslint/js'
import eslintPluginBetterTailwindcss from 'eslint-plugin-better-tailwindcss'
import eslintPluginPerfectionist from 'eslint-plugin-perfectionist'
import eslintPluginUnicorn from 'eslint-plugin-unicorn'
import eslintPluginUnusedImports from 'eslint-plugin-unused-imports'
import jsxA11yPlugin from 'eslint-plugin-jsx-a11y'
import nextPlugin from '@next/eslint-plugin-next'
import reactHooksPlugin from 'eslint-plugin-react-hooks'
import reactPlugin from 'eslint-plugin-react'

// Global ignores configuration
// Must be in its own config object to act as global ignores
const ignoresConfig = defineConfig([
    {
        name: 'project/ignores',
        ignores: ['.next/', 'node_modules/', 'public/', '.vscode/', 'next-env.d.ts', 'src/graphql/generated'],
    },
])

// ESLint recommended rules for JavaScript/TypeScript
const eslintConfig = defineConfig([
    {
        name: 'project/javascript-recommended',
        files: ['**/*.{js,mjs,ts,tsx}'],
        ...eslintPlugin.configs.recommended,
    },
])

// TypeScript configuration with type-checked rules
const typescriptConfig = defineConfig([
    {
        name: 'project/typescript-strict',
        files: ['**/*.{ts,tsx,mjs}'],
        extends: [...tseslintConfigs.strictTypeChecked, ...tseslintConfigs.stylisticTypeChecked],
        languageOptions: {
            parserOptions: {
                // Automatically detects tsconfig.json
                projectService: true,
                tsconfigRootDir: import.meta.dirname,
                ecmaFeatures: {
                    jsx: true,
                },
                warnOnUnsupportedTypeScriptVersion: true,
            },
        },
        rules: {
            '@typescript-eslint/array-type': ['error', { default: 'array' }],
            '@typescript-eslint/consistent-indexed-object-style': 'error',
            '@typescript-eslint/consistent-type-definitions': 'warn',
            '@typescript-eslint/no-extra-non-null-assertion': 'error',
            '@typescript-eslint/no-floating-promises': ['error', { ignoreIIFE: true, ignoreVoid: true }],
            '@typescript-eslint/no-for-in-array': 'error',
            '@typescript-eslint/no-inferrable-types': 'error',
            '@typescript-eslint/no-non-null-assertion': 'off',
            '@typescript-eslint/no-redundant-type-constituents': 'warn',
            '@typescript-eslint/no-require-imports': 'warn',
            '@typescript-eslint/no-this-alias': 'error',
            '@typescript-eslint/no-unnecessary-boolean-literal-compare': 'error',
            '@typescript-eslint/no-unnecessary-condition': 'error',
            '@typescript-eslint/no-unnecessary-qualifier': 'warn',
            '@typescript-eslint/no-unnecessary-type-arguments': 'error',
            '@typescript-eslint/no-unused-expressions': 'warn',
            '@typescript-eslint/no-unused-vars': ['warn', { args: 'all', argsIgnorePattern: '^_' }],
            '@typescript-eslint/no-useless-constructor': 'warn',
            '@typescript-eslint/no-useless-empty-export': 'warn',
            '@typescript-eslint/prefer-as-const': 'warn',
            '@typescript-eslint/prefer-for-of': 'warn',
            '@typescript-eslint/prefer-includes': 'warn',
            '@typescript-eslint/prefer-nullish-coalescing': 'error',
            '@typescript-eslint/prefer-optional-chain': 'error',
            '@typescript-eslint/require-await': 'error',
            '@typescript-eslint/restrict-template-expressions': 'off',
            '@typescript-eslint/switch-exhaustiveness-check': 'warn',
            '@typescript-eslint/no-misused-promises': 'off',
            '@typescript-eslint/no-unnecessary-template-expression': 'warn',
        },
    },
    // Disable type-checked rules for JavaScript files
    {
        name: 'project/javascript-disable-type-check',
        files: ['**/*.{js,mjs,cjs}'],
        ...tseslintConfigs.disableTypeChecked,
    },
])

// React and Next.js configuration
const reactConfig = defineConfig([
    {
        name: 'project/react-next',
        files: ['**/*.{jsx,tsx}'],
        plugins: {
            react: reactPlugin,
            'react-hooks': reactHooksPlugin,
            'jsx-a11y': jsxA11yPlugin,
            '@next/next': nextPlugin,
            'unused-imports': eslintPluginUnusedImports,
            perfectionist: eslintPluginPerfectionist,
            unicorn: eslintPluginUnicorn,
        },
        rules: {
            // React recommended rules
            ...reactPlugin.configs.recommended.rules,
            ...reactPlugin.configs['jsx-runtime'].rules,
            // React Hooks rules (use recommended-latest for latest features)
            ...reactHooksPlugin.configs['recommended-latest'].rules,
            // Accessibility rules (strict mode for better a11y)
            ...jsxA11yPlugin.configs.strict.rules,
            // Next.js recommended rules
            ...nextPlugin.configs.recommended.rules,
            // Next.js Core Web Vitals rules
            ...nextPlugin.configs['core-web-vitals'].rules,

            // Customizations for modern React/Next.js
            'react/react-in-jsx-scope': 'off', // Not needed in Next.js
            'react/prop-types': 'off', // Use TypeScript instead
            'react/no-unknown-property': 'off', // Conflicts with custom attributes
            'react/jsx-no-target-blank': 'off', // Next.js handles this
            'no-console': ['warn', { allow: ['warn', 'error', 'info'] }],
            'no-unused-vars': 'off',
            'object-shorthand': 'error',
            'prefer-const': ['error', { destructuring: 'all' }],
            'prefer-destructuring': 'error',
            'prefer-template': 'warn',
            'unused-imports/no-unused-imports': 'error',
            'react/jsx-newline': [
                'warn',
                {
                    prevent: true,
                },
            ],
            'react/self-closing-comp': [
                'error',
                {
                    component: true,
                    html: true,
                },
            ],

            // Perfectionist rules for code style consistency
            ...eslintPluginPerfectionist.configs['recommended-alphabetical'].rules,
            'perfectionist/sort-objects': [
                'error',
                {
                    partitionByNewLine: true,
                },
            ],
            'perfectionist/sort-imports': [
                'warn',
                {
                    type: 'alphabetical',
                    order: 'asc',
                    fallbackSort: { type: 'unsorted' },
                    ignoreCase: true,
                    specialCharacters: 'keep',
                    internalPattern: ['^~/.+', '^@/.+'],
                    partitionByComment: false,
                    partitionByNewLine: false,
                    newlinesBetween: 1,
                    maxLineLength: undefined,
                    groups: [
                        'type-import',
                        ['value-builtin', 'value-external'],
                        'type-internal',
                        'value-internal',
                        ['type-parent', 'type-sibling', 'type-index'],
                        ['value-parent', 'value-sibling', 'value-index'],
                        'ts-equals-import',
                        'unknown',
                    ],
                    customGroups: [],
                    environment: 'node',
                },
            ],

            // Unicorn rules adjustments
            ...eslintPluginUnicorn.configs.recommended.rules,
            'unicorn/prevent-abbreviations': 'off',
            'unicorn/no-useless-undefined': ['error', { checkArguments: false, checkArrowFunctionBody: false }],
            'unicorn/prefer-node-protocol': 'off',
            'unicorn/no-null': 'off',
            'unicorn/no-array-for-each': 'off',
            'unicorn/no-array-reduce': 'off',
            'unicorn/prefer-module': 'off',
            'unicorn/prefer-string-raw': 'off',
            'unicorn/prefer-array-some': 'off',
            'unicorn/prefer-global-this': 'off',

            // React Hooks specific rules
            'react-hooks/rules-of-hooks': 'error',
            'react-hooks/exhaustive-deps': 'warn',

            // Fine-tuned accessibility rules
            'jsx-a11y/alt-text': [
                'warn',
                {
                    elements: ['img'],
                    img: ['Image'], // Next.js Image component
                },
            ],
            'jsx-a11y/media-has-caption': 'warn',
            'jsx-a11y/aria-props': 'warn',
            'jsx-a11y/aria-proptypes': 'warn',
            'jsx-a11y/aria-unsupported-elements': 'warn',
            'jsx-a11y/role-has-required-aria-props': 'warn',
            'jsx-a11y/role-supports-aria-props': 'warn',
        },
        settings: {
            react: {
                version: 'detect', // Automatically detect React version
            },
        },
    },
])

// Tailwind CSS configuration
const tailwindConfig = defineConfig([
    {
        name: 'project/tailwindcss',
        files: ['**/*.{jsx,tsx}'],
        plugins: {
            'better-tailwindcss': eslintPluginBetterTailwindcss,
        },
        rules: {
            'better-tailwindcss/enforce-consistent-line-wrapping': [
                'warn',
                {
                    printWidth: 120,
                    preferSingleLine: true,
                },
            ],
            'better-tailwindcss/enforce-consistent-class-order': 'warn',
            'better-tailwindcss/enforce-consistent-variable-syntax': 'warn',
            'better-tailwindcss/enforce-consistent-important-position': 'warn',
            'better-tailwindcss/enforce-shorthand-classes': 'warn',
            'better-tailwindcss/no-duplicate-classes': 'warn',
            'better-tailwindcss/no-deprecated-classes': 'warn',
            'better-tailwindcss/no-unnecessary-whitespace': 'warn',
            'better-tailwindcss/no-unregistered-classes': 'warn',
            'better-tailwindcss/no-conflicting-classes': 'warn',
        },
        settings: {
            'better-tailwindcss': {
                entryPoint: 'src/app/globals.css',
            },
        },
    },
])

// Export the complete configuration
// Order matters: ignores first, then general configs, then specific overrides
export default defineConfig([...ignoresConfig, ...eslintConfig, ...typescriptConfig, ...reactConfig, ...tailwindConfig])
