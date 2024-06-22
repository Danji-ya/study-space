import {
  createGlobalTheme,
  createGlobalThemeContract,
} from '@vanilla-extract/css';

const palette = {
  'orange.200': '#EA1113',
  'orange.300': '#EA8434',
} as const;

export const global = createGlobalThemeContract({
  palette: {
    'orange.200': '--palette-orange-200',
    'orange.300': '--palette-orange-300',
  },
});

export const semanticTokens = createGlobalThemeContract({
  color: {
    mainBackground: '--semantic-mainBackground',
  },
});

createGlobalTheme(':root[data-theme="dark"]', semanticTokens, {
  color: {
    mainBackground: '#1d1d1d',
  },
});

createGlobalTheme(
  ':root',
  {
    ...global,
    ...semanticTokens,
  },
  {
    palette,
    color: {
      mainBackground: 'red',
    },
  }
);

export const vars = { ...global, semanticTokens };
