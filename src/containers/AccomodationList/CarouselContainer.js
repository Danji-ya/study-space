/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React, { useState } from 'react';
import Carousel from '../../components/AccomodationList/Carousel';

function CarouselContainer({ imgList }) {
  const [position, setPosition] = useState(0);
  const imgTotalWidth = imgList.length * 100;

  function moveSlider(type) {
    const handleType = { prev: -100, next: 100 };
    let curPosition = position + handleType[type];

    const isMinMaxSlider = pos => pos >= imgTotalWidth || pos < 0;

    if (isMinMaxSlider(curPosition)) curPosition = type === 'prev' ? 0 : imgTotalWidth - 100;

    setPosition(curPosition);
  }

  function handleSlider(e) {
    if (e.target.name.includes('prev') || e.target.name.includes('next')) {
      moveSlider(e.target.name);
    }
  }

  return (
    <Carousel
      imgList={imgList}
      imgTotalWidth={imgTotalWidth}
      position={position}
      handleSlider={handleSlider}
    />
  );
}

export default CarouselContainer;
