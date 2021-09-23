/* eslint-disable no-use-before-define */
import React, { useEffect, useState } from 'react';
import Header from '../../components/AccomodationList/Header';

function AccomodationListHeaderContainer() {
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
    location: '서울시 종로구',
    checkIn: {
      month: 10,
      day: 15,
    },
    checkOut: {
      month: 10,
      day: 18,
    },
    guest: {
      guest: 1,
      child: 0,
      infant: 0,
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
