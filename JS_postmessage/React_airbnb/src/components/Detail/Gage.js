/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React from 'react';
import {
  fillFull,
  fillGage,
  fillPoint,
  fillWrap,
  gageItem,
  gageWrap,
} from '../../assets/css/detail/gageStyle';

const GageItem = ({ item }) => {
  const fillFullWidth = 122;
  const gageCell = (item.score / 5) * fillFullWidth;

  return (
    <div css={gageItem}>
      <div>{item.title}</div>
      <div css={fillWrap}>
        <div css={fillFull({ fillFullWidth })}>
          <span css={fillGage({ gageCell })}></span>
        </div>
        <div>
          <span css={fillPoint}>{item.score}</span>
        </div>
      </div>
    </div>
  );
};

function Gage({ gages }) {
  return (
    <div css={gageWrap}>
      {gages.map((gage, idx) => (
        <GageItem key={idx} item={gage} />
      ))}
    </div>
  );
}

export default Gage;
