/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const hostDescContainer = props => css`
  display: flex;
  align-items: center;
  padding: 2.5vh 0;
  border-bottom: 1px solid #dddddd;
`;

const hostTitle = props => css`
  font-size: 22px;
  font-weight: 400;
  padding-bottom: 8px;

  span {
    font-weight: 600;
  }
`;
const hostSubtitle = props => css`
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
`;

export { hostDescContainer, hostTitle, hostSubtitle };
