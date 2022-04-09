import React from 'react';
import FilterBtnCotainer from '../../containers/AccomodationList/FilterBtnCotainer';
import SummaryHeaderContainer from '../../containers/AccomodationList/SummaryHeaderContainer';

function ListHeader({ totalAccomodationList }) {
  return (
    <section>
      <SummaryHeaderContainer totalListLength={totalAccomodationList.length} />
      <FilterBtnCotainer />
    </section>
  );
}

export default ListHeader;
