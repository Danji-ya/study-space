/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React, { forwardRef } from 'react';
import { headerContainer } from '../../assets/css/detail/headerStyle';
import HeaderNav from '../common/HeaderNav';
import Logo from '../common/Logo';
import HeaderForm from '../Main/HeaderForm';
import SimpleForm from '../Main/SimpleForm';

const Header = forwardRef(({ isScroll, isHeaderClick, headerClick }, ref) => {
  return (
    <header ref={ref} css={headerContainer({ isHeaderClick })}>
      <Logo isScroll={true} />
      <HeaderForm isScroll={true} isHeaderClick={isHeaderClick} />
      <SimpleForm isScroll={true} isHeaderClick={isHeaderClick} headerClick={headerClick} />
      <HeaderNav isScroll={true} />
    </header>
  );
});

export default Header;
