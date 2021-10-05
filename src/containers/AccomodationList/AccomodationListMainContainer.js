import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AccomdationListMain from '../../components/AccomodationList/AccomdationListMain';
import { getAccomodationList } from '../../modules/accomodation';

function AccomdationListMainContainer() {
  const dispatch = useDispatch();
  const { accomodationList } = useSelector(state => state.accomodation);
  const { location } = useSelector(state => state.searchForm);

  // Filtered List 관련 state
  const [search, setSearch] = useState('');
  const [filteredAccomodationList, setFilteredAccomodationList] = useState([]);

  // 페이지네이션 관련
  const [currentPage, setCurrentPage] = useState(1);
  const [listPerPage, setPerPage] = useState(5);

  useEffect(() => {
    dispatch(getAccomodationList(location));
  }, []);

  useEffect(() => {
    setFilteredAccomodationList(
      accomodationList.filter(accomodation =>
        accomodation.title.toLowerCase().includes(search.toLowerCase()),
      ),
    );
  }, [search, accomodationList]);

  const idxOfLastList = currentPage * listPerPage;
  const idxOfFirstList = idxOfLastList - listPerPage;
  const currentAccomodationList = filteredAccomodationList.slice(idxOfFirstList, idxOfLastList);

  const changePage = pageNum => {
    setCurrentPage(pageNum);
    window.scrollTo(0, 0);
  };

  return (
    <AccomdationListMain
      accomodationList={currentAccomodationList}
      totalAccomodationList={filteredAccomodationList}
      idxOfFirstList={idxOfFirstList}
      listPerPage={listPerPage}
      changePage={changePage}
      currentPage={currentPage}
    />
  );
}

export default AccomdationListMainContainer;
