import React, { useEffect, useState } from 'react';
import axiosInstance from '../../api-config';
import AccomdationListMain from '../../components/AccomodationList/AccomdationListMain';

function AccomdationListMainContainer() {
  // 페이지네이션, 숙소 리스트 & 지도 관리

  // 필터에 따른 값 변화
  // Filtered List 관련 함수
  const [accomodationList, setAccomodationList] = useState([]);
  const [search, setSearch] = useState('');
  const [filteredAccomodationList, setFilteredAccomodationList] = useState([]);

  // 페이지네이션 관련
  const [currentPage, setCurrentPage] = useState(1);
  const [listPerPage, setPerPage] = useState(5);

  useEffect(() => {
    async function getData() {
      try {
        const response = await axiosInstance.get('dummy/data.json');
        setAccomodationList(prev => [...prev, ...response.data.accomodationList]);
      } catch (e) {
        console.log(e);
      }
    }

    getData();
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

  return (
    <AccomdationListMain
      accomodationList={currentAccomodationList}
      totalAccomodationList={filteredAccomodationList}
      listPerPage={listPerPage}
    />
  );
}

export default AccomdationListMainContainer;
