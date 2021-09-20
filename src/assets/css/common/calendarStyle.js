/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const calendarContainer = props => css`
  position: relative;
  display: flex;
  margin: 40px 40px;
  min-height: 250px;
  color: black;
`;

const calendarWrap = props => css`
  width: 50%;
  display: inline-block;
  position: relative;

  :nth-of-type(1) {
    margin-right: 15px;
  }

  :nth-of-type(2) {
    margin-left: 15px;
  }
`;

const title = props => css`
  display: flex;
  justify-content: center;
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 20px;
`;

const header = props => css`
  display: grid;
  grid-template-columns: repeat(7, 1fr);

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 45px;
    width: 45px;
    color: rgb(113, 113, 113);
    font-size: 12px;
    font-weight: 600;
    line-height: 16px;
  }
`;

const dateWrap = props => css`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
`;

const dateBtn = props => css`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 45px;
  width: 45px;
  font-size: 14px;
  font-weight: 500;
  border-radius: 50%;

  ${props.date?.beforeDay || !props.date?.day
    ? css`
        color: rgba(72, 72, 72, 0.5);

        :hover {
          border: none;
        }
      `
    : css`
        :hover {
          border: 1px solid black;
        }
      `};

  //   오늘 날짜
  //  날짜 사이간에 효과
`;

const moveBtn = props => css`
  position: absolute;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  z-index: 1;

  display: flex;
  align-items: center;
  justify-content: center;

  :hover {
    cursor: pointer;
    background: rgba(0, 0, 0, 0.05);
  }
`;

export { calendarContainer, calendarWrap, title, header, dateWrap, dateBtn, moveBtn };
