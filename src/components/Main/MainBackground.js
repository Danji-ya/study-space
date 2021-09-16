/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React from 'react';

const backGround = props => css`
  background-image: url('https://a0.muscache.com/im/pictures/57b9f708-bb12-498c-bc33-769f8fc43e63.jpg?im_w=960');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  min-height: 890px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function MainBackground() {
  return (
    <article css={backGround}>
      <div className="background-text-wrap">
        <div className="text">어디든 상관없이 떠나고 싶을 때 에어비앤비가 도와드립니다!</div>
        <div className="button-wrap">
          <button>
            <span>유연한 검색</span>
          </button>
        </div>
      </div>
    </article>
  );
}

export default MainBackground;
