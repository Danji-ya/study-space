/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const listContainer = props => css`
  padding: 0 24px;
  width: 840px;
  min-width: 50px;

  @media (max-width: 1128px) {
    width: 1128px;
  }

  @media (max-width: 768px) {
    background: orange;
  }
`;

// eslint-disable-next-line import/prefer-default-export
export { listContainer };
