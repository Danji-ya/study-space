import React, { useEffect, useRef, useState } from 'react';
import Header from '../../components/Detail/Header';

function DetailHeaderContainer() {
  const [isScroll, setIsScroll] = useState(window.scrollY > 50);
  const [isHeaderClick, setIsHeaderClick] = useState(false);
  const refHeader = useRef();

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

  const closeHeaderClick = e => {
    if (!refHeader.current?.contains(e.target)) {
      setIsHeaderClick(false);
    }
  };

  useEffect(() => {
    const throttle = myThrottle(onScroll, 300);

    window.addEventListener('scroll', throttle);
    window.addEventListener('click', closeHeaderClick);
    return () => {
      window.removeEventListener('scroll', throttle);
      window.removeEventListener('click', closeHeaderClick);
    };
  }, []);

  return (
    <Header
      ref={refHeader}
      isScroll={isScroll}
      isHeaderClick={isHeaderClick}
      headerClick={headerClick}
    />
  );
}

export default DetailHeaderContainer;
