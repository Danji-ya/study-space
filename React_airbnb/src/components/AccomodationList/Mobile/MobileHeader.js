/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React from 'react';

const headerContainer = props => css`
  position: fixed;
  padding: 0 1vw;
  width: 100%;
  height: 8vh;
  z-index: 999;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #dddddd;
  background: white;

  > button {
    border: 0;
    outline: 0;
    background: transparent;
  }
`;

const resultButton = props => css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex: 1;
  padding: 0;

  font-size: 0.9rem;
`;

const textWrap = props => css`
  display: flex;
  align-items: center;
  color: #717171;
`;

const divide = props => css`
  margin-left: 8px;
  width: 1px;
  height: 2vh;
  background: #ebebeb;
`;

const backButton = props => css`
  padding: 10px;
`;

const filterButton = props => css`
  ${backButton()}

  border-left: 1px solid #dddddd;
`;

const backIcon = props => css`
  height: 0.9rem;
  width: 0.9rem;
  display: block;
  fill: rgb(34, 34, 34);
`;

const filterIcon = props => css`
  display: block;
  height: 0.9rem;
  width: 0.9rem;
  fill: rgb(34, 34, 34);
`;

function MobileHeader({ searchResult }) {
  const { checkin, checkout, guestNum, location } = searchResult;
  const headCount = guestNum.adult + guestNum.child;
  return (
    <header css={headerContainer}>
      <button css={backButton}>
        <svg viewBox="0 0 16 16" css={backIcon}>
          <path d="m10.8 16c-.4 0-.7-.1-.9-.4l-6.8-6.7c-.5-.5-.5-1.3 0-1.8l6.8-6.7c.5-.5 1.2-.5 1.7 0s .5 1.2 0 1.7l-5.8 5.9 5.8 5.9c.5.5.5 1.2 0 1.7-.2.3-.5.4-.8.4"></path>
        </svg>
      </button>

      <button css={resultButton}>
        <p>{location}</p>
        <div css={textWrap}>
          <span>
            {checkin && checkout
              ? `${checkin.getMonth() + 1}월${checkin.getDate()}일 - ${
                  checkout.getMonth() + 1
                }월${checkout.getDate()}일 `
              : `날짜 추가`}
          </span>
          <span> · </span>
          <span>{headCount ? `게스트 ${headCount}명` : '게스트 추가'}</span>
          <div css={divide}></div>
        </div>
      </button>

      <button css={filterButton}>
        <svg viewBox="0 0 16 16" css={filterIcon}>
          <path d="M5 8c1.306 0 2.418.835 2.83 2H14v2H7.829A3.001 3.001 0 1 1 5 8zm0 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm6-8a3 3 0 1 1-2.829 4H2V4h6.17A3.001 3.001 0 0 1 11 2zm0 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"></path>
        </svg>
      </button>
    </header>
  );
}

export default MobileHeader;
