/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React from 'react';
import {
  calendarWrap,
  dateBtn,
  dateWrap,
  header,
  title,
} from '../../assets/css/common/calendarStyle';

function SingleCalendar({ monthData, handleDatePick }) {
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
            <div
              data-dateformat={`${monthData.year}-${monthData.month}-${date.day}`}
              css={dateBtn({ date })}
              key={`${monthData.year} + ${i}`}
              onClick={e => handleDatePick(e.target, date.beforeDay)}
            >
              {date.day}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default React.memo(SingleCalendar);
