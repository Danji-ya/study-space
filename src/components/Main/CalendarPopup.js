/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React from 'react';
import { calendarPopupContainer } from '../../assets/css/main/popupStyle';
import CalendarContainer from '../../containers/Main/CalendarContainer';

function CalendarPopup({ popupState, changeCheckInOutDay }) {
  return (
    <div css={calendarPopupContainer({ popupState })}>
      <CalendarContainer changeCheckInOutDay={changeCheckInOutDay} />
    </div>
  );
}

export default CalendarPopup;
