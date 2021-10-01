/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React from 'react';
import { calendarContainer, moveBtn } from '../../assets/css/common/calendarStyle';
import SingleCalendar from './SingleCalendar';

function Calendar({ leftMonth, rightMonth, setMonth, handleDatePick }) {
  return (
    <div css={calendarContainer}>
      <a
        css={[
          moveBtn,
          css`
            left: 0;
          `,
        ]}
        onClick={() => setMonth('left')}
      >
        &#10094;
      </a>
      <SingleCalendar monthData={leftMonth} handleDatePick={handleDatePick} />
      <SingleCalendar monthData={rightMonth} handleDatePick={handleDatePick} />
      <a
        css={[
          moveBtn,
          css`
            right: 0;
          `,
        ]}
        onClick={() => setMonth('right')}
      >
        &#10095;
      </a>
    </div>
  );
}

export default Calendar;
