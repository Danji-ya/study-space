/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React from 'react';
import MainDescription from '../../components/Detail/MainDescription';
import MainMap from '../../components/Detail/MainMap';
import MainReview from '../../components/Detail/MainReview';
import MainTitle from '../../components/Detail/MainTitle';

function DetailMainContainer() {
  // MainTitle에게 각자 해당하는 item 정보 전달
  return (
    <main
      css={css`
        padding: 80px 20vw 0 20vw;
      `}
    >
      <MainTitle />
      <MainDescription />
      <MainReview />
      <MainMap />
    </main>
  );
}

export default DetailMainContainer;
