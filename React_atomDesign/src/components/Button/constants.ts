import { Size, SizeDetail } from './types';

export const BUTTON_BASE_STYLE = {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  appearance: 'none',
  userSelect: 'none',
  verticalAlign: 'middle',
  outline: 'none',
  border: 0,
  color: '#fff',
  borderRadius: '5px',
  cursor: 'pointer',

  '&:hover': {
    opacity: 0.9,
  },
};

export const SIZES: Record<Size, Record<SizeDetail, string>> = {
  sm: {
    minWidth: '80px',
    height: '40px',
    width: '80px',
    padding: '5px',
  },
  md: {
    minWidth: '150px',
    height: '60px',
    width: '150px',
    padding: '7px',
  },
  lg: {
    minWidth: '200px',
    height: '80px',
    width: '200px',
    padding: '10px',
  },
};

export const COLORS = {
  primary: {
    backgroundColor: '#2b2d36',
  },
  secondary: {
    backgroundColor: '#cdced6',
  },
};
