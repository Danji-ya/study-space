/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React from 'react';
import { listMapContainer } from '../../assets/css/accomodation/listMapContainerStyle';
import { listContainer } from '../../assets/css/accomodation/listContainerStyle';
import PaginationContainer from '../../containers/AccomodationList/PaginationContainer';
import GoogleMap from './GoogleMap';
import ListHeader from './ListHeader';
import ListMain from './ListMain';
import MapButton from './MapButton';

const mainContainer = props => css`
  padding-top: 80px;
  display: flex;
  position: relative;
  width: 100%;
  height: 100%;

  @media (max-width: 950px) {
    padding-top: 8vh;
  }
`;

function AccomdationListMain({
  accomodationList,
  totalAccomodationList,
  listPerPage,
  idxOfFirstList,
  changePage,
  currentPage,
  checkin,
  checkout,
}) {
  return (
    <main css={mainContainer}>
      <article css={listContainer}>
        <ListHeader totalAccomodationList={totalAccomodationList} />

        <ListMain accomodationList={accomodationList} checkin={checkin} checkout={checkout} />

        <PaginationContainer
          accomodationList={accomodationList}
          idxOfFirstList={idxOfFirstList}
          totalAccomodationList={totalAccomodationList}
          listPerPage={listPerPage}
          changePage={changePage}
          currentPage={currentPage}
        />
      </article>
      <article css={listMapContainer}>
        <GoogleMap />
      </article>
      <MapButton />
    </main>
  );
}

export default AccomdationListMain;
