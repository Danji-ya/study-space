import React, { useState, useMemo } from 'react';
import Calendar from '../../components/common/Calendar';

function CalendarContainer() {
  const [moveMonth, setMoveMonth] = useState(0);
  const today = new Date();
  const leftDate = new Date(today.getFullYear(), today.getMonth() + moveMonth, 1);
  const nextDate = new Date(leftDate.getFullYear(), leftDate.getMonth() + 1, 1);
  // const leftDate =  useMemo(() => new Date(today.getFullYear(), today.getMonth() + moveMonth, 1), [moveMonth]);
  // const nextDate = useMemo(()=>new Date(leftDate.getFullYear(), leftDate.getMonth() + 1, 1) [moveMonth]);

  const setMonth = type => {
    if (type === 'left') setMoveMonth(moveMonth - 1);
    else if (type === 'right') setMoveMonth(moveMonth + 1);
  };

  const getFirstDay = (year, month) => new Date(year, month - 1, 1).getDay();
  const getLastDate = (year, month) => new Date(year, month, 0).getDate();

  const isBeforeDay = (year, month, day) => {
    const padding = value => `00${value}`.slice(-2);

    const currentDay = new Date(
      `${today.getFullYear()}-${padding(today.getMonth() + 1)}-${padding(today.getDate())}`,
    );

    const checkDay = new Date(`${year}-${padding(month)}-${padding(day)}`);

    return currentDay > checkDay;
  };

  const getMonthData = date => {
    const year = date.getFullYear();
    const month = date.getMonth() + 1;

    const firstDay = getFirstDay(year, month);
    const lastDate = getLastDate(year, month);

    const arr = Array.from(new Array(lastDate), (x, i) => {
      const day = i + 1;
      // 추후에 체크인, 체크아웃관련 로직은 이 안에다

      return {
        day,
        beforeDay: isBeforeDay(year, month, day),
      };
    });
    arr.unshift(...new Array(firstDay));

    return { year, month, firstDay, lastDate, arr };
  };

  // const leftMonth = getMonthData(leftDate);
  // const rightMonth = getMonthData(nextDate);
  const leftMonth = useMemo(() => getMonthData(leftDate), [moveMonth]);
  const rightMonth = useMemo(() => getMonthData(nextDate), [moveMonth]);

  return <Calendar leftMonth={leftMonth} rightMonth={rightMonth} setMonth={setMonth} />;
}

export default CalendarContainer;
