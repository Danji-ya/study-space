import React from 'react';
import FilterBtnCotainer from '../../containers/AccomodationList/FilterBtnCotainer';
import SummaryHeader from './SummaryHeader';

function ListHeader() {
  return (
    <section>
      <SummaryHeader />
      <FilterBtnCotainer />
    </section>
  );
}

export default ListHeader;
