import React from 'react';
import FilterBtnCotainer from '../../containers/AccomodationList/FilterBtnCotainer';
import SummaryHeader from './SummaryHeader';

function ListHeader({ totalAccomodationList }) {
  return (
    <section>
      <SummaryHeader totalListLength={totalAccomodationList.length} />
      <FilterBtnCotainer />
    </section>
  );
}

export default ListHeader;
