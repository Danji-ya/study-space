/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const prosDescContainer = props => css`
  padding: 4vh 0;
  border-bottom: 1px solid #dddddd;
`;

const prosDescTitle = props => css`
  font-size: 22px;
  font-weight: 600;

  margin-bottom: 15px;
`;

const prosDescItem = props => css`
  display: flex;

  &:first-of-type {
    margin-bottom: 24px;
  }

  &:last-of-type {
    margin-top: 24px;
  }

  div {
    flex: 1;
  }

  svg {
    display: block;
    height: 24px;
    width: 24px;
    fill: currentcolor;
    margin-right: 15px;
  }

  h3 {
    font-size: 16px;
    font-weight: 600;
    line-height: 20px;
  }

  p {
    color: rgb(113, 113, 113);
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
  }
`;

export { prosDescContainer, prosDescTitle, prosDescItem };
