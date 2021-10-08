/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const listMapContainer = props => css`
  flex: 1;
  height: 100vh;
  position: sticky;
  top: 80px;

  @media (max-width: 1128px) {
    display: none;
  }
`;

// eslint-disable-next-line import/prefer-default-export
export { listMapContainer };
