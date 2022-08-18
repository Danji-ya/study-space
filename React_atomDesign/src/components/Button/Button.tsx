/* eslint-disable @typescript-eslint/no-use-before-define */
import { forwardRef } from 'react';
import styled from 'styled-components';
import { styling } from '../../utils';
import { BUTTON_BASE_STYLE, COLORS, SIZES } from './constants';
import { ButtonContentProps, ButtonProps } from './types';

const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const {
    size,
    color = 'primary',
    leftIcon,
    rightIcon,
    isLoading = false,
    disabled = false,
    children,
    ...rest
  } = props;

  const Component = styling(
    'button',
    BUTTON_BASE_STYLE,
    SIZES[size],
    COLORS[color],
  );

  const contentProps = { leftIcon, rightIcon, children };

  return (
    <Component ref={ref} disabled={disabled || isLoading} {...rest}>
      {isLoading ? (
        <span>loading...</span>
      ) : (
        <ButtonContent {...contentProps} />
      )}
    </Component>
  );
});

const IconWrapper = styled.span`
  display: inline-flex;
  align-items: 'center';
  justify-content: 'center';
  flex-shrink: 0; // defense icon shrink
`;

function ButtonContent({ leftIcon, rightIcon, children }: ButtonContentProps) {
  return (
    <>
      {leftIcon && <IconWrapper>{leftIcon}</IconWrapper>}
      {children}
      {rightIcon && <IconWrapper>{rightIcon}</IconWrapper>}
    </>
  );
}

export default Button;
