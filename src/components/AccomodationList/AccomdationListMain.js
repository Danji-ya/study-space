/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React from 'react';
import { listContainer } from '../../assets/css/accomodation/listContainerStyle';
import { images } from '../../constants';
import PaginationContainer from '../../containers/AccomodationList/PaginationContainer';
import GoogleMap from './GoogleMap';
import ListHeader from './ListHeader';
import ListMain from './ListMain';

const mainContainer = props => `
padding-top: 80px;
display: flex;
position: relative;
width: 100%;
height: 100%;
`;

function AccomdationListMain({
  accomodationList,
  totalAccomodationList,
  listPerPage,
  idxOfFirstList,
  changePage,
  currentPage,
}) {
  return (
    <main css={mainContainer}>
      <article css={listContainer}>
        <ListHeader totalAccomodationList={totalAccomodationList} />
        <ListMain accomodationList={accomodationList} />
        <PaginationContainer
          accomodationList={accomodationList}
          idxOfFirstList={idxOfFirstList}
          totalAccomodationList={totalAccomodationList}
          listPerPage={listPerPage}
          changePage={changePage}
          currentPage={currentPage}
        />
      </article>
      <article
        css={css`
          flex: 1;
          height: 100vh;
          position: sticky;
          top: 80px;

          @media (max-width: 1128px) {
            display: none;
          }
        `}
      >
        <GoogleMap />
      </article>
    </main>
  );
}

export default AccomdationListMain;
