/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const mainTitleContainer = props => css``;

const titleContainer = props => css`
  font-size: 26px;
  font-weight: 600;
  line-height: 30px;
  margin: 25px 0 10px 0;
`;

const subtitleContainer = props => css`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const subtitleWrap = props => css`
  display: flex;
  align-items: center;

  span {
    color: rgb(133, 133, 133);
  }
`;

const linkWrap = props => css`
  display: flex;
  font-weight: 600;
  align-items: center;
`;

const shareIcon = props => css`
  display: flex;
  margin: 0 15px;
  text-decoration: underline;

  svg {
    display: block;
    fill: none;
    height: 16px;
    width: 16px;
    stroke: currentcolor;
    stroke-width: 2;
    overflow: visible;
  }

  &:hover {
    cursor: pointer;
  }
`;

const saveIcon = props => css`
  ${shareIcon()}
`;

const imgContainer = props => css`
  padding: 25px 0;
  position: relative;
`;

const imgWrap = props => css`
  display: grid;
  gap: 5px;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, 1fr);
  height: 53vh;
  position: relative;

  div:first-of-type {
    grid-row: 1 / 3;
    grid-column: 1 / 3;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;

    &:hover {
      cursor: pointer;
    }
  }

  div:nth-of-type(1) img {
    border-top-left-radius: 15px;
    border-bottom-left-radius: 15px;
  }

  div:nth-of-type(3) img {
    border-top-right-radius: 15px;
  }

  div:last-child img {
    border-bottom-right-radius: 15px;
  }
`;

const imgBtnWrap = props => css`
  position: absolute;
  bottom: 4vh;
  right: 1.5vw;
  background: white;
  display: flex;
  justify-content: space-around;
  padding: 6px 13px;
  border-radius: 8px;
  border: 1px solid black;
  box-shadow: 0 5px 5px -5px rgba(0, 0, 0, 0.5);

  transition: 1s cubic-bezier(0.075, 0.82, 0.165, 1);
  align-items: center;

  div {
    font-size: 14px;
    font-weight: 600;
    line-height: 20px;
    padding-left: 5px;
  }

  svg {
    width: 18px;
    height: 18px;
    fill: currentcolor;
  }

  &:hover {
    opacity: 0.8;
    cursor: pointer;
    transform: translateY(-5px);
  }
`;

export {
  mainTitleContainer,
  titleContainer,
  subtitleContainer,
  subtitleWrap,
  linkWrap,
  shareIcon,
  saveIcon,
  imgContainer,
  imgWrap,
  imgBtnWrap,
};
