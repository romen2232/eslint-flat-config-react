import reactPlugin from 'eslint-plugin-react';
import babelParser from '@babel/eslint-parser';

export default {
  files: [
    '**/*.js',
    '**/*.jsx',
    '**/*.cjs',
    '**/*.mjs',
    '**/*.ts',
    '**/*.tsx',
    '**/*.vue',
    '**/*.svelte',
  ],
  languageOptions: {
    parser: babelParser,
    parserOptions: {
      ecmaFeatures: {
        arrowFunctions: true,
        blockBindings: true,
        classes: true,
        defaultParams: true,
        destructuring: true,
        forOf: true,
        generators: false,
        modules: true,
        objectLiteralComputedProperties: true,
        objectLiteralDuplicateProperties: false,
        objectLiteralShorthandMethods: true,
        objectLiteralShorthandProperties: true,
        spread: true,
        superInFunctions: true,
        templateStrings: true,
        jsx: true,
      },
      requireConfigFile: false,
    },
  },

  // Register plugins
  plugins: {
    react: reactPlugin,
  },

  // Define the rules
  rules: {
    /**
     * Possible Errors
     */
    'comma-dangle': ['warn', 'never'],
    'no-cond-assign': ['error', 'except-parens'],
    'no-console': 'off',
    'no-constant-condition': 'error',
    'no-control-regex': 'warn',
    'no-debugger': 'off',
    'no-dupe-args': 'error',
    'no-dupe-keys': 'error',
    'no-duplicate-case': 'error',
    'no-empty-character-class': 'error',
    'no-empty': 'error',
    'no-ex-assign': 'error',
    'no-extra-boolean-cast': 'error',
    'no-extra-parens': 'off',
    'no-extra-semi': 'error',
    'no-func-assign': 'warn',
    'no-inner-declarations': 'off',
    'no-invalid-regexp': 'error',
    'no-irregular-whitespace': 'error',
    'no-negated-in-lhs': 'error',
    'no-obj-calls': 'error',
    'no-regex-spaces': 'error',
    'no-sparse-arrays': 'off',
    'no-unreachable': 'off',
    'use-isnan': 'error',
    'valid-jsdoc': 'off',
    'valid-typeof': 'off',
    'no-unexpected-multiline': 'error',

    /**
     * Best Practices
     */
    'accessor-pairs': 'error',
    'block-scoped-var': 'warn',
    complexity: 'off',
    'consistent-return': 'off',
    curly: ['error', 'multi-line'],
    'default-case': 'off',
    'dot-notation': 'off',
    'dot-location': 'off',
    eqeqeq: ['error', 'allow-null'],
    'guard-for-in': 'off',
    'no-alert': 'error',
    'no-caller': 'error',
    'no-div-regex': 'error',
    'no-else-return': 'off',
    'no-labels': 'error',
    'no-eq-null': 'off',
    'no-eval': 'warn',
    'no-extend-native': 'error',
    'no-extra-bind': 'warn',
    'no-fallthrough': 'off',
    'no-floating-decimal': 'error',
    'no-implicit-coercion': 'off',
    'no-implied-eval': 'error',
    'no-invalid-this': 'off',
    'no-iterator': 'error',
    'no-lone-blocks': 'error',
    'no-loop-func': 'error',
    'no-multi-spaces': 'error',
    'no-multi-str': 'error',
    'no-native-reassign': 'error',
    'no-new-func': 'error',
    'no-new-wrappers': 'warn',
    'no-new': 'error',
    'no-octal-escape': 'error',
    'no-octal': 'error',
    'no-param-reassign': 'off',
    'no-process-env': 'off',
    'no-proto': 'error',
    'no-redeclare': 'error',
    'no-return-assign': 'error',
    'no-script-url': 'error',
    'no-self-compare': 'error',
    'no-sequences': 'error',
    'no-throw-literal': 'error',
    'no-unused-expressions': 'error',
    'no-useless-call': 'warn',
    'no-void': 'error',
    'no-warning-comments': 'off',
    'no-with': 'error',
    radix: 'error',
    'vars-on-top': 'off',
    'wrap-iife': ['error', 'any'],
    yoda: ['warn', 'never'],

    /**
     * Strict Mode
     */
    strict: 'off',

    /**
     * Variables
     */
    'init-declarations': 'off',
    'no-catch-shadow': 'off',
    'no-delete-var': 'error',
    'no-label-var': 'error',
    'no-shadow-restricted-names': 'error',
    'no-shadow': 'off',
    'no-undef-init': 'error',
    'no-undef': 'error',
    'no-undefined': 'off',
    'no-unused-vars': [
      'error',
      { vars: 'all', args: 'none', varsIgnorePattern: '^React$' },
    ],
    'no-use-before-define': ['error', { functions: false, classes: true }],

    /**
     * Node.js
     */
    'callback-return': 'off',
    'handle-callback-err': 'off',
    'no-mixed-requires': 'warn',
    'no-new-require': 'error',
    'no-path-concat': 'error',
    'no-process-exit': 'off',
    'no-restricted-modules': 'off',
    'no-sync': 'off',

    /**
     * Stylistic Issues
     */
    'array-bracket-spacing': ['error', 'never'],
    'brace-style': ['error', '1tbs', { allowSingleLine: true }],
    camelcase: ['error', { properties: 'never' }],
    'comma-spacing': 'error',
    'comma-style': 'error',
    'computed-property-spacing': ['error', 'never'],
    'consistent-this': ['error', 'self'],
    'eol-last': 'error',
    'func-names': 'off',
    'func-style': 'off',
    'id-length': 'off',
    'id-match': 'off',
    indent: ['error', 4, { SwitchCase: 1 }],
    'jsx-quotes': ['error', 'prefer-double'],
    'key-spacing': 'error',
    'lines-around-comment': 'off',
    'linebreak-style': 'off',
    'max-nested-callbacks': ['error', 3],
    'new-cap': 'error',
    'new-parens': 'error',
    'newline-after-var': 'off',
    'no-array-constructor': 'error',
    'no-continue': 'off',
    'no-inline-comments': 'off',
    'no-lonely-if': 'error',
    'no-mixed-spaces-and-tabs': ['error', 'smart-tabs'],
    'no-multiple-empty-lines': 'error',
    'no-nested-ternary': 'error',
    'no-new-object': 'error',
    'no-spaced-func': 'error',
    'no-ternary': 'off',
    'no-trailing-spaces': 'error',
    'no-underscore-dangle': 'off',
    'no-unneeded-ternary': 'warn',
    'object-curly-spacing': ['error', 'always'],
    'one-var': [
      'error',
      {
        initialized: 'never',
      },
    ],
    'operator-assignment': 'off',
    'operator-linebreak': ['error', 'after'],
    'padded-blocks': ['error', 'never'],
    'quote-props': ['error', 'consistent-as-needed'],
    quotes: 'off',
    'semi-spacing': 'error',
    semi: 'error',
    'sort-vars': 'off',
    'keyword-spacing': 'error',
    'space-before-blocks': 'error',
    'space-before-function-paren': 'error',
    'space-in-parens': 'error',
    'space-infix-ops': 'error',
    'space-unary-ops': 'error',
    'spaced-comment': 'off',
    'wrap-regex': 'off',

    /**
     * ECMAScript 6
     */
    'arrow-parens': 'off',
    'arrow-spacing': 'error',
    'constructor-super': 'error',
    'generator-star-spacing': 'error',
    'no-class-assign': 'off',
    'no-const-assign': 'error',
    'no-this-before-super': 'error',
    'no-var': 'off',
    'object-shorthand': 'off',
    'prefer-const': 'off',
    'prefer-spread': 'error',
    'prefer-reflect': 'error',
    'require-yield': 'warn',

    /**
     * Legacy
     */
    'max-depth': ['warn', 3],
    'max-params': ['warn', 5],
    'max-len': ['warn', 120, 4, { ignoreComments: true, ignoreUrls: true }],
    'max-statements': 'off',
    'no-bitwise': 'off',
    'no-plusplus': 'off',

    /**
     * React plugin rules
     */
    'react/display-name': 'off',
    'react/forbid-prop-types': ['error', { forbid: ['any'] }],
    'react/jsx-boolean-value': 'error',
    'react/jsx-closing-bracket-location': 'off',
    'react/jsx-curly-spacing': ['error', 'never'],
    'react/jsx-indent-props': 'off',
    'react/jsx-max-props-per-line': 'off',
    'react/jsx-no-duplicate-props': 'error',
    'react/jsx-no-literals': 'off',
    'react/jsx-no-undef': 'error',
    'react/jsx-quotes': 'off',
    'react/jsx-sort-prop-types': 'off',
    'react/jsx-sort-props': 'off',
    'react/jsx-uses-react': 'off',
    'react/jsx-uses-vars': 'error',
    'react/no-danger': 'off',
    'react/no-did-mount-set-state': 'off',
    'react/no-did-update-set-state': 'error',
    'react/no-direct-mutation-state': 'error',
    'react/no-multi-comp': 'off',
    'react/no-set-state': 'off',
    'react/no-unknown-property': 'error',
    'react/prop-types': 'warn',
    'react/react-in-jsx-scope': 'error',
    'react/require-extension': 'off',
    'react/self-closing-comp': 'error',
    'react/jsx-wrap-multilines': 'error',
    'react/sort-comp': [
      'error',
      {
        order: [
          'mixins',
          'displayName',
          'propTypes',
          'defaultProps',
          'constructor',
          'getDefaultProps',
          'getInitialState',
          'getChildContext',
          'componentWillMount',
          'componentDidMount',
          'componentWillReceiveProps',
          'shouldComponentUpdate',
          'componentWillUpdate',
          'componentDidUpdate',
          'componentWillUnmount',
          // '/^component.+$/', // If you have regex-based ordering
          'everything-else',
          'render',
        ],
      },
    ],
  },
};
