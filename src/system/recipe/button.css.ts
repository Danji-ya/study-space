import { recipe } from '@vanilla-extract/recipes';
import { sprinkles } from '../sprinkles.css';
import { vars } from '../theme.css';

export const button = recipe({
  base: {
    borderRadius: 6,
    outline: 'solid',
  },
  variants: {
    theme: {
      orange: [
        {
          opacity: '0.5',
          borderColor: vars.semanticTokens.color.mainBackground,
        },
        sprinkles({
          background: 'mainBackground',
          color: {
            _light: 'orange.200',
            _dark: 'orange.300',
          },
        }),
      ],
    },
  },
  defaultVariants: {
    theme: 'orange',
  },
});
