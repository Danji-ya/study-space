/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React from 'react';
import { headerCol, simpleForm } from '../../assets/css/common/headerStyle';
import SearchIcon from '../Common/SearchIcon';

function SimpleForm({ isScroll, isHeaderClick, headerClick }) {
  return (
    <div css={[simpleForm({ isScroll, isHeaderClick })]}>
      <button onClick={() => headerClick()}>
        <p>검색 시작하기</p>
        <div>
          <SearchIcon />
        </div>
      </button>
    </div>
  );
}

export default SimpleForm;
