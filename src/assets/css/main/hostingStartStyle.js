/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const hsWrap = props => css`
  padding: 30px 108px;
`;

const hsBackground = props => css`
  width: 100%;
  height: 100%;
  background-image: url('https://a0.muscache.com/im/pictures/2595054e-d1d9-4fde-8046-58d51fcb3164.jpg?im_w=1440');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  border-radius: 10px;
  min-height: 400px;

  position: relative;
  :hover {
    cursor: pointer;
  }
`;

const hsTextWrap = props => css`
  width: 50%;
  height: 100%;
  position: absolute;
  padding: 0 80px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: white;

  h2 {
    font-size: 40px;
    line-height: 36px;
    font-weight: 700;
  }

  span {
    font-size: 16px;
    line-height: 20px;
    padding-top: 15px;
  }
`;

const hsBtnWrap = props => css`
  width: 130px;
  font-size: 13px;
  font-weight: 600;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  background: white;
  color: black;
  padding: 10px 0;
  margin-top: 15px;
`;

export { hsBackground, hsWrap, hsTextWrap, hsBtnWrap };
