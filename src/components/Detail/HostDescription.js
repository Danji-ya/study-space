/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React from 'react';
import { FaUserAstronaut } from 'react-icons/fa';
import { hostDescContainer, hostSubtitle, hostTitle } from '../../assets/css/detail/hostDescStyle';

function HostDescription() {
  return (
    <section css={hostDescContainer}>
      <div>
        <FaUserAstronaut size={80} />
      </div>
      <div>
        <h2 css={hostTitle}>
          호스트 <span>Arlo</span> 님 소개
        </h2>
        <p css={hostSubtitle}>슈퍼호스트 · 호스팅 시작 연도: 2019년 12월년</p>
      </div>
    </section>
  );
}

export default HostDescription;
