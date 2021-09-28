/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const searchForm = props => css`
  position: absolute;
  top: 60px;
  left: 50%;
  transform: translateX(-50%);
  width: 800px;
  height: 70px;
  border-radius: 50px;
  background: ${props.popupType ? 'rgb(235, 235, 235)' : 'white'};
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);

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
    :hover {
      cursor: pointer;
    }
  }

  & > div {
    ${props.popupType === 'location' &&
    css`
      &:nth-of-type(1) {
        background: white;
      }
    `}

    ${props.popupType === 'checkIn' &&
    css`
      &:nth-of-type(4) {
        background: white;
      }
    `}

    ${props.popupType === 'checkOut' &&
    css`
      &:nth-of-type(6) {
        background: white;
      }
    `}

    
    ${props.popupType === 'guest' &&
    css`
      &:nth-of-type(9) {
        background: white;
      }
    `}
  }
`;

const searchFormCol = props => css`
  height: 70px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 50px;
  position: relative;
  flex: 1;

  padding-left: 24px;
  input {
    border: none;
    padding: 0;
    margin: 0;
  }

  :hover {
    cursor: pointer;
    background: rgba(165, 165, 165, 0.3);
  }
`;

const searchFormColLast = props => css`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-right: 12px;
`;

const serachFormDivide = props => css`
  height: 30px;
  width: 1px;
  background: #ebebeb;
`;

const searchFormColLastBtn = props => css`
  border-radius: 100%;
  padding: 15px;
  background: #ff385c;
  border-style: none;

  :hover {
    cursor: pointer;
    background: linear-gradient(90deg, #e61e4d 0%, #e31c5f 50%, #d70466);
  }
`;

export { searchForm, searchFormCol, serachFormDivide, searchFormColLast, searchFormColLastBtn };
