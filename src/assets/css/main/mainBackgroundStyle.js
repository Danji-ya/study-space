/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const background = props => css`
  background-image: url('https://a0.muscache.com/im/pictures/57b9f708-bb12-498c-bc33-769f8fc43e63.jpg?im_w=960');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  height: 100%;
  min-height: 890px;
  display: flex;
  justify-content: center;
  align-items: center;

  position: relative;
`;

const backgroundTextWrap = props => css`
  text-align: center;
  margin-top: 25vh;
`;

const header = props => css`
  font-size: 18px;
  font-weight: bold;
  letter-spacing: 1px;
  padding: 0 0 25px 0;
`;

const flexBtnWrap = props => css`
  padding: 20px 50px;
  border-radius: 30px;
  border-style: none;
  border-width: 0;
  background: white;
  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.3);

  :hover {
    box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);
    cursor: pointer;
  }

  span {
    background: linear-gradient(90deg, #6f019c 0%, #c6017e 135.12%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-weight: bold;
    font-size: 18px;
  }
`;

export { backgroundTextWrap, background, header, flexBtnWrap };
