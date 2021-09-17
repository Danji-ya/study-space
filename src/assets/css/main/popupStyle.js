/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const calendarPopupContainer = props => css`
  display: ${props.popupState ? 'block' : 'none'};
  position: absolute;
  top: 80px;
  left: 0;
  background: green;
  border-radius: 15px;
  width: 800px;
  height: 300px;

  text-align: center;
`;

const locationPopupContainer = props => css`
  display: ${props.popupState ? 'block' : 'none'};
  position: absolute;
  top: 80px;
  left: 0;
  background: orange;
  border-radius: 15px;
  width: 400px;
  height: 300px;

  text-align: center;
`;

const guestPopupContainer = props => css`
  display: ${props.popupState ? 'block' : 'none'};
  position: absolute;
  top: 80px;
  right: 0;
  background: blue;
  border-radius: 15px;
  width: 400px;
  height: 300px;

  text-align: center;
`;

export { calendarPopupContainer, locationPopupContainer, guestPopupContainer };
