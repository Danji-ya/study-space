/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React from 'react';
import {
  hsBackground,
  hsBtnWrap,
  hsTextWrap,
  hsWrap,
} from '../../../assets/css/main/hostingStartStyle';

function HostingStart() {
  return (
    <article css={hsWrap}>
      <div css={hsBackground}>
        <div css={hsTextWrap}>
          <h2>호스팅 시작하기</h2>
          <div>
            <span>
              숙소를 공유하여 부수입을 올리고 <br />
              새로운 가능성을 만나세요.
            </span>
          </div>
          <div css={hsBtnWrap}>
            <p>자세히 알아보기</p>
          </div>
        </div>
      </div>
    </article>
  );
}

export default HostingStart;
