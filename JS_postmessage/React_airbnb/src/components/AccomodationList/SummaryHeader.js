/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React from 'react';
import { subtitle, title } from '../../assets/css/accomodation/listContainerHeaderStyle';

function SummaryHeader({ totalListLength, searchResult }) {
  const headCount = searchResult.guestNum.adult + searchResult.guestNum.child;

  return (
    <div>
      <p css={subtitle}>
        {totalListLength}개의 숙소<span> · </span>
        {searchResult.checkin &&
          searchResult.checkout &&
          `${searchResult.checkin.getMonth() + 1}월 ${searchResult.checkin.getDate()}일 - ${
            searchResult.checkout.getMonth() + 1
          }월 ${searchResult.checkout.getDate()}일`}
        <span> · </span>
        {headCount > 0 && `게스트 ${headCount}명`}
      </p>
      <h2 css={title}>{searchResult.location}의 숙소</h2>
    </div>
  );
}

export default SummaryHeader;
