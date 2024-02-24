/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React from 'react';
import Footer from '../components/common/Footer';
import DetailHeaderContainer from '../containers/Detail/DetailHeaderContainer';
import DetailMainContainer from '../containers/Detail/DetailMainContainer';

const footerCustom = props => css`
  > footer {
    padding: 40px 20vw 0 20vw;
  }
`;

function Detail() {
  return (
    <>
      <DetailHeaderContainer />
      <DetailMainContainer />
      <div css={footerCustom}>
        <Footer paddingStyle={'20vw'} />
      </div>
    </>
  );
}

export default Detail;
