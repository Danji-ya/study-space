import React from 'react';

const Page = ({ pageNum }) => {
  return <li>{pageNum}</li>;
};

function PaginationContainer({ totalAccomodationList, listPerPage }) {
  return <div>hi</div>;
  // console.log(totalAccomodationList.length, listPerPage);

  // const pageNumbers = Array.from(
  //   new Array(Math.ceil(totalAccomodationList.length / listPerPage)),
  //   (v, i) => i + 1,
  // );

  // console.log(pageNumbers);

  // return (
  //   <section class="pages">
  //     <div class="pagination-wrap">
  //       <div class="pagination">
  //         <a class="prev">&#10094;</a>
  //         <ul>
  //           {pageNumbers.map((pageNum, idx) => (
  //             <Page pageNum={pageNum} key={idx} />
  //           ))}
  //         </ul>
  //         <a class="next active">&#10095;</a>
  //       </div>
  //       <div class="total-page">{`총 ${totalAccomodationList.length}개의 숙소 중 1 ~ ${listPerPage}번째`}</div>
  //     </div>
  //     <div class="help-text">
  //       여행 날짜와 게스트 인원수를 입력하면 1박당 총 요금을 확인할 수 있습니다.
  //     </div>
  //   </section>
  // );
}

export default PaginationContainer;
