/* eslint-disable no-use-before-define */
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Header from '../../components/AccomodationList/Header';
import { useQuery } from '../../utils/utils';

function AccomodationListHeaderContainer() {
  const query = useQuery();
  const { location, checkin, checkout, guestNum } = useSelector(state => state.searchForm);
  const [isSearchFormClick, setIsSearchFormClick] = useState(false);

  useEffect(() => {
    const throttle = myThrottle(handleScroll);

    window.addEventListener('scroll', throttle);
    return () => {
      window.removeEventListener('scroll', throttle);
    };
  }, []);

  function handleScroll() {
    setIsSearchFormClick(false);
  }

  function myThrottle(callback, wait = 300) {
    let timer;

    return () => {
      if (!timer) {
        timer = setTimeout(() => {
          timer = null;
          callback();
        }, wait);
      }
    };
  }

  function handleSearchForm() {
    setIsSearchFormClick(true);
  }

  return (
    <Header
      searchResult={{ location, checkin, checkout, guestNum }}
      isSearchFormClick={isSearchFormClick}
      handleSearchForm={handleSearchForm}
    />
  );
}

export default AccomodationListHeaderContainer;
