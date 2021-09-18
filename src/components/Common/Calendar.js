/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React from 'react';
import {
  calendarContainer,
  calendarWrap,
  dateBtn,
  dateWrap,
  header,
  moveBtn,
  title,
} from '../../assets/css/common/calendarStyle';

const renderCalendar = monthData => {
  return (
    <div css={calendarWrap}>
      <strong css={title}>
        {monthData.year}년 {monthData.month}월
      </strong>
      <div css={header}>
        <div>일</div>
        <div>월</div>
        <div>화</div>
        <div>수</div>
        <div>목</div>
        <div>금</div>
        <div>토</div>
      </div>

      <div css={dateWrap}>
        {monthData.arr.map((date, i) => {
          return (
            <div css={dateBtn({ date })} key={`${monthData.year} + ${i}`}>
              {date?.day}
            </div>
          );
        })}
      </div>
    </div>
  );
};

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
      {renderCalendar(leftMonth)}
      {renderCalendar(rightMonth)}
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
