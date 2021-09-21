/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React from 'react';
import ListMainItem from './ListMainItem';

function ListMain({ accomodationList }) {
  return (
    <section>
      {accomodationList.map((item, idx) => (
        <ListMainItem key={idx} item={item} />
      ))}
    </section>
  );
}

export default ListMain;
