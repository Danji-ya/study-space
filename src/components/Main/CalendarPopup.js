/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React from 'react';
import { calendarPopupContainer } from '../../assets/css/main/popupStyle';
import CalendarContainer from '../../containers/Main/CalendarContainer';

function CalendarPopup({ popupState }) {
  return (
    <div css={calendarPopupContainer({ popupState })}>
      <CalendarContainer />
    </div>
  );
}

export default CalendarPopup;
