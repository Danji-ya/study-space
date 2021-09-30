/* eslint-disable no-use-before-define */
import React, { useEffect, useState } from 'react';
import Header from '../../components/AccomodationList/Header';
import { useQuery } from '../../utils/utils';

function AccomodationListHeaderContainer() {
  const query = useQuery();
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

  // 나중에 전역 상태로 관리
  const searchResult = {
    location: query.get('query'),
    checkIn: {
      month: 10,
      day: 15,
    },
    checkOut: {
      month: 10,
      day: 18,
    },
    guest: {
      adult: +query.get('adults'),
      child: +query.get('children'),
      infant: +query.get('infans'),
    },
  };

  return (
    <Header
      searchResult={searchResult}
      isSearchFormClick={isSearchFormClick}
      handleSearchForm={handleSearchForm}
    />
  );
}

export default AccomodationListHeaderContainer;
