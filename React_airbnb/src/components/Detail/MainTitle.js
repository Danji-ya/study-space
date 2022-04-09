/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React from 'react';
import {
  imgBtnWrap,
  imgContainer,
  imgWrap,
  linkWrap,
  mainTitleContainer,
  saveIcon,
  shareIcon,
  subtitleContainer,
  subtitleWrap,
  titleContainer,
} from '../../assets/css/detail/mainTitleStyle';
import DetailImageModalCotainer from '../../containers/Detail/DetailImageModalCotainer';
import Review from '../common/Review';

function MainTitle() {
  return (
    <section css={mainTitleContainer}>
      <div css={titleContainer}>
        <h1>⭐️N타워전망⭐️단독주택+수영장[유료]⛱16명 OK🎉So Seoulish Stay【써울스테이】</h1>
      </div>
      <div css={subtitleContainer}>
        <div css={subtitleWrap}>
          <Review item={{ reviewAve: 5.4, reviewTotal: 166 }} />
          <span> · Huam-dong, Yongsan-gu, 서울, 한국</span>
        </div>
        <div css={linkWrap}>
          <div css={shareIcon}>
            <svg viewBox="0 0 32 32">
              <g fill="none">
                <path d="M27 18v9a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-9"></path>
                <path d="M16 3v23V3z"></path>
                <path d="M6 13l9.293-9.293a1 1 0 0 1 1.414 0L26 13"></path>
              </g>
            </svg>
            <span>공유하기</span>
          </div>
          <div css={saveIcon}>
            <svg viewBox="0 0 32 32">
              <path d="m16 28c7-4.733 14-10 14-17 0-1.792-.683-3.583-2.05-4.95-1.367-1.366-3.158-2.05-4.95-2.05-1.791 0-3.583.684-4.949 2.05l-2.051 2.051-2.05-2.051c-1.367-1.366-3.158-2.05-4.95-2.05-1.791 0-3.583.684-4.949 2.05-1.367 1.367-2.051 3.158-2.051 4.95 0 7 7 12.267 14 17z"></path>
            </svg>
            <span>저장</span>
          </div>
        </div>
      </div>

      <div css={imgContainer}>
        <div css={imgWrap}>
          <div>
            <img
              src="https://a0.muscache.com/im/pictures/6edce0dc-bafb-4361-b532-0a80d7639d4f.jpg?im_w=960"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://a0.muscache.com/im/pictures/723f4fd1-dc97-4f1b-8c73-abadda0396b3.jpg?im_w=480"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://a0.muscache.com/im/pictures/cd24ea2d-cf5e-4c7b-9af7-201a18330a45.jpg?im_w=480"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://a0.muscache.com/im/pictures/185f0dab-1a87-489d-95ff-bb50270f3682.jpg?im_w=480"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://a0.muscache.com/im/pictures/723f4fd1-dc97-4f1b-8c73-abadda0396b3.jpg?im_w=480"
              alt=""
            />
          </div>
        </div>
        <DetailImageModalCotainer />
      </div>
    </section>
  );
}

export default MainTitle;
