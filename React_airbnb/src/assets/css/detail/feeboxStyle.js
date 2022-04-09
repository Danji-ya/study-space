/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const feeBoxContainer = props => css`
  position: sticky;
  top: 130px;

  border: 1px solid rgb(221, 221, 221);
  border-radius: 12px;
  padding: 24px;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 6px 16px;
  margin-left: 24px;

  transition: all 1s cubic-bezier(0.175, 0.885, 0.32, 1.275);
`;

const feeBoxTitle = props => css``;

const dateSetting = props => css`
  font-size: 22px;
  font-weight: 400;
  line-height: 26px;
  margin-bottom: 5px;
`;

const selectBoxWrap = props => css`
  border: 1px solid #dddddd;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  margin: 10px 0;

  h5 {
    font-size: 10px;
    font-weight: 800;
    line-height: 12px;
  }

  p {
    font-size: 14px;
    font-weight: 400;
    line-height: 18px;
    color: rgb(113, 113, 113);
  }
  &:hover {
    cursor: pointer;
  }
`;

const selectDate = props => css`
  display: flex;
  border-bottom: 1px solid #dddddd;
  padding: 0 8px;
`;

const checkIn = props => css`
  flex: 1;
  padding: 5px 0;
`;
const checkOut = props => css`
  flex: 1;
  padding: 5px 0;
`;

const divide = props => css`
  background: #dddddd;
  width: 1px;
  margin-right: 5px;
`;

const selectGuest = props => css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 8px;
`;

const reservationBtn = props => css`
  background: linear-gradient(to right, #e61e4d 0%, #e31c5f 50%, #d70466 100%);
  border-radius: 5px;
  text-align: center;
  color: white;
  padding: 15px 10px;
  font-weight: 600;
  margin-top: 24px;

  &:hover {
    cursor: pointer;
  }
`;

export {
  feeBoxContainer,
  feeBoxTitle,
  dateSetting,
  selectBoxWrap,
  selectDate,
  selectGuest,
  divide,
  checkIn,
  checkOut,
  reservationBtn,
};
