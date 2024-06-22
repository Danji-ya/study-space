import { defineProperties, createSprinkles } from '@vanilla-extract/sprinkles';
import { global, semanticTokens } from './theme.css';

// Atomic CSS 제공
const colorProperties = defineProperties({
  conditions: {
    _light: {},
    _dark: { selector: ':root[data-theme="dark"] &' },
  },
  defaultCondition: '_light',
  properties: {
    background: { ...global.palette, ...semanticTokens.color },
    color: global.palette,
  },
});

const unresponsiveProperties = defineProperties({
  properties: {
    flexWrap: ['wrap', 'nowrap'],
    top: [0],
    bottom: [0],
    left: [0],
    right: [0],
    flexShrink: [0],
    flexGrow: [0, 1],
    zIndex: [-1, 0, 1],
    width: { full: '100%' },
    cursor: ['pointer'],
  },
  shorthands: {
    inset: ['top', 'bottom', 'left', 'right'],
  },
});

export const sprinkles = createSprinkles(
  unresponsiveProperties,
  colorProperties
);

export type Sprinkles = Parameters<typeof sprinkles>[0];
