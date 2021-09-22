/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React from 'react';
import { listContainer } from '../../assets/css/accomodation/listContainerStyle';
import { images } from '../../constants';
import PaginationContainer from '../../containers/AccomodationList/PaginationContainer';
import ListHeader from './ListHeader';
import ListMain from './ListMain';

const mainContainer = props => `
padding-top: 80px;
display: flex;
position: relative;
width: 100%;
height: 100%;
`;

function AccomdationListMain({ accomodationList, totalAccomodationList, listPerPage }) {
  return (
    <main css={mainContainer}>
      <article css={listContainer}>
        <ListHeader />
        <ListMain accomodationList={accomodationList} />
        <PaginationContainer
          totalAccomodationList={totalAccomodationList}
          listPerPage={listPerPage}
        />
      </article>
      <article
        className="accommodation-map-wrap"
        css={css`
          flex: 1;
        `}
      >
        <img
          css={css`
            height: 100vh;
            width: 100%;
            position: sticky;
            top: 80px;
          `}
          src={images.test3.default}
        ></img>
      </article>
    </main>
  );
}

export default AccomdationListMain;
