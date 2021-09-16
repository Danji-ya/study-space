/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const simpleForm = props => css`
  width: 20vw;
  max-width: 300px;

  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  p {
    font-weight: bold;
    font-size: 13px;
    margin-left: 13px;
  }

  button {
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
  }

  animation-name: ${props.isScroll ? 'showEffect' : 'hideEffect'};
  animation-timing-function: ease-in;
  animation-duration: 2.3s;
  animation-fill-mode: forwards;

  @keyframes showEffect {
    from {
      visibility: hidden;
    }
    to {
      visibility: visible;
    }
  }

  @keyframes hideEffect {
    from {
      visibility: hidden;
    }
    to {
      visibility: hidden;
    }
  }
`;

const serachFormDivide = props => css`
  height: 30px;
  width: 10px;
  border-left: 1px solid #ebebeb;
`;

const searchFormCol = props => css`
  padding: 20px 0 20px 15px;

  input {
    border: none;
    padding: 0;
    margin: 0;
  }

  :nth-of-type(2n + 1) {
    flex: 1;
  }

  :last-child {
    display: flex;
    align-items: center;
    justify-content: space-between;

    button {
      border-radius: 100%;
      padding: 15px;
      background: #ff385c;
      border-style: none;
    }
  }

  // :hover {
  //   background-color: rgba(155, 155, 155, 0.4);
  //   border-radius: 15px;
  // }
`;

const searchForm = props => css`
  position: absolute;
  top: 90px;
  left: calc(50% - 400px);
  width: 800px;
  height: 70px;
  border-radius: 50px;
  background: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
  overflow: hidden;

  h5 {
    color: black;
    font-size: 13px;
    font-weight: 700;
    padding: 0 0 5px 0;
  }
  p,
  input {
    color: gray;
    font-size: 16px;
    letter-spacing: 1px;
    background: transparent;
  }
`;

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
    margin: 0 5px;
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
`;

const headerCol = props => css`
  color: ${props.isScroll ? 'black' : 'white'};
  flex: 1 1 33%;
  display: flex;
  align-items: center;
  position: relative;
`;

const headerForm = props => css`
  animation-duration: 0.2s;
  animation-timing-function: ease-out;
  animation-fill-mode: forwards;
  ${console.log(props.isHeaderClick)}
  animation-name: ${props.isScroll ? 'slideUp' : 'slideDown'};

  justify-content: center;

  ul {
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
  height: 100px;
`;

export {
  simpleForm,
  serachFormDivide,
  searchFormCol,
  searchForm,
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
