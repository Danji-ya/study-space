/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React from 'react';
import { Desktop, Mobile } from '../common/MediaQuery';
import ListMainItem from './ListMainItem';
import MobileListMainItem from './Mobile/MobileListMainItem';

function ListMain({ accomodationList, checkin, checkout }) {
  return (
    <section>
      <Desktop>
        {accomodationList.map((item, idx) => (
          <ListMainItem key={idx} item={item} checkin={checkin} checkout={checkout} />
        ))}
      </Desktop>
      <Mobile>
        {accomodationList.map((item, idx) => (
          <MobileListMainItem key={idx} item={item} checkin={checkin} checkout={checkout} />
        ))}
      </Mobile>
    </section>
  );
}

export default ListMain;
