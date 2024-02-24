import React from 'react';
import Gage from '../../components/Detail/Gage';

function GageContainer() {
  const gages = [
    { title: '청결도', score: 4.8 },
    { title: '정확성', score: 4.5 },
    { title: '의사소통', score: 4.3 },
    { title: '위치', score: 2.5 },
    { title: '체크인', score: 4.6 },
    { title: '가격 대비 만족도', score: 5.0 },
  ];

  return <Gage gages={gages} />;
}

export default GageContainer;
