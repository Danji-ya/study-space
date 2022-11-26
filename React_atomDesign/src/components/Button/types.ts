import React, { ButtonHTMLAttributes, HtmlHTMLAttributes } from 'react';

export type Color = 'primary' | 'secondary';
export type Size = 'sm' | 'md' | 'lg';
export type SizeDetail = 'minWidth' | 'height' | 'width' | 'padding';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size: Size;
  color?: Color;
  isLoading?: boolean;
  disabled?: boolean;
  children: React.ReactNode;
  iconSpacing: string;
  leftIcon?: React.ReactElement;
  rightIcon?: React.ReactElement;
}

export interface IconWrapperProps {
  icon: React.ReactElement;
  marginRight?: string;
  marginLeft?: string;
}

export type ButtonContentProps = Pick<
  ButtonProps,
  'leftIcon' | 'rightIcon' | 'iconSpacing' | 'children'
>;
