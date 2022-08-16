import { ButtonHTMLAttributes } from 'react';

type Color = 'primary' | 'secondary';
type Size = 'sm' | 'md' | 'lg';
type SizeDetail = 'minWidth' | 'height' | 'width' | 'padding';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size: Size;
  color?: Color;
  isLoading?: boolean;
  disabled?: boolean;
  children: React.ReactNode;
}

export type { Color, Size, SizeDetail };
