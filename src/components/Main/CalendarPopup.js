/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React from 'react';
import { calendarPopupContainer } from '../../assets/css/main/popupStyle';
import CalendarContainer from '../../containers/Main/CalendarContainer';

function CalendarPopup({ popupState, checkInDay, checkOutDay, changeCheckInOutDay }) {
  return (
    <div css={calendarPopupContainer({ popupState })}>
      <CalendarContainer
        checkInDay={checkInDay}
        checkOutDay={checkOutDay}
        changeCheckInOutDay={changeCheckInOutDay}
      />
    </div>
  );
}

export default CalendarPopup;
