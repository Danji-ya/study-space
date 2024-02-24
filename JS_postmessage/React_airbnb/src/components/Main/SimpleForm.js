/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React from 'react';
import { simpleFormBtnWrap, simpleFormContainer } from '../../assets/css/common/simpleFormStyle';

import SearchIcon from '../common/SearchIcon';

function SimpleForm({ isScroll, isHeaderClick, headerClick }) {
  return (
    <div css={[simpleFormContainer({ isScroll, isHeaderClick })]}>
      <button css={simpleFormBtnWrap} onClick={() => headerClick()}>
        <p>검색 시작하기</p>
        <div>
          <SearchIcon />
        </div>
      </button>
    </div>
  );
}

export default SimpleForm;
