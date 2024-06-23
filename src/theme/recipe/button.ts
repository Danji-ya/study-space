import { defineRecipe } from '@pandacss/dev';

export const button = defineRecipe({
  className: 'button',
  base: {
    display: 'flex',
  },
  variants: {
    visual: {
      solid: {
        bg: 'danger', // semantic token도 바로 사용이 가능
        color: {
          base: 'orange.700',
          _dark: 'orange.800',
        },
      },
      outline: {
        bg: 'danger', // semantic token도 바로 사용이 가능
        color: {
          base: 'orange.200',
          _dark: 'orange.300',
        },
      },
    },
    size: {
      small: {
        fontSize: '14px',
        padding: '4px 8px',
      },
      medium: {
        fontSize: '16px',
        padding: '8px 16px',
      },
      large: {
        fontSize: '18px',
        padding: '12px 24px',
      },
    },
  },
  defaultVariants: {
    visual: 'outline',
    size: 'small',
  },
  compoundVariants: [
    // apply when both small size and primary color are selected
    {
      size: 'small',
      visual: 'outline',
      css: {
        border: '2px solid blue',
      },
    },
  ],
});
