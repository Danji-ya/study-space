import React from 'react';
import Footer from '../components/common/Footer';
import AccomodationListHeaderContainer from '../containers/AccomodationList/AccomodationListHeaderContainer';
import AccomdationListMainContainer from '../containers/AccomodationList/AccomodationListMainContainer';

function AccomodationList() {
  return (
    <>
      <AccomodationListHeaderContainer />
      <AccomdationListMainContainer />
      <Footer />
      <Footer />
      <Footer />
    </>
  );
}

export default AccomodationList;
