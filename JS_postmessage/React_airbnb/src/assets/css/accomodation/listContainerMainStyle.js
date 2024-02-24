/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const listMainPaddingContainer = props => css`
  padding: 25px 0;
  border-bottom: 1px solid #dddddd;
`;

const listMainItemContainer = props => css`
  display: flex;

  &:hover {
    cursor: pointer;
  }
`;

const sideTextContainerLink = props => css`
  margin-left: 16px;
  overflow: hidden;
  flex: 1;
`;

const sideTextContainer = props => css`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;

const sideTextTop = props => css``;

const title = props => css`
  display: flex;
  justify-content: space-between;

  div:nth-of-type(1) {
    min-width: 0;
  }

  p {
    font-size: 14px;
    line-height: 18px;
    color: rgb(113, 113, 113);
  }

  h3 {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

    font-size: 18px;
    line-height: 24px;
  }
`;

const heart = props => css`
  background: none;
  border-style: none;
  border-radius: 50%;

  height: 35px;
  width: 35px;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    cursor: pointer;
    background: rgba(155, 155, 155, 0.1);
  }

  svg {
    display: block;
    fill: ${props.isDibs ? 'red' : 'transparent'};
    height: 24px;
    width: 24px;
    stroke: rgb(34, 34, 34);
    stroke-width: 2;
  }
`;

const divide = props => css`
  width: 30px;
  height: 1px;
  margin: 10px 0;
  background: rgb(176, 176, 176);
`;

const feature = props => css`
  font-size: 14px;
  line-height: 18px;
  color: #717171;
`;

const option = props => css`
  ${feature()}
`;

const sideTextBottom = props => css`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

const reviewWrap = props => css`
  font-size: 15px;
  font-weight: 500;
  line-height: 18px;

  display: flex;
  align-items: center;

  svg {
    display: flex;
    width: 14px;
    height: 14px;
    align-items: center;
    justify-content: center;
    fill: red;
    margin-right: 2px;
  }

  span {
    color: #717171;
    font-weight: normal;
    padding: 0 3px;
  }
`;

const priceWrap = props => css`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;
const eachPrice = props => css`
  font-size: 18px;
  padding-bottom: 5px;

  strong {
    font-weight: bold;
  }
`;

const totalPrice = props => css`
  font-size: 14px;
  font-weight: 400;
  text-decoration: underline;
  line-height: 18px;
  color: rgb(113, 113, 113);
`;

export {
  listMainPaddingContainer,
  listMainItemContainer,
  sideTextContainerLink,
  sideTextContainer,
  sideTextTop,
  sideTextBottom,
  reviewWrap,
  title,
  heart,
  divide,
  feature,
  option,
  priceWrap,
  eachPrice,
  totalPrice,
};
