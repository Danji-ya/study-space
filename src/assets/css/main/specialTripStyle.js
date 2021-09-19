/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const stWrap = props => css`
  padding: 20px 100px;

  h2 {
    font-size: 32px;
    font-weight: 700;
    line-height: 52px;
    padding: 8px;
  }
`;

const stList = props => css`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(1, 1fr);
  padding: 5px;
  gap: 20px;
`;

const stRecommandWrap = props => css`
  position: absolute;
  top: 10px;
  left: 10px;
  background: white;
  padding: 8px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: flex-start;

  span {
    line-height: 17px;
  }
`;

const stListItem = props => css`
  position: relative;
  cursor: pointer;
  img {
    width: 100%;
    margin-right: 15px;
    border-radius: 10px;
    margin-bottom: 5px;
  }

  h3 {
    font-weight: 700;
    overflow: hidden;
    letter-spacing: 1px;
    padding-bottom: 8px;
  }

  p {
    font-size: 13px;
  }
`;

export { stWrap, stList, stListItem, stRecommandWrap };
