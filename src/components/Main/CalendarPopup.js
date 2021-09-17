/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React from 'react';
import { calendarPopupContainer } from '../../assets/css/main/popupStyle';

function CalendarPopup({ popupState }) {
  return (
    <div css={calendarPopupContainer({ popupState })}>
      <h5>calendarPopup</h5>
    </div>
  );
}

export default CalendarPopup;
