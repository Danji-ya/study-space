/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const simpleFormContainer = props => css`
  ${(!props.isScroll || props.isHeaderClick) &&
  css`
    display: none;
  `}

  width: 20vw;
  max-width: 300px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  // animation-name: ${!props.isScroll || props.isHeaderClick ? 'hideEffect' : 'showEffect'};
  // animation-timing-function: ease-in;
  // animation-duration: 0.05s;
  // animation-fill-mode: forwards;
  // @keyframes showEffect {
  //   from {
  //     visibility: hidden;
  //   }
  //   to {
  //     visibility: visible;
  //   }
  // }

  // @keyframes hideEffect {
  //   from {
  //     visibility: hidden;
  //   }
  //   to {
  //     visibility: hidden;
  //   }
  // }
`;

const simpleFormBtnWrap = props => css`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 8px 10px;

  border: 1px solid rgb(221, 221, 221);
  border-radius: 50px;
  background: white;
  box-shadow: 0 4px 4px -4px rgba(0, 0, 0, 0.5);

  p {
    font-weight: bold;
    font-size: 13px;
    margin-left: 13px;
  }

  div {
    border-radius: 100%;
    padding: 7px;
    background: #ff385c;
    border-style: none;
  }

  &:hover {
    cursor: pointer;
    box-shadow: 0 7px 7px -7px rgba(0, 0, 0, 0.5);
  }
`;

export { simpleFormContainer, simpleFormBtnWrap };
