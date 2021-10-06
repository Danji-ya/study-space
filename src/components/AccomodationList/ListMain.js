/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React from 'react';
import ListMainItem from './ListMainItem';

function ListMain({ accomodationList, checkin, checkout }) {
  return (
    <section>
      {accomodationList.map((item, idx) => (
        <ListMainItem key={idx} item={item} checkin={checkin} checkout={checkout} />
      ))}
    </section>
  );
}

export default ListMain;
