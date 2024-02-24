import React from 'react';
import Pagination from '../../components/AccomodationList/Pagination';

function PaginationContainer({
  totalAccomodationList,
  listPerPage,
  accomodationList,
  idxOfFirstList,
  changePage,
  currentPage,
}) {
  const pageNumbers = Array.from(
    new Array(Math.ceil(totalAccomodationList.length / listPerPage)),
    (v, i) => i + 1,
  );

  return (
    <Pagination
      pageNumbers={pageNumbers}
      totalListLength={totalAccomodationList.length}
      listPerPage={listPerPage}
      accomodationList={accomodationList}
      idxOfFirstList={idxOfFirstList}
      changePage={changePage}
      currentPage={currentPage}
    />
  );
}

export default PaginationContainer;
