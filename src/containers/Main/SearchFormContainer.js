/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  searchForm,
  searchFormCol,
  searchFormColLast,
  searchFormColLastBtn,
  serachFormDivide,
} from '../../assets/css/common/searchFormStyle';
import SearchIcon from '../../components/common/SearchIcon';
import CalendarPopup from '../../components/Main/CalendarPopup';
import GuestPopup from '../../components/Main/GuestPopup';
import LocationPopup from '../../components/Main/LocationPopup';
import axiosInstance from '../../api-config';

function SearchFormContainer({ isScroll }) {
  // 위치 관련
  const [locationList, setLocationList] = useState([]);
  const [matchLocationList, setMatchLocationList] = useState([]);

  // 팝업 관련
  const [popupType, setPopupType] = useState(undefined);
  // 인원 관련
  const [guestNum, setGuestNum] = useState({ adult: 0, child: 0, infant: 0 });
  const refSearchForm = useRef();

  const handleChange = value => {
    let result = [];
    if (value.length > 0) {
      const regExp = new RegExp(value, 'gi');
      result = locationList.filter(location => location.match(regExp)).slice(0, 5);
    }

    return setMatchLocationList([...result]);
  };

  function changeGuestNum(type, grouptype) {
    if (type === '+') {
      setGuestNum(prevState => ({
        ...prevState,
        [grouptype]: guestNum.grouptype + 1,
      }));

      console.log(guestNum);
    } else {
      setGuestNum(prevState => ({
        ...prevState,
        [grouptype]: guestNum.grouptype - 1,
      }));
    }
  }

  function changePopupType(e) {
    const type = e.currentTarget.getAttribute('name');
    setPopupType(type);
  }

  function resetType(e) {
    if (!refSearchForm.current?.contains(e.target)) setPopupType(undefined);
  }

  useEffect(() => {
    window.addEventListener('click', resetType);

    // temp locationData
    async function getData() {
      try {
        const response = await axiosInstance.get('dummy/data.json');
        setLocationList([...response.data.cities]);
      } catch (error) {
        console.error(error);
      }
    }
    getData();

    return () => {
      window.removeEventListener('click', resetType);
    };
  }, []);

  return (
    <div css={searchForm({ popupType })} ref={refSearchForm}>
      <div name="location" css={searchFormCol} onClick={changePopupType}>
        <h5>위치</h5>
        <input
          onChange={e => handleChange(e.target.value)}
          name="location"
          type="text"
          autoComplete="off"
          placeholder="어디로 여행가세요?"
        />
      </div>
      <LocationPopup matchLocationList={matchLocationList} popupState={popupType === 'location'} />
      <div css={serachFormDivide}></div>
      <div name="checkIn" css={searchFormCol} onClick={changePopupType}>
        <h5>체크인</h5>
        <p>날짜 입력</p>
      </div>
      <div css={serachFormDivide}></div>
      <div name="checkOut" css={searchFormCol} onClick={changePopupType}>
        <h5>체크아웃</h5>
        <p>날짜 입력</p>
      </div>
      <CalendarPopup popupState={popupType === 'checkIn' || popupType === 'checkOut'} />
      <div css={serachFormDivide}></div>
      <div name="guest" css={[searchFormCol, searchFormColLast]} onClick={changePopupType}>
        <div>
          <h5>인원</h5>
          <p>게스트 추가</p>
        </div>
        <Link css={searchFormColLastBtn} to="/accommodationList">
          <SearchIcon />
        </Link>
      </div>
      <GuestPopup popupState={popupType === 'guest'} />
    </div>
  );
}

export default SearchFormContainer;
