/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React from 'react';
import { searchIconStyle } from '../../assets/css/common/headerStyle';

function SearchIcon() {
  return (
    <svg viewBox="0 0 32 32" css={searchIconStyle}>
      <g fill="none">
        <path d="m13 24c6.0751322 0 11-4.9248678 11-11 0-6.07513225-4.9248678-11-11-11-6.07513225 0-11 4.92486775-11 11 0 6.0751322 4.92486775 11 11 11zm8-3 9 9"></path>
      </g>
    </svg>
  );
}

export default SearchIcon;
