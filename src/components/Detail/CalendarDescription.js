/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React from 'react';
import CalendarContainer from '../../containers/Main/CalendarContainer';

const CalendarDescContainer = props => css`
  padding: 4vh 0 0 0;
`;

const title = props => css`
  font-size: 22px;
  font-weight: 600;

  margin-bottom: 10px;
`;

const subtitle = props => css`
  font-size: 14px;
  color: rgb(113, 113, 113);
`;

const keyboardIcon = props => css`
  svg {
    display: block;
    height: 24px;
    width: 24px;
    fill: currentcolor;
  }
`;

function CalendarDescription() {
  return (
    <div css={CalendarDescContainer}>
      <h2 css={title}>Huam-dong, Yongsan-gu에서 2박</h2>
      <p css={subtitle}>2021년 10월 15일 - 2021년 10월 17일</p>
      <div
        css={css`
          > div {
            margin: 0;
            padding: 4vh 1vw;
          }
        `}
      >
        <CalendarContainer />
      </div>
      <div css={keyboardIcon}>
        <svg viewBox="0 0 32 32">
          <path d="M29 5a2 2 0 0 1 1.995 1.85L31 7v18a2 2 0 0 1-1.85 1.995L29 27H3a2 2 0 0 1-1.995-1.85L1 25V7a2 2 0 0 1 1.85-1.995L3 5zm0 2H3v18h26zm-8 13v2H11v-2zm3-5a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm-4 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm-4 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm-4 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm-4 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm16-4a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm-4 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm-4 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm-4 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm-4 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"></path>
        </svg>
      </div>
    </div>
  );
}

export default CalendarDescription;
