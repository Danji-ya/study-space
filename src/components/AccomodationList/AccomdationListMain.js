/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React from 'react';
import { listContainer } from '../../assets/css/accomodation/listContainerStyle';
import { images } from '../../constants';
import ListHeader from './ListHeader';
import ListMain from './ListMain';

const mainContainer = props => `
padding-top: 80px;
display: flex;
position: relative;
width: 100%;
height: 100%;
`;

function AccomdationListMain({ accomodationList }) {
  return (
    <main css={mainContainer}>
      <article css={listContainer}>
        <ListHeader />
        <ListMain accomodationList={accomodationList} />
        {/* <section class="pages">
          <div class="pagination-wrap">
            <div class="pagination">
              <a class="prev">&#10094;</a>
              <div class="page-list">
                <div class="page active">1</div>
                <div class="page inactive">2</div>
                <div class="page inactive">3</div>
                <div class="page inactive">4</div>
                <div class="page inactive">5</div>
                <div class="page ellipsis">...</div>
                <div class="page inactive">15</div>
              </div>
              <a class="next active">&#10095;</a>
            </div>
            <div class="total-page">총 300개 이상의 숙소 중 1 ~20번째</div>
          </div>
          <div class="help-text">
            여행 날짜와 게스트 인원수를 입력하면 1박당 총 요금을 확인할 수 있습니다.
          </div>
        </section> */}
      </article>
      <article
        class="accommodation-map-wrap"
        css={css`
          flex: 1;
        `}
      >
        <img
          css={css`
            height: 100vh;
            width: 100%;
            position: sticky;
            top: 80px;
          `}
          src={images.test3.default}
        ></img>
      </article>
    </main>
  );
}

export default AccomdationListMain;
