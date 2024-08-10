// @ts-check

import eslint from '@eslint/js';
import { rules } from 'eslint-config-prettier';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  {
    rules: {
      ...rules,
      'no-undef': 'off',
    },
  },
);
