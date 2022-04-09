/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React from 'react';
import { headerForm } from '../../assets/css/common/headerStyle';
import SearchFormContainer from '../../containers/Main/SearchFormContainer';

function HeaderForm({ isScroll, isHeaderClick, isMainHeader }) {
  return (
    <div css={[headerForm({ isScroll, isHeaderClick, isMainHeader })]}>
      {(!isScroll || isHeaderClick) && (
        <ul>
          <li>
            <span>숙소</span>
          </li>
          <li>
            <span>체험</span>
          </li>
          {isMainHeader && (
            <li>
              <a href="#">온라인 체험</a>
            </li>
          )}
        </ul>
      )}

      <SearchFormContainer isScroll={isScroll} />
    </div>
  );
}

export default HeaderForm;
