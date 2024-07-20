import { defineSemanticTokens } from '@pandacss/dev';

export const semanticTokens = defineSemanticTokens({
  colors: {
    danger: {
      value: { base: '{colors.orange.950}', _dark: '{colors.orange.900}' },
    },
  },
});
