/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React from 'react';
import { AiFillStar } from 'react-icons/ai';
import {
  listMainPaddingContainer,
  listMainItemContainer,
  sideTextContainer,
  sideTextTop,
  title,
  heart,
  divide,
  feature,
  option,
  sideTextBottom,
  reviewWrap,
  priceWrap,
  eachPrice,
  totalPrice,
} from '../../assets/css/accomodation/listContainerMainStyle';
import CarouselContainer from '../../containers/AccomodationList/CarouselContainer';

function ListMainItem({ item }) {
  return (
    <div css={listMainPaddingContainer}>
      <div css={listMainItemContainer}>
        <CarouselContainer imgList={item.imgList} />
        <div css={sideTextContainer}>
          <div css={sideTextTop}>
            <div css={title}>
              <div>
                <p>{item.title}</p>
                <h3>{item.subtitle}</h3>
              </div>
              <button css={heart({ isDibs: item.isDibs })}>
                <svg viewBox="0 0 32 32">
                  <path d="m16 28c7-4.733 14-10 14-17 0-1.792-.683-3.583-2.05-4.95-1.367-1.366-3.158-2.05-4.95-2.05-1.791 0-3.583.684-4.949 2.05l-2.051 2.051-2.05-2.051c-1.367-1.366-3.158-2.05-4.95-2.05-1.791 0-3.583.684-4.949 2.05-1.367 1.367-2.051 3.158-2.051 4.95 0 7 7 12.267 14 17z"></path>
                </svg>
              </button>
            </div>
            <div css={divide}></div>
            <p css={feature}>{item.feature}</p>
            <p css={option}>{item.option}</p>
          </div>
          <div css={sideTextBottom}>
            <div css={reviewWrap}>
              <AiFillStar />
              {item.reviewAve}
              <span>{`(후기 ${item.reviewTotal}개)`}</span>
            </div>
            <div css={priceWrap}>
              <div css={eachPrice}>
                <strong>₩{(item.price * 1).toLocaleString()}</strong> / 1박
              </div>
              <div css={totalPrice}>
                <span>{`총액 ₩${(item.price * 2).toLocaleString()}`}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ListMainItem;
