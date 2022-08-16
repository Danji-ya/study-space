import { forwardRef } from 'react';
import { styling } from '../../utils';
import { BUTTON_BASE_STYLE, COLORS, SIZES } from './constants';
import { ButtonProps } from './types';

const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const {
    size,
    color = 'primary',
    isLoading = false,
    disabled = false,
    children,
    ...rest
  } = props;

  const Component = styling('button', {
    ...BUTTON_BASE_STYLE,
    ...SIZES[size],
    ...COLORS[color],
  });

  return (
    <Component ref={ref} disabled={disabled || isLoading} {...rest}>
      {isLoading ? <span>loading...</span> : children}
    </Component>
  );
});

export default Button;
