import globals from "globals";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";


export default [
  {  rules: {
      'react/react-in-jsx-scope': 'off',
      'max-len': ['error', 150, 4, {
        ignoreUrls: true,
        ignoreComments: false,
        ignoreRegExpLiterals: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
      }],
      'jsx-a11y/alt-text': 'off',
      'jsx-a11y/img-redundant-alt': 'off',
      'jsx-a11y/aria-role': 'off',
      'jsx-a11y/no-access-key': 'off',
      'jsx-a11y/control-has-associated-label': 'off',
      'jsx-a11y/no-static-element-interactions': 'off',
      'jsx-a11y/click-events-have-key-events': 'off',
      'jsx-a11y/mouse-events-have-key-events': 'off',
      'import/prefer-default-export': 'off',
      'react/button-has-type': 'off',
      'react/prop-types': 'off',
      'jsx-a11y/label-has-associated-control': 'off',
      'consistent-return': 'off',
      'no-shadow': 'off',
      '@typescript-eslint/no-shadow': 'error',
      'react/destructuring-assignment': 'off',
      'react/jsx-props-no-spreading': 'off',
      'arrow-body-style': 'off',
      'no-unused-vars': 'error',
      'react/function-component-definition': 'off',
      'react/require-default-props': 'off',
      'react/no-unused-prop-types': 'off',
      '@typescript-eslint/no-unused-vars': ['error', {
        varsIgnorePattern: '^_',
        argsIgnorePattern: '^_',
      }],
      "function-paren-newline": 'off',
      'no-mixed-spaces-and-tabs': 'off',
    },},
  {files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"]},
  {languageOptions: { globals: globals.browser },
    },
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
];