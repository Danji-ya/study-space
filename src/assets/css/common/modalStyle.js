/** @jsxImportSource @emotion/react */
import { css, keyframes } from '@emotion/react';

const slideUp = keyframes`
  0% {
    transform: translateY(100%);
  }
  100% {
    transform: none;
  }
`;

const slideDown = keyframes`
  0% {
    transform: none;
  }
  100% {
    transform: translateY(100%);
  }
`;

const modalBackground = props => css`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.53);

  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
`;

const modalContainer = props => css`
  width: ${props.width};
  height: ${props.height};
  background: white;

  animation-name: ${slideUp};
  animation-duration: 0.5s;
  animation-timing-function: ease-out;
  animation-fill-mode: forwards;
  position: relative;

  ${props.isSlideDown &&
  css`
    animation-name: ${slideDown};
  `}
`;

const closeBtn = props => css`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  position: absolute;
  top: 15px;
  left: 15px;

  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background: rgba(133, 133, 133, 0.1);
    cursor: pointer;
  }
`;

export { modalBackground, modalContainer, closeBtn };
