/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React from 'react';
import { searchForm, searchFormCol, serachFormDivide } from '../../assets/css/common/headerStyle';
import SearchIcon from '../Common/SearchIcon';

function SearchForm({ isScroll }) {
  // 나중에 container로 옮겨야한다.
  // 날짜, 위치, 인원 관련 form도 absolute로 위치 지정 및 관리

  return (
    <div css={searchForm}>
      <div css={searchFormCol}>
        <h5>위치</h5>
        <div>
          <input type="text" className="query-input" placeholder="어디로 여행가세요?" />
        </div>
      </div>
      <div css={serachFormDivide}></div>
      <div css={searchFormCol}>
        <h5>체크인</h5>
        <p>날짜 입력</p>
      </div>
      <div css={serachFormDivide}></div>
      <div css={searchFormCol}>
        <h5>체크아웃</h5>
        <p>날짜 입력</p>
      </div>
      <div css={serachFormDivide}></div>
      <div css={searchFormCol}>
        <div>
          <h5>인원</h5>
          <p>게스트 추가</p>
        </div>
        <div>
          <button>
            <SearchIcon />
          </button>
        </div>
      </div>
    </div>
  );
}

export default SearchForm;
