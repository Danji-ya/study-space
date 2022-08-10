import styled, { css } from 'styled-components';
import { Color, Size, SizeDetail } from './types';

const SIZES: Record<Size, Record<SizeDetail, string>> = {
  sm: {
    minWidth: '100px',
    height: '100px',
    width: '100px',
    padding: '10px',
  },
  md: {
    minWidth: '200px',
    height: '200px',
    width: '200px',
    padding: '20px',
  },
  lg: {
    minWidth: '300px',
    height: '300px',
    width: '300px',
    padding: '30px',
  },
};

const COLORS = {
  primary: css`
    color: #fff;
    background-color: #3f3cfe;

    &:hover,
    &:focus {
      opacity: 0.8;
    }
  `,
  secondary: css`
    color: #000;
    background-color: #bcbaba;

    &:hover,
    &:focus {
      opacity: 0.8;
    }
  `,
};

const ButtonStyle = styled.button<ButtonProps>`
  ${(props) => SIZES[props.size]};
  ${(props) => props.color && COLORS[props.color]};
`;

interface ButtonProps {
  size: Size;
  color?: Color;
  isLoading?: boolean;
  disabled?: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  children: React.ReactNode;
}

export default function Button({
  size,
  color = 'primary',
  isLoading = false,
  disabled = false,
  onClick,
  children,
  ...restProps
}: ButtonProps) {
  return (
    <ButtonStyle
      onClick={onClick}
      size={size}
      color={color}
      disabled={disabled || isLoading}
      {...restProps}
    >
      {isLoading ? <span>loading...</span> : children}
    </ButtonStyle>
  );
}
