/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const calendarPopupContainer = props => css`
  display: ${props.popUpState ? 'block' : 'none'};
  position: absolute;
  top: 80px;
  left: 0;
  background: orange;
  border-radius: 15px;
  width: 800px;
  height: 300px;

  text-align: center;
`;

export default calendarPopupContainer;
