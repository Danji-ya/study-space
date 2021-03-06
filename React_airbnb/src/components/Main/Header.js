/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React from 'react';
import { headerCol, headerContainer } from '../../assets/css/common/headerStyle';
import HeaderForm from './HeaderForm';
import HeaderNav from '../common/HeaderNav';
import Logo from '../common/Logo';
import SimpleForm from './SimpleForm';

function Header({ isScroll, isHeaderClick, headerClick }) {
  return (
    <header css={headerContainer({ isScroll })}>
      <Logo isScroll={isScroll} />
      <HeaderForm isScroll={isScroll} isHeaderClick={isHeaderClick} isMainHeader={true} />
      <SimpleForm isScroll={isScroll} isHeaderClick={isHeaderClick} headerClick={headerClick} />
      <HeaderNav isScroll={isScroll} />
    </header>
  );
}

export default Header;
