import { forwardRef } from 'react';
import { styling } from '../../utils';
import {
  BUTTON_BASE_STYLE,
  BUTTON_ICON_WRAPPER_STYLE,
  COLORS,
  SIZES,
} from './constants';
import { ButtonContentProps, ButtonProps, IconWrapperProps } from './types';

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

function ButtonContent({ leftIcon, rightIcon, children }: ButtonContentProps) {
  return (
    <>
      {leftIcon && <IconWrapper icon={leftIcon} />}
      {children}
      {rightIcon && <IconWrapper icon={rightIcon} />}
    </>
  );
}

function IconWrapper({ icon }: IconWrapperProps) {
  const Component = styling('span', BUTTON_ICON_WRAPPER_STYLE);

  return <Component>{icon}</Component>;
}

export default Button;
