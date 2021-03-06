import React, { useState, useEffect } from 'react';
import Header from '../../components/Main/Header';

function MainHeaderCotainer() {
  const [isScroll, setIsScroll] = useState(window.scrollY > 50);
  const [isHeaderClick, setIsHeaderClick] = useState(false);

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

  const onScroll = () => {
    const value = window.scrollY;
    setIsScroll(value > 50);
    setIsHeaderClick(false);
  };

  const headerClick = () => {
    setIsHeaderClick(true);
  };

  useEffect(() => {
    const throttle = myThrottle(onScroll, 300);

    window.addEventListener('scroll', throttle);
    return () => {
      window.removeEventListener('scroll', throttle);
    };
  }, []);

  return <Header isScroll={isScroll} isHeaderClick={isHeaderClick} headerClick={headerClick} />;
}

export default MainHeaderCotainer;
