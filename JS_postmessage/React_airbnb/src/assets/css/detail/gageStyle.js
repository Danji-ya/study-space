/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const gageWrap = props => css`
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  grid-template-columns: repeat(2, 1fr);
  gap: 10px 55px;
  padding: 24px 0;
`;

const gageItem = props => css`
  display: flex;
  align-items: center;
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;

  > div {
    flex: 1;
  }
`;

const fillWrap = props => css`
  display: flex;
  align-items: center;
`;

const fillFull = props => css`
  width: ${`${props.fillFullWidth}px`};
  height: 0.4vh;
  background: rgb(221, 221, 221);
  border-radius: 15px;
  margin: 0 10px;
  position: relative;
`;

const fillGage = props => css`
  position: absolute;
  width: ${`${props.gageCell}px`};
  height: 0.4vh;
  background: black;
  border-radius: 15px;
`;

const fillPoint = props => css`
  font-size: 12px;
  font-weight: 600;
`;

export { gageWrap, gageItem, fillWrap, fillFull, fillGage, fillPoint };
