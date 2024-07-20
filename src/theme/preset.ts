import { definePreset } from '@pandacss/dev';

import { keyframes } from './keyframes';
import { tokens } from './tokens';
import { semanticTokens } from './semanticTokens';
import { recipes } from './recipe';

const preset = definePreset({
  utilities: {
    background: {
      className: 'bg', // css({ background: "orange" }) => bg-orange
      shorthand: 'bg',
      values: 'colors', // connect values to the colors tokens
    },
    color: {
      className: 'color',
      values: 'colors', // connect values to the colors tokens
    },
    animation: {
      className: 'anim',
      values: 'animations',
    },
  },
  conditions: {
    dark: ':root[data-theme="dark"] &',
  },
  theme: {
    tokens,
    semanticTokens,
    recipes,
    keyframes,
  },
  // staticCss: {
  //   recipes: {
  //     button: ['*'],
  //   },
  //   css: [
  //     {
  //       // the values you want to generate for the CSS property. When set to *, all values defined in the tokens will be included.
  //       properties: {
  //         background: ['*'],
  //       },
  //     },
  //   ],
  // },
});

export default preset;
