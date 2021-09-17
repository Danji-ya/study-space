/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React, { useEffect, useState, useRef } from 'react';
import {
  searchForm,
  searchFormCol,
  searchFormColLast,
  serachFormDivide,
} from '../../assets/css/common/headerStyle';
import SearchIcon from '../../components/Common/SearchIcon';
import CalendarPopup from '../../components/Main/CalendarPopup';
import GuestPopup from '../../components/Main/GuestPopup';
import LocationPopup from '../../components/Main/LocationPopup';

function SearchForm({ isScroll }) {
  // 날짜, 위치, 인원 관련

  const [popupType, setPopupType] = useState(undefined);

  const refSearchForm = useRef();

  function changePopupType(e) {
    const type = e.currentTarget.getAttribute('name');

    setPopupType(type);
  }

  function resetType(e) {
    if (!refSearchForm.current?.contains(e.target)) setPopupType(undefined);
  }

  useEffect(() => {
    window.addEventListener('click', resetType);
    return () => {
      window.removeEventListener('click', resetType);
    };
  }, []);

  return (
    <div css={searchForm} ref={refSearchForm}>
      <div name="location" css={searchFormCol} onClick={changePopupType}>
        <h5>위치</h5>
        <input type="text" className="query-input" placeholder="어디로 여행가세요?" />
      </div>
      <LocationPopup popupState={popupType === 'location'} />
      <div css={serachFormDivide}></div>
      <div name="calendar" css={searchFormCol} onClick={changePopupType}>
        <h5>체크인</h5>
        <p>날짜 입력</p>
      </div>
      <div css={serachFormDivide}></div>
      <div name="calendar" css={searchFormCol} onClick={changePopupType}>
        <h5>체크아웃</h5>
        <p>날짜 입력</p>
      </div>
      <CalendarPopup popupState={popupType === 'calendar'} />
      <div css={serachFormDivide}></div>
      <div name="guest" css={[searchFormCol, searchFormColLast]} onClick={changePopupType}>
        <div>
          <h5>인원</h5>
          <p>게스트 추가</p>
        </div>
        <button>
          <SearchIcon />
        </button>
      </div>
      <GuestPopup popupState={popupType === 'guest'} />
    </div>
  );
}

export default SearchForm;
