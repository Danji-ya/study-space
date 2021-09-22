/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React from 'react';
import { subtitle, title } from '../../assets/css/accomodation/listContainerHeaderStyle';

function SummaryHeader({ totalListLength }) {
  // 나중에 전역으로 관리하는 데이터로
  return (
    <div>
      <p css={subtitle}>
        {totalListLength}개의 숙소<span> · </span>10월 15일 - 10월 18일<span> · </span>게스트 1명
      </p>
      <h2 css={title}>종로구의 숙소</h2>
    </div>
  );
}

export default SummaryHeader;
