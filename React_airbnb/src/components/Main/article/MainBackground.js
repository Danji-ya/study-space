/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React from 'react';
import {
  backgroundTextWrap,
  background,
  header,
  flexBtnWrap,
} from '../../../assets/css/main/mainBackgroundStyle';

function MainBackground() {
  return (
    <article css={background}>
      <div css={backgroundTextWrap}>
        <div css={header}>어디든 상관없이 떠나고 싶을 때 에어비앤비가 도와드립니다!</div>
        <button css={flexBtnWrap}>
          <span>유연한 검색</span>
        </button>
      </div>
    </article>
  );
}

export default MainBackground;
