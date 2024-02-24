/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React from 'react';
import { sliderCol } from '../../assets/css/accomodation/sliderStyle';

function SliderCol({ imgSrc }) {
  return (
    <div css={sliderCol}>
      <img src={imgSrc} alt="" />
    </div>
  );
}

export default SliderCol;
