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
  /* row-gap: 2px; */
`;

const dateBtnWrap = props => css`
  display: flex;
  align-items: center;
  justify-content: center;

  ${props.date.beforeDay || !props.date.day
    ? css`
        :hover {
          cursor: default;
        }
      `
    : css`
        :hover {
          cursor: pointer;
        }
      `}

  ${props.date.checkInDay &&
  css`
    border-bottom-left-radius: 50%;
    border-top-left-radius: 50%;
    background: rgba(165, 165, 165, 0.1);
  `}

  ${props.date.checkOutDay &&
  css`
    border-top-right-radius: 50%;
    border-bottom-right-radius: 50%;
    background: rgba(165, 165, 165, 0.1);
  `}

  // 체크인 되어있을 때,
  ${props.checkin &&
  props.date.hoveredDay &&
  css`
    :hover {
      border-top-right-radius: 50%;
      border-bottom-right-radius: 50%;
      background: rgba(165, 165, 165, 0.1);
    }
  `}

  ${props.date.betweenDay &&
  css`
    background: rgba(165, 165, 165, 0.1);
  `}
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

  ${props.date.beforeDay || !props.date.day
    ? css`
        color: rgba(72, 72, 72, 0.5);

        :hover {
          border: none;
          cursor: default;
        }
      `
    : css`
        :hover {
          border: 1px solid black;
          cursor: pointer;
        }
      `}

  ${(props.date.checkInDay || props.date.checkOutDay) &&
  css`
    background: black;
    color: white;
  `}

  // 체크인 되어있을 때,
  ${props.checkin &&
  props.date.hoveredDay &&
  css`
    :hover {
      background: black;
      color: white;
    }
  `}
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

export { calendarContainer, calendarWrap, title, header, dateWrap, dateBtnWrap, dateBtn, moveBtn };
