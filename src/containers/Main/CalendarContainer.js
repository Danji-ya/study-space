import React, { useState, useMemo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import Calendar from '../../components/common/Calendar';
import { padding } from '../../utils/utils';

function CalendarContainer({ changeCheckInOutDay }) {
  const { checkin, checkout } = useSelector(state => state.searchForm);
  const [moveMonth, setMoveMonth] = useState(0);
  const today = new Date();
  const leftDate = new Date(today.getFullYear(), today.getMonth() + moveMonth, 1);
  const nextDate = new Date(leftDate.getFullYear(), leftDate.getMonth() + 1, 1);

  const setMonth = type => {
    if (type === 'left') setMoveMonth(moveMonth - 1);
    else if (type === 'right') setMoveMonth(moveMonth + 1);
  };

  const getFirstDay = (year, month) => new Date(year, month - 1, 1).getDay();
  const getLastDate = (year, month) => new Date(year, month, 0).getDate();

  const isBeforeDay = (year, month, day) => {
    const currentDay = new Date(
      `${today.getFullYear()}-${padding(today.getMonth() + 1)}-${padding(today.getDate())}`,
    );

    const checkDay = new Date(`${year}-${padding(month)}-${padding(day)}`);

    return currentDay > checkDay;
  };

  const isPickedDay = (pickedDay, year, month, day) => {
    const checkDay = new Date(`${year}-${padding(month)}-${padding(day)}`);
    // console.log(checkDay, pickedDay);
    return checkDay.getTime() === pickedDay.getTime();
  };

  const getMonthData = date => {
    const year = date.getFullYear();
    const month = date.getMonth() + 1;

    const firstDay = getFirstDay(year, month);
    const lastDate = getLastDate(year, month);

    const arr = Array.from(new Array(lastDate), (x, i) => {
      const day = i + 1;
      // 추후에 숙소 상세 페이지에서는 이미 예약되어있는 날짜도 표시해줘야한다.

      return {
        day,
        beforeDay: isBeforeDay(year, month, day),
        checkInDay: checkin && isPickedDay(checkin, year, month, day),
        checkOutDay: checkout && isPickedDay(checkout, year, month, day),
      };
    });
    arr.unshift(...new Array(firstDay).fill(0).map((v, i) => ({})));

    return { year, month, firstDay, lastDate, arr };
  };

  const leftMonth = useMemo(() => getMonthData(leftDate), [moveMonth, checkin, checkout]);
  const rightMonth = useMemo(() => getMonthData(nextDate), [moveMonth, checkin, checkout]);

  const handleDatePick = useCallback(
    (target, beforeDay) => {
      const pickedDate = target.dataset.dateformat.split('-');
      const timeStamp = new Date(
        `${pickedDate[0]}-${padding(pickedDate[1])}-${padding(pickedDate[2])}`,
      );
      const day = pickedDate[2];

      if (beforeDay) return; // 이전 날짜
      if (day === 'undefined') return; // 공백인 칸
      // 나중에 예약된 날짜이면 패스

      if (!checkin || timeStamp < checkin) {
        console.log('체크인 날짜 설정 중');
        changeCheckInOutDay('checkin', timeStamp);
      } else {
        console.log('체크아웃 날짜 설정 중');
        changeCheckInOutDay('checkout', timeStamp);
      }
    },
    [checkin, checkout],
  );

  return (
    <Calendar
      leftMonth={leftMonth}
      rightMonth={rightMonth}
      setMonth={setMonth}
      handleDatePick={handleDatePick}
    />
  );
}

export default React.memo(CalendarContainer);
