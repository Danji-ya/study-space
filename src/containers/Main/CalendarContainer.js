import React, { useState, useMemo, useCallback } from 'react';
import { shallowEqual, useSelector } from 'react-redux';
import Calendar from '../../components/common/Calendar';
import { padding } from '../../utils/utils';

function CalendarContainer({ changeCheckInOutDay }) {
  const [hoverDay, setHoverDay] = useState();

  console.log('CalendarContainer rerender');
  const { checkin, checkout } = useSelector(
    state => ({
      checkin: state.searchForm.checkin,
      checkout: state.searchForm.checkout,
    }),
    shallowEqual,
  );
  const [moveMonth, setMoveMonth] = useState(0);
  const today = new Date();
  const currentDay = new Date(
    `${today.getFullYear()}-${padding(today.getMonth() + 1)}-${padding(today.getDate())}`,
  );

  const leftDate = new Date(today.getFullYear(), today.getMonth() + moveMonth, 1);
  const nextDate = new Date(leftDate.getFullYear(), leftDate.getMonth() + 1, 1);

  const setMonth = type => {
    if (type === 'left') setMoveMonth(moveMonth - 1);
    else if (type === 'right') setMoveMonth(moveMonth + 1);
  };

  const getFirstDay = (year, month) => new Date(year, month - 1, 1).getDay();
  const getLastDate = (year, month) => new Date(year, month, 0).getDate();

  const isBeforeDay = checkDay => currentDay > checkDay;

  const isPickedDay = (pickedDay, checkDay) => checkDay.getTime() === pickedDay.getTime();

  const isHoverDay = (hoveredDay, checkDay) => checkDay.getTime() === hoveredDay.getTime();

  const leaveHoverDay = e => {
    // console.log(e);
    setHoverDay('');
  };
  const handleHoverDay = target => {
    const [year, month, day] = target.dataset.dateformat.split('-');
    const checkDay = new Date(`${year}-${month}-${day}`);

    if (!day || checkDay < currentDay) return leaveHoverDay();
    if (!checkin || checkout) return leaveHoverDay();
    if (checkin > checkDay) return leaveHoverDay();

    return setHoverDay(checkDay);
  };

  const isBetweenDay = checkDay => {
    if (!checkin) return false;
    if (checkin && checkout) {
      return checkDay > checkin && checkDay < checkout;
    }

    return checkDay > checkin && checkDay < hoverDay;
  };

  const getMonthData = date => {
    const year = date.getFullYear();
    const month = date.getMonth() + 1;

    const firstDay = getFirstDay(year, month);
    const lastDate = getLastDate(year, month);

    const arr = Array.from(new Array(lastDate), (x, i) => {
      const day = i + 1;
      const timeStamp = new Date(`${year}-${padding(month)}-${padding(day)}`);
      // 추후에 숙소 상세 페이지에서는 이미 예약되어있는 날짜도 표시해줘야한다.

      return {
        day,
        beforeDay: isBeforeDay(timeStamp),
        checkInDay: checkin && isPickedDay(checkin, timeStamp),
        checkOutDay: checkout && isPickedDay(checkout, timeStamp),
        hoveredDay: hoverDay && isHoverDay(hoverDay, timeStamp),
        betweenDay: isBetweenDay(timeStamp),
      };
    });
    arr.unshift(...new Array(firstDay).fill(0).map((v, i) => ({})));

    return { year, month, firstDay, lastDate, arr };
  };

  const leftMonth = useMemo(() => getMonthData(leftDate), [moveMonth, checkin, checkout, hoverDay]);
  const rightMonth = useMemo(
    () => getMonthData(nextDate),
    [moveMonth, checkin, checkout, hoverDay],
  );

  const handleDatePick = useCallback(
    (target, beforeDay) => {
      const [year, month, day] = target.dataset.dateformat.split('-');
      const timeStamp = new Date(`${year}-${month}-${day}`);

      if (beforeDay) return; // 이전 날짜
      if (!day) return; // 공백인 칸
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
      checkin={checkin}
      leftMonth={leftMonth}
      rightMonth={rightMonth}
      setMonth={setMonth}
      handleDatePick={handleDatePick}
      handleHoverDay={handleHoverDay}
      leaveHoverDay={leaveHoverDay}
    />
  );
}

export default React.memo(CalendarContainer);
