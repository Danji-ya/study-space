import React from 'react';
import { useSelector } from 'react-redux';
import SummaryHeader from '../../components/AccomodationList/SummaryHeader';

function SummaryHeaderContainer({ totalListLength }) {
  const { location, checkin, checkout, guestNum } = useSelector(state => state.searchForm);
  return (
    <SummaryHeader
      totalListLength={totalListLength}
      searchResult={{ location, checkin, checkout, guestNum }}
    />
  );
}

export default SummaryHeaderContainer;
