/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const tripWrap = props => css`
  padding: 20px 100px;

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
  grid-template-rows: repeat(1, 1fr);
  padding: 8px;
  gap: 20px;
`;

const tripItem = props => css`
  img {
    width: 100%;
    margin-right: 15px;
    border-radius: 10px;
    margin-bottom: 5px;
  }

  :hover {
    cursor: pointer;
  }
`;

const tripItemSubtitle = props => css`
  font-weight: 700;
  padding-bottom: 5px;
  overflow: hidden;
  letter-spacing: 1px;
`;

export { tripWrap, tripList, tripItem, tripItemSubtitle };
