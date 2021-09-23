/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React from 'react';
import {
  checkIn,
  checkOut,
  dateSetting,
  feeBoxContainer,
  feeBoxTitle,
  reservationBtn,
  selectBoxWrap,
  selectDate,
  selectGuest,
  divide,
} from '../../assets/css/detail/feeboxStyle';
import Review from '../common/Review';

function FeeBox() {
  return (
    <div css={feeBoxContainer}>
      <div css={feeBoxTitle}>
        <div css={dateSetting}>
          요금을 확인하려면 날짜를
          <br /> 입력하세요.
        </div>
        <Review item={{ reviewAve: 4.86, reviewTotal: 124 }} />
      </div>
      <div css={selectBoxWrap}>
        <div css={selectDate}>
          <div css={checkIn}>
            <h5>체크인</h5>
            <p>날짜 추가</p>
          </div>
          <div css={divide}></div>
          <div css={checkOut}>
            <h5>체크아웃</h5>
            <p>날짜 추가</p>
          </div>
        </div>
        <div css={selectGuest}>
          <div>
            <h5>인원</h5>
            <p>게스트 1명</p>
          </div>
        </div>
      </div>
      <div css={reservationBtn}>예약 가능 여부 보기</div>
    </div>
  );
}

export default FeeBox;
