/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React from 'react';
import {
  dotRow,
  nextBtn,
  prevBtn,
  sliderContainer,
  sliderRow,
} from '../../assets/css/accomodation/sliderStyle';
import SliderCol from './SliderCol';
import DotCol from './DotCol';

function Carousel({ imgList, position, imgTotalWidth, handleSlider }) {
  return (
    <div css={sliderContainer}>
      <div css={sliderRow({ imgTotalWidth, position })}>
        {imgList.map((img, idx) => (
          <SliderCol key={idx} imgSrc={img} />
        ))}
      </div>

      <a name="prev" onClick={handleSlider} css={prevBtn({ position })}>
        &#10094;
      </a>
      <a name="next" onClick={handleSlider} css={nextBtn({ position, imgTotalWidth })}>
        &#10095;
      </a>

      <div css={dotRow}>
        {imgList.map((img, idx) => (
          <DotCol key={idx} idx={idx} position={position} />
        ))}
      </div>
    </div>
  );
}

export default Carousel;
