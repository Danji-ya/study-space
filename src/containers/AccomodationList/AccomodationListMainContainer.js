import React, { useEffect, useState } from 'react';
import axiosInstance from '../../api-config';
import AccomdationListMain from '../../components/AccomodationList/AccomdationListMain';

function AccomdationListMainContainer() {
  // 페이지네이션, 숙소 리스트 & 지도 관리

  // 필터에 따른 값 변화
  // Filtered List 관련 함수
  const [accomodationList, setAccomodationList] = useState([]);
  const [filteredAccomodationList, setFilteredAccomodationList] = useState(accomodationList);

  // 숙소 리스트 관련은
  //  Main 내에서 전체 데이터 받아서 페이지 네이션과 리스트로 나눈 컴포넌트로 데이터 전달만

  // 리스트 컴포넌트에서 다시 슬라이더 컨테이너 컴포넌트

  useEffect(() => {
    async function getData() {
      try {
        const response = await axiosInstance.get('dummy/data.json');
        setAccomodationList(prev => [...prev, ...response.data.accomodationList]);
        // accomodationList([...response.data.accomodationList]);
      } catch (e) {
        console.log(e);
      }
    }

    getData();
  }, []);

  return <AccomdationListMain accomodationList={accomodationList} />;
}

export default AccomdationListMainContainer;
