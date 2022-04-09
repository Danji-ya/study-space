/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import React from 'react';
import { tripItem, tripItemSubtitle } from '../../../assets/css/main/anywhereTripStyle';

function AnywhereTripItem({ item }) {
  return (
    <li css={tripItem}>
      <img src={item.img} />
      <div css={tripItemSubtitle}>{item.subtitle}</div>
    </li>
  );
}

export default AnywhereTripItem;
