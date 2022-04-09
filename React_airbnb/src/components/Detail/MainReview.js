/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React from 'react';
import { reviewContainer, title } from '../../assets/css/detail/mainReviewStyle';
import GageContainer from '../../containers/Detail/GageContainer';
import Review from '../common/Review';
import ReviewList from './ReviewList';

function MainReview() {
  return (
    <section css={reviewContainer}>
      <div css={title}>
        <Review item={{ reviewAve: 5.4, reviewTotal: 166 }} />
      </div>
      <GageContainer />
      <ReviewList />
    </section>
  );
}

export default MainReview;
