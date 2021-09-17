/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React from 'react';
import { headerCol, headerForm } from '../../assets/css/common/headerStyle';
import SearchFromContainer from '../../containers/Main/SearchFormContainer';

function HeaderForm({ isScroll, isHeaderClick }) {
  return (
    <div css={[headerCol({ isScroll }), headerForm({ isScroll, isHeaderClick })]}>
      <ul>
        <li>
          <span>숙소</span>
        </li>
        <li>
          <span>체험</span>
        </li>
        <li>
          <a href="#">온라인 체험</a>
        </li>
      </ul>
      <SearchFromContainer isScroll={isScroll} />
    </div>
  );
}

export default HeaderForm;
