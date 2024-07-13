import {
  definePreset,
  defineSemanticTokens,
  defineTokens,
  Tokens,
} from '@pandacss/dev';

import { recipes } from './recipe';

export const keyframes = {
  spin: {
    to: {
      transform: 'rotate(360deg)',
    },
  },
  ping: {
    '75%, 100%': {
      transform: 'scale(2)',
      opacity: '0',
    },
  },
  pulse: {
    '50%': {
      opacity: '.5',
    },
  },
  bounce: {
    '0%, 100%': {
      transform: 'translateY(-25%)',
      animationTimingFunction: 'cubic-bezier(0.8,0,1,1)',
    },
    '50%': {
      transform: 'none',
      animationTimingFunction: 'cubic-bezier(0,0,0.2,1)',
    },
  },
};

export const animations = {
  spin: { value: 'spin 1s linear infinite' },
  ping: { value: 'ping 1s cubic-bezier(0, 0, 0.2, 1) infinite' },
  pulse: { value: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite' },
  bounce: { value: 'bounce 1s infinite' },
};

export const colors: Tokens['colors'] = {
  orange: {
    // DEFAULT: { value: '{colors.orange.500}' },
    50: { value: '#fff1f2' },
    100: { value: '#ffe4e6' },
    200: { value: '#fecdd3' },
    300: { value: '#fda4af' },
    400: { value: '#fb7185' },
    500: { value: '#f43f5e' },
    600: { value: '#e11d48' },
    700: { value: '#be123c' },
    800: { value: '#9f1239' },
    900: { value: '#881337' },
    950: { value: '#4c0519' },
  },
};

const tokens = defineTokens({
  animations,
  colors,
});

const semanticTokens = defineSemanticTokens({
  colors: {
    danger: {
      value: { base: '{colors.orange.950}', _dark: '{colors.orange.900}' },
    },
  },
});

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
