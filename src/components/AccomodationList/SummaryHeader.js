/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React from 'react';
import { subtitle, title } from '../../assets/css/accomodation/listContainerHeaderStyle';
import { useQuery } from '../../utils/utils';

function SummaryHeader({ totalListLength }) {
  const query = useQuery();

  // 나중에 전역 상태로 관리
  const searchResult = {
    location: query.get('query'),
    checkIn: {
      month: query.get('checkin').split('-')[1],
      day: query.get('checkin').split('-')[2],
    },
    checkOut: {
      month: query.get('checkout').split('-')[1],
      day: query.get('checkout').split('-')[2],
    },
    guest: {
      adult: +query.get('adults'),
      child: +query.get('children'),
      infant: +query.get('infans'),
    },
  };

  const headCount = searchResult.guest.adult + searchResult.guest.child;

  return (
    <div>
      <p css={subtitle}>
        {totalListLength}개의 숙소<span> · </span>
        {searchResult.checkIn.month &&
          `${searchResult.checkIn.month}월 ${searchResult.checkIn.day}일 - ${searchResult.checkOut.month}월 ${searchResult.checkOut.day}일`}
        <span> · </span>
        {headCount > 0 && `게스트 ${headCount}명`}
      </p>
      <h2 css={title}>{searchResult.location}의 숙소</h2>
    </div>
  );
}

export default SummaryHeader;
