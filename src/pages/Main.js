/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React from 'react';
import Footer from '../components/Common/Footer';
import MainArticle from '../components/Main/MainArticle';
import MainHeaderCotainer from '../containers/Main/MainHeaderCotainer';

function Main() {
  return (
    <>
      <MainHeaderCotainer />
      <MainArticle />
      <Footer />
    </>
  );
}

export default Main;
