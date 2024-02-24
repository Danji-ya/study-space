/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const buttonWrap = props => css`
  position: fixed;
  left: calc(50% - 45px);
  bottom: 5vh;
  display: none;
  background: #222222;
  border-radius: 50px;
  border: 0;
  outline: 0;
  cursor: pointer;
  padding: 10px;
  width: 90px;
  transition: transform 0.2s;

  :hover {
    transform: scale(1.1);
  }

  @media (max-width: 1128px) {
    display: flex;
    align-items: center;
    justify-content: space-around;
  }

  @media (max-width: 743px) {
    padding: 7px;
    bottom: 10vh;
  }
`;

const buttonText = props => css`
  color: rgb(255, 255, 255);
  font-size: 16px;
  font-weight: 600;
  line-height: 18px;
`;
const mapIcon = props => css`
  display: block;
  height: 16px;
  width: 16px;
  fill: rgb(255, 255, 255);
`;

export { buttonWrap, buttonText, mapIcon };
