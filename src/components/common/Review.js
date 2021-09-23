/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React from 'react';
import { AiFillStar } from 'react-icons/ai';
import { reviewWrap } from '../../assets/css/accomodation/listContainerMainStyle';

function Review({ item }) {
  return (
    <div css={reviewWrap}>
      <AiFillStar />
      {item.reviewAve}
      <span>{`(후기 ${item.reviewTotal}개)`}</span>
    </div>
  );
}

export default Review;
