/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const descriptionContainer = props => css`
  display: flex;
  position: relative;
  width: 100%;
  padding: 4vh 0;
`;

const descLeftContainer = props => css`
  width: 63%;
`;

const descRightContainer = props => css`
  width: 37%;
  position: relative;
`;

export { descRightContainer, descLeftContainer, descriptionContainer };
