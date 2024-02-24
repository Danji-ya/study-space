/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React from 'react';
import { tripItem, tripItemTitle } from '../../../assets/css/main/nearTripStyle';

function NearTripItem({ item }) {
  return (
    <li css={tripItem}>
      <img src={item.img} />
      <div>
        <div css={tripItemTitle}>{item.title}</div>
        <div>{item.subtitle}</div>
      </div>
    </li>
  );
}

export default NearTripItem;
