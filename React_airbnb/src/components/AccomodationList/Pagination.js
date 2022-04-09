/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React from 'react';
import {
  page,
  pageBtn,
  pageBtnDisable,
  pageWrap,
  paginationContainer,
  paginationPaddingContainer,
  totalPage,
} from '../../assets/css/accomodation/paginationStyle';

const PageItem = ({ pageNum, changePage, isCurrentPage }) => {
  return (
    <li css={page({ isCurrentPage })} onClick={() => changePage(pageNum)}>
      {pageNum}
    </li>
  );
};

function Pagination({
  pageNumbers,
  totalListLength,
  listPerPage,
  accomodationList,
  idxOfFirstList,
  changePage,
  currentPage,
}) {
  const firstPageNum = 1;
  const lastPageNum = pageNumbers.length;

  return (
    <section css={paginationPaddingContainer}>
      <div css={paginationContainer}>
        <ul css={pageWrap}>
          {currentPage === firstPageNum ? (
            <li css={pageBtnDisable}>&#10094;</li>
          ) : (
            <li css={pageBtn} onClick={() => changePage(currentPage - 1)}>
              &#10094;
            </li>
          )}

          {pageNumbers.map((pageNum, idx) => (
            <PageItem
              pageNum={pageNum}
              key={idx}
              changePage={changePage}
              isCurrentPage={pageNum === currentPage}
            />
          ))}
          {currentPage === lastPageNum ? (
            <li css={pageBtnDisable}>&#10095;</li>
          ) : (
            <li css={pageBtn} onClick={() => changePage(currentPage + 1)}>
              &#10095;
            </li>
          )}
        </ul>
        <div css={totalPage}>{`총 ${totalListLength}개의 숙소 중 ${idxOfFirstList + 1} ~ ${
          idxOfFirstList + accomodationList.length
        }번째 숙소`}</div>
      </div>
    </section>
  );
}

export default Pagination;
