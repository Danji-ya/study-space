/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React from 'react';
import { Link } from 'react-router-dom';

import CarouselContainer from '../../../containers/AccomodationList/CarouselContainer';
import { getDateDiff } from '../../../utils/utils';
import Review from '../../common/Review';

const description = props => css`
  font-size: 0.9rem;

  > div:not(:last-child) {
    margin: 0.3vh 0;
  }
`;

const title = props => css``;

const subtitle = props => css`
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  line-height: 1.2rem;
  overflow: hidden;
`;

const priceWrap = props => css`
  margin-top: 0.5vh;
`;

const eachPrice = props => css`
  margin: 0.3vh 0;
  strong {
    font-weight: bold;
  }
`;

const totalPrice = props => css`
  font-size: 14px;
  font-weight: 400;
  text-decoration: underline;
  line-height: 18px;
  color: rgb(113, 113, 113);
`;

function MobileListMainItem({ item, checkin, checkout }) {
  return (
    <div
      css={css`
        padding: 2vh 0;
      `}
    >
      <CarouselContainer imgList={item.imgList} />

      <Link to={`/detail/${item.id}?${'adults='}&${'children='}`}>
        <div css={description}>
          <div>
            <Review item={item} />
          </div>

          <div css={title}>{item.title}</div>
          <div css={subtitle}>{item.subtitle}</div>

          <div css={priceWrap}>
            <p css={eachPrice}>
              <strong>₩{(item.price * 1).toLocaleString()}</strong> / 1박
            </p>

            <p css={totalPrice}>
              {checkin &&
                checkout &&
                `총액 ₩${(item.price * getDateDiff(checkin, checkout)).toLocaleString()}`}
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default MobileListMainItem;
