/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React from 'react';
import {
  filterBtnContainer,
  filterBtnWrap,
} from '../../assets/css/accomodation/listContainerHeaderStyle';

const FilterBtnItem = ({ item }) => {
  return (
    <li css={filterBtnWrap}>
      <button>
        <span>{item}</span>
      </button>
    </li>
  );
};

function FilterBtns({ btnList }) {
  return (
    <ul css={filterBtnContainer}>
      {btnList.map((btn, idx) => (
        <FilterBtnItem key={idx} item={btn} />
      ))}
    </ul>
  );
}

export default FilterBtns;
