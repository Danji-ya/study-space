/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

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
    :not(:last-child) {
      margin: 0 5px;
    }
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
`;

const headerCol = props => css`
  color: ${props.isScroll ? 'black' : 'white'};
  flex: 1 1 33%;
  display: flex;
  align-items: center;
  position: relative;
`;

const headerForm = props => css`
  color: ${props.isScroll ? 'black' : 'white'};
  animation-duration: 0.2s;
  animation-timing-function: ease-out;
  animation-fill-mode: forwards;
  animation-name: ${!props.isScroll || props.isHeaderClick ? 'slideDown' : 'slideUp'};
  justify-content: center;

  ul {
    ${!props.isMainHeader &&
    css`
      color: black;
    `}
    display: flex;
    justify-content: center;

    li {
      font-size: 14px;
      font-weight: bold;
      padding: 15px 20px;

      &:hover {
        opacity: 0.5;
        cursor: pointer;
      }

      span,
      a {
        padding: 10px 0;
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
      opacity: 0.5;
    }
    to {
      transform: scale(0.3, 0.75) translateY(-80px);
      opacity: 0;
      visibility: hidden;
    }
  }
`;

const headerContainer = props => css`
  position: fixed;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 150px;
  z-index: 100;
  background: ${props.isScroll ? 'white' : 'none'};

  box-shadow: ${props.isScroll && '0px 2px 4px rgba(0,0,0,0.3)'};
  height: 100px;
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
};
