/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const headerContainer = props => css`
  z-index: 1;
  background: white;
  display: flex;
  align-items: flex-start;
  position: fixed;
  width: 100%;
  height: ${props.isHeaderClick ? `180px` : `80px`};
  padding: 20px 20vw 0 20vw;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.05);
`;

// eslint-disable-next-line import/prefer-default-export
export { headerContainer };
