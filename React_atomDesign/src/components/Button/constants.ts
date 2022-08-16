import { css } from 'styled-components';
import { Size, SizeDetail } from './types';

export const BUTTON_BASE_STYLE = css`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  outline: none;
  border: none;
  border-radius: 5px;
  color: #fff;
  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }
`;

export const SIZES: Record<Size, Record<SizeDetail, string>> = {
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

export const COLORS = {
  primary: {
    backgroundColor: '#314E89',
  },
  secondary: {
    backgroundColor: '#bcbaba',
  },
};
