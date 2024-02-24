/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const title = props => css`
  font-size: 32px;
  font-weight: 800;

  @media (max-width: 743px) {
    font-size: 26px;
  }
`;

const subtitle = props => css`
  padding-top: 50px;
  font-size: 14px;
  line-height: 18px;
  padding-bottom: 8px;

  @media (max-width: 743px) {
    padding-top: 3vh;
  }
`;

const filterBtnContainer = props => css`
  display: flex;
  padding-top: 20px;
`;

const filterBtnWrap = props => css`
  padding-right: 10px;
  button {
    border-radius: 15px;
    background: white;
    border: 1px solid rgb(176, 176, 176);
    padding: 6px 16px;

    &:hover {
      border-color: black;
      cursor: pointer;
    }
  }
`;

export { title, subtitle, filterBtnContainer, filterBtnWrap };
