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
  display: ${props.popupState ? 'flex' : 'none'};
  position: absolute;
  top: 80px;
  right: 0;
  background: white;
  border-radius: 15px;
  width: 350px;
  justify-content: center;
  padding: 20px 30px;
`;

export { calendarPopupContainer, locationPopupContainer, guestPopupContainer };
