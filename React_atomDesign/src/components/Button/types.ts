import React, { ButtonHTMLAttributes } from 'react';

export type Color = 'primary' | 'secondary';
export type Size = 'sm' | 'md' | 'lg';
export type SizeDetail = 'minWidth' | 'height' | 'width' | 'padding';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size: Size;
  color?: Color;
  isLoading?: boolean;
  disabled?: boolean;
  children: React.ReactNode;
  leftIcon?: React.ReactElement;
  rightIcon?: React.ReactElement;
}

export type ButtonContentProps = Pick<
  ButtonProps,
  'leftIcon' | 'rightIcon' | 'children'
>;
