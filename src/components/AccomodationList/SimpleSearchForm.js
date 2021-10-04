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
  const headCount = searchResult.guestNum.adult + searchResult.guestNum.child;

  return (
    <div css={simpleSearchFormContainer({ isSearchFormClick })} onClick={handleSearchForm}>
      <button name="location" css={resultWrap}>
        {searchResult.location || '장소 추가'}
      </button>
      <span></span>
      <button name="calendar" css={resultWrap}>
        {searchResult.checkin && searchResult.checkout
          ? `${searchResult.checkin.getMonth() + 1}월 ${searchResult.checkin.getDate()}일 - ${
              searchResult.checkout.getMonth() + 1
            }월 ${searchResult.checkout.getDate()}일 `
          : `날짜 추가`}
      </button>
      <span></span>
      <button name="guest" css={resultWrap}>
        <p>
          {headCount
            ? `게스트 ${headCount}명${
                searchResult.guestNum.infant > 0 ? `, 유아 ${searchResult.guestNum.infant}명` : ''
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
