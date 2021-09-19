/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React from 'react';
import { calendarContainer, moveBtn } from '../../assets/css/common/calendarStyle';
import SingleCalendar from './SingleCalendar';

function Calendar({ leftMonth, rightMonth, setMonth }) {
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
      <SingleCalendar monthData={leftMonth} />
      <SingleCalendar monthData={rightMonth} />
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
