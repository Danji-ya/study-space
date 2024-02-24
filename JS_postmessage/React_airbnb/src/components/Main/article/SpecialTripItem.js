/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import React from 'react';
import { stRecommandWrap, stListItem } from '../../../assets/css/main/specialTripStyle';

function SpecialTripItem({ item }) {
  return (
    <li css={stListItem({ recommand: item?.recommand })}>
      <div>
        {item?.recommand && (
          <p css={stRecommandWrap}>
            <span>👍</span>
          </p>
        )}
        <img src={item.img} />
      </div>

      <div>
        <h3>{item.title}</h3>
        <p>{item.subtitle}</p>
      </div>
    </li>
  );
}

export default SpecialTripItem;
