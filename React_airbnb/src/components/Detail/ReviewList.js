/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React from 'react';
import {
  ell,
  reviewItem,
  reviewList,
  userImg,
  userProfile,
} from '../../assets/css/detail/mainReviewStyle';

function ReviewList() {
  return (
    <div css={reviewList}>
      <div css={reviewItem}>
        <div css={userProfile}>
          <div css={userImg}>
            <img src="https://a0.muscache.com/defaults/user_pic-225x225.png?im_w=240" alt="" />
          </div>
          <div>
            <h2>알로</h2>
            <p>2021년 8월</p>
          </div>
        </div>
        <p css={ell}>방도 너무 넓고 너무 좋았습니다! 강추해요!</p>
      </div>
      <div css={reviewItem}>
        <div css={userProfile}>
          <div css={userImg}>
            <img src="https://a0.muscache.com/defaults/user_pic-225x225.png?im_w=240" alt="" />
          </div>
          <div>
            <h2>알로</h2>
            <p>2021년 8월</p>
          </div>
        </div>
        <p css={ell}>
          {`위치가 많이 높을까 걱정했는데 생각보다 좋았습니다!
          방들도 넓어서 좋습니다! 
          근처에 예쁜카페들도 많고 맛집들도 많아서 좋더라구요!!
          필요한 물품들도 거의 다 구비되어 있어서
          다음에는 옷만 챙겨가도 될 것 같더라구요~ 문의할 때도 친절하게 답해주셔서 더 좋아요~ 숙소
          강추합니당!`}
        </p>
      </div>
      <div css={reviewItem}>
        <div css={userProfile}>
          <div css={userImg}>
            <img src="https://a0.muscache.com/defaults/user_pic-225x225.png?im_w=240" alt="" />
          </div>
          <div>
            <h2>알로</h2>
            <p>2021년 8월</p>
          </div>
        </div>
        <p css={ell}>
          {`위치가 많이 높을까 걱정했는데 생각보다 좋았습니다!
          방들도 넓어서 좋습니다! 
          근처에 예쁜카페들도 많고 맛집들도 많아서 좋더라구요!!
          필요한 물품들도 거의 다 구비되어 있어서
          다음에는 옷만 챙겨가도 될 것 같더라구요~ 문의할 때도 친절하게 답해주셔서 더 좋아요~ 숙소
          강추합니당!`}
        </p>
      </div>
      <div css={reviewItem}>
        <div css={userProfile}>
          <div css={userImg}>
            <img src="https://a0.muscache.com/defaults/user_pic-225x225.png?im_w=240" alt="" />
          </div>
          <div>
            <h2>알로</h2>
            <p>2021년 8월</p>
          </div>
        </div>
        <p css={ell}>방도 너무 넓고 너무 좋았습니다! 강추해요!</p>
      </div>
      <div css={reviewItem}>
        <div css={userProfile}>
          <div css={userImg}>
            <img src="https://a0.muscache.com/defaults/user_pic-225x225.png?im_w=240" alt="" />
          </div>
          <div>
            <h2>알로</h2>
            <p>2021년 8월</p>
          </div>
        </div>
        <p css={ell}>
          {`위치가 많이 높을까 걱정했는데 생각보다 좋았습니다!
          방들도 넓어서 좋습니다! 
          근처에 예쁜카페들도 많고 맛집들도 많아서 좋더라구요!!
          필요한 물품들도 거의 다 구비되어 있어서
          다음에는 옷만 챙겨가도 될 것 같더라구요~ 문의할 때도 친절하게 답해주셔서 더 좋아요~ 숙소
          강추합니당!`}
        </p>
      </div>
    </div>
  );
}

export default ReviewList;
