/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React from 'react';
import {
  descriptionWrap,
  extendArrow,
  mapContainer,
  mapWrap,
  title,
} from '../../assets/css/detail/mainMapStyle';
import { ell } from '../../assets/css/detail/mainReviewStyle';
import { images } from '../../constants';

function MainMap() {
  return (
    <section css={mapContainer}>
      <h2 css={title}>호스팅 지역</h2>

      <div css={mapWrap}>
        <img src={images.test4.default} alt="" />
      </div>
      <div css={descriptionWrap}>
        <h3>Huam-dong, Yongsan-gu, 서울, 한국</h3>

        <p css={ell}>
          근처에 맛집이 듬뿍있는 후암시장과 홍철책방,편의점등 편의시설이 많이 있어요! 서울역 12번
          출구에서 도보로 8분 , 갈월동 버스정류장 5분 거리에 있어 교통이 편리해요! 서울로를 거쳐서
          가면 남대문 광화문 명동등 4대문도 산책삼아 갈수 있어요~
        </p>
      </div>
      <div css={extendArrow}>
        <span>더보기</span>
        <svg viewBox="0 0 32 32">
          <g fill="none">
            <path d="m12 4 11.2928932 11.2928932c.3905243.3905243.3905243 1.0236893 0 1.4142136l-11.2928932 11.2928932"></path>
          </g>
        </svg>
      </div>
    </section>
  );
}

export default MainMap;
