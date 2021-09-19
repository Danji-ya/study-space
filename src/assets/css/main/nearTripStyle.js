/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const tripWrap = props => css`
  padding: 10px 100px;

  h2 {
    font-size: 32px;
    font-weight: 700;
    line-height: 52px;
    padding: 8px;
  }
`;

const tripList = props => css`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, 1fr);
  padding: 8px;
  gap: 20px;
`;

const tripItem = props => css`
  display: flex;
  align-items: center;
  cursor: pointer;

  img {
    width: 68px;
    height: 68px;
    margin-right: 15px;
    border-radius: 10px;
  }
`;

const tripItemTitle = props => css`
  font-weight: 600;
  padding-bottom: 5px;
  overflow: hidden;
`;

export { tripWrap, tripList, tripItem, tripItemTitle };
