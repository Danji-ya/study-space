/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React from 'react';
import {
  resultWrap,
  searchBtnWrap,
  simpleSearchFormContainer,
} from '../../assets/css/accomodation/headerStyle';
import SearchIcon from '../common/SearchIcon';

function SimpleSearchForm({ searchResult, isSearchFormClick, handleSearchForm }) {
  const headCount = searchResult.guest.adult + searchResult.guest.child;
  return (
    <div css={simpleSearchFormContainer({ isSearchFormClick })} onClick={handleSearchForm}>
      <button name="location" css={resultWrap}>
        {searchResult.location || '장소 추가'}
      </button>
      <span></span>
      <button
        name="calendar"
        css={resultWrap}
      >{`${searchResult.checkIn.month}월 ${searchResult.checkIn.day}일 - ${searchResult.checkOut.month}월 ${searchResult.checkOut.day}일 `}</button>
      <span></span>
      <button name="guest" css={resultWrap}>
        <p>
          {headCount
            ? `게스트 ${headCount}명${
                searchResult.guest.infant > 0 ? `, 유아 ${searchResult.guest.infant}명` : ''
              }`
            : '게스트 추가'}
        </p>
        <div css={searchBtnWrap}>
          <SearchIcon />
        </div>
      </button>
    </div>
  );
}

export default SimpleSearchForm;
