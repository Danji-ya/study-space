/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React from 'react';
import {
  calendarWrap,
  dateBtn,
  dateBtnWrap,
  dateWrap,
  header,
  title,
} from '../../assets/css/common/calendarStyle';
import { padding } from '../../utils/utils';

function SingleCalendar({ checkin, monthData, handleDatePick, handleHoverDay, leaveHoverDay }) {
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

      <div css={dateWrap} onMouseLeave={e => leaveHoverDay(e)}>
        {monthData.arr.map((date, i) => {
          return (
            <div
              data-dateformat={`${monthData.year}-${padding(monthData.month)}-${
                date.day ? padding(date.day) : ''
              }`}
              key={`${monthData.year} + ${i}`}
              css={dateBtnWrap({ date, checkin })}
              onClick={e => handleDatePick(e.currentTarget, date.beforeDay)}
              onMouseEnter={e => handleHoverDay(e.currentTarget)}
            >
              <p css={dateBtn({ date, checkin })}>{date.day}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default React.memo(SingleCalendar);
