/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const calendarPopupContainer = props => css`
  display: ${props.popupState ? 'block' : 'none'};
  position: absolute;
  top: 80px;
  left: 0;
  background: white;
  border-radius: 20px;
  width: 800px;
  box-shadow: 0px 0px 1px 1px rgba(165, 165, 165, 0.5);
`;

const locationPopupContainer = props => css`
  display: ${props.popupState ? 'block' : 'none'};
  position: absolute;
  top: 80px;
  left: 0;
  background: white;
  color: black;
  border-radius: 15px;
  /* width: 400px; */
  box-shadow: 0px 0px 1px 1px rgba(165, 165, 165, 0.5);
`;

const guestPopupContainer = props => css`
  display: ${props.popupState ? 'flex' : 'none'};
  position: absolute;
  top: 80px;
  right: 0;
  background: white;
  border-radius: 15px;
  width: 350px;
  justify-content: center;
  padding: 20px 30px;
  box-shadow: 0px 0px 1px 1px rgba(165, 165, 165, 0.5);
`;

export { calendarPopupContainer, locationPopupContainer, guestPopupContainer };
