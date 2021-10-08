/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React from 'react';
import {
  filterBtnContainer,
  filterBtnWrap,
} from '../../assets/css/accomodation/listContainerHeaderStyle';
import { Desktop, Mobile } from '../common/MediaQuery';

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
    <>
      <Desktop>
        <ul css={filterBtnContainer}>
          {btnList.map((btn, idx) => (
            <FilterBtnItem key={idx} item={btn} />
          ))}
        </ul>
      </Desktop>
      <Mobile>
        <ul css={filterBtnContainer}>
          {['필터'].map((btn, idx) => (
            <FilterBtnItem key={idx} item={btn} />
          ))}
        </ul>
      </Mobile>
    </>
  );
}

export default FilterBtns;
