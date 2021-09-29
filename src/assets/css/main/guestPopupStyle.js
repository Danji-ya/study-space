/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const guestContainer = props => css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: black;
  width: 100%;

  h3 {
    font-size: 16px;
    font-weight: 700;
    line-height: 24px;
  }

  p {
    font-size: 14px;
    font-weight: 400;
    line-height: 18px;
  }
`;

const guestItemContainer = props => css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 15px 3px;

  > div:nth-of-type(2) {
    display: flex;
    align-items: center;

    > div {
      padding: 0 10px;
    }
  }

  :not(:last-child) {
    border-bottom: 1px solid rgb(235, 235, 235);
  }
`;

const guestBtnWrap = props => css`
  outline: none;
  border-radius: 50%;
  background: transparent;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid rgb(176, 176, 176);

  border-color: rgb(176, 176, 176);
  color: rgb(113, 113, 113);

  :hover {
    border: 1px solid black;
    color: black;
    cursor: pointer;
  }

  ${props.minus &&
  props.guestNumber === 0 &&
  css`
    border: 1px solid rgb(235, 235, 235);
    color: rgba(235, 235, 235, 0.5);
    :hover {
      border: 1px solid rgb(235, 235, 235);
      color: rgba(235, 235, 235, 0.5);
      cursor: not-allowed;
    }
  `}
`;

const guestTextWrap = props => css`
  width: 37px;
  text-align: center;
`;

export { guestContainer, guestItemContainer, guestTextWrap, guestBtnWrap };
