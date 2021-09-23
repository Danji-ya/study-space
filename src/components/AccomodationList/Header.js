/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React from 'react';
import { headerContainer } from '../../assets/css/accomodation/headerStyle';
import HeaderNav from '../common/HeaderNav';
import Logo from '../common/Logo';
import HeaderForm from '../Main/HeaderForm';
import SimpleSearchForm from './SimpleSearchForm';

function Header({ searchResult, isSearchFormClick, handleSearchForm }) {
  return (
    <header css={headerContainer({ isSearchFormClick })}>
      <Logo isScroll="undefined" />
      <SimpleSearchForm
        searchResult={searchResult}
        isSearchFormClick={isSearchFormClick}
        handleSearchForm={handleSearchForm}
      />
      <HeaderForm isScroll={!isSearchFormClick} />
      <HeaderNav isScroll="undefined" />
    </header>
  );
}

export default Header;
