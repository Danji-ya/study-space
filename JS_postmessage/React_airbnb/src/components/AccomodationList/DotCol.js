/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React from 'react';
import { dot } from '../../assets/css/accomodation/sliderStyle';

function DotCol({ idx, position }) {
  return <span css={dot({ idx, position })}></span>;
}

export default DotCol;
