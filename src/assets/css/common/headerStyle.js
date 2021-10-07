/** @jsxImportSource @emotion/react */
import { css, keyframes } from '@emotion/react';

const headerNav = props => css`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  font-weight: 700;
  font-size: 14px;

  a {
    color: ${props.isScroll ? 'black' : 'white'};
    font-weight: 700;
    font-size: 14px;
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    border: 0;
    background: transparent;
    cursor: pointer;
    padding: 10px;
  }

  button:hover {
    background-color: rgba(155, 155, 155, 0.4);
  }

  & > div {
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }

  div:nth-of-type(1) {
    button {
      border-radius: 15px;
    }
    button:nth-of-type(2) {
      margin-right: 5px;
    }
  }

  div:nth-of-type(2) {
    button {
      background: white;
      border-radius: 20px;
      padding: 5px 5px 5px 12px;

      border: 1px solid rgb(221, 221, 221);

      > svg {
        margin: 0 10px 0 5px;
      }
    }
  }
`;

const headerNavText = props => css`
  width: 75px;
`;

const searchIconStyle = props => css`
  display: block;
  fill: none;
  height: 15px;
  width: 15px;
  stroke: white;
  stroke-width: 4;
  overflow: visible;
`;

const listIcon = props => css`
  display: block;
  fill: none;
  height: 16px;
  width: 16px;
  stroke: currentcolor;
  stroke-width: 3;
  overflow: visible;
`;

const userIconWrap = props => css`
  fill: gray;
  width: 28.69px;
  height: 28.69px;
`;

const globeIcon = props => css`
  fill: ${props.isScroll ? 'black' : 'white'};
  width: 16px;
  height: 16px;
`;

const airbnbIcon = props => css`
  fill: ${props.isScroll ? 'red' : 'white'};
  width: 102px;
  height: 32px;

  :hover {
    cursor: pointer;
  }

  @media (max-width: 1127px) {
    width: 30px;
  }
`;

const headerCol = props => css`
  color: ${props.isScroll ? 'black' : 'white'};
  flex: 1 1 33.3%;
  display: flex;
  align-items: center;
  position: relative;
`;

const headerForm = props => css`
  position: relative;
  display: flex;
  align-items: center;

  color: ${props.isScroll ? 'black' : 'white'};
  animation-duration: 0.4s;
  animation-timing-function: ease-out;
  animation-fill-mode: forwards;
  animation-name: ${!props.isScroll || props.isHeaderClick ? 'slideDown' : 'slideUp'};
  justify-content: center;

  & > ul {
    ${!props.isMainHeader &&
    css`
      color: black;
    `}
    display: flex;
    justify-content: center;

    > li {
      flex-shrink: 0;

      font-size: 14px;
      font-weight: bold;
      padding: 0 1.5vw;

      &:hover {
        opacity: 0.5;
        cursor: pointer;
      }

      span,
      a {
        padding: 1vh 0;
      }
    }

    li:first-of-type span {
      border-bottom: 1px solid white;
    }
  }

  @keyframes slideDown {
    from {
      transform: scale(0.3, 0.75) translateY(-80px);
    }
    to {
      transform: scale(1, 1) translateY(0px);
    }
  }

  @keyframes slideUp {
    from {
      transform: scale(1, 1) translateY(0px);
      opacity: 0.2;
    }
    to {
      transform: scale(0.3, 0.75) translateY(-80px);
      opacity: 0;
    }
  }

  @media (max-width: 950px) {
    margin-top: 80px;
  }
`;

const headerContainer = props => css`
  z-index: 999;
  position: fixed;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 10vw;
  background: ${props.isScroll ? 'white' : 'transparent'};
  box-shadow: ${props.isScroll && '0px 2px 4px rgba(0,0,0,0.3)'};
  height: 100px;

  @media (max-width: 950px) {
    padding: 20px 3vw;
  }
`;

export {
  userIconWrap,
  searchIconStyle,
  listIcon,
  airbnbIcon,
  headerCol,
  headerForm,
  headerContainer,
  globeIcon,
  headerNav,
  headerNavText,
};
