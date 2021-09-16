import React, { useState, useEffect } from 'react';
import Header from '../../components/Main/Header';

function MainHeaderCotainer() {
  const [isScroll, setIsScroll] = useState(window.scrollY > 50);
  const [isHeaderClick, setIsHeaderClick] = useState(false);

  function throttle(callback, wait = 300) {
    let timer;

    // return function () {
    //   if (timer) clearTimeout(timer);
    //   timer = setTimeout(callback, wait);
    // };

    return function () {
      if (!timer) {
        timer = setTimeout(() => {
          timer = null;
          callback();
        }, wait);
      }
    };
  }

  const onScroll = () => {
    const value = window.scrollY;
    setIsScroll(value > 50);
    setIsHeaderClick(false);
  };

  const headerClick = () => {
    setIsHeaderClick(true);
  };

  useEffect(() => {
    window.addEventListener('scroll', throttle(onScroll));
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return (
    <>
      <Header isScroll={isScroll} isHeaderClick={isHeaderClick} headerClick={headerClick} />
    </>
  );
}

export default MainHeaderCotainer;
