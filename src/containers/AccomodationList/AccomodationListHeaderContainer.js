/* eslint-disable no-use-before-define */
import React, { useEffect, useState } from 'react';
import Header from '../../components/AccomodationList/Header';

function AccomodationListHeaderContainer() {
  const [isSearchFormClick, setIsSearchFormClick] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', throttle(handleScroll));
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  function handleScroll() {
    setIsSearchFormClick(false);
  }

  function throttle(callback, wait = 300) {
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
      isAccomodationList={true}
    />
  );
}

export default AccomodationListHeaderContainer;
