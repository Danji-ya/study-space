import React from 'react';
import AnywhereTrip from './article/AnywhereTrip';
import HostingStart from './article/HostingStart';
import MainBackground from './article/MainBackground';
import NearTrip from './article/NearTrip';
import SpecialTrip from './article/SpecialTrip';

function MainArticle() {
  return (
    <main>
      <MainBackground />
      <NearTrip />
      <AnywhereTrip />
      <HostingStart />
      <SpecialTrip />
    </main>
  );
}

export default MainArticle;
