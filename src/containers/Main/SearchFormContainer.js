/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React, { useEffect, useState, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import axiosInstance from '../../api-config';
import SearchForm from '../../components/Main/SearchForm';
import { padding } from '../../utils/utils';

function SearchFormContainer({ isScroll }) {
  const history = useHistory();
  // 위치 관련
  const [location, setLocation] = useState();
  const [locationList, setLocationList] = useState([]);
  const [matchLocationList, setMatchLocationList] = useState([]);

  // 인원 관련
  const [guestNum, setGuestNum] = useState({ adult: 0, child: 0, infant: 0 });

  // 체크인, 체크아웃 관련
  const [checkInDay, setCheckInDay] = useState();
  const [checkOutDay, setCheckOutDay] = useState();

  // 팝업 관련
  const [popupType, setPopupType] = useState(undefined);
  const refSearchForm = useRef();

  const handleSubmit = () => {
    if (!location) return setPopupType('location');

    const { adult, child, infant } = guestNum;
    const checkInFormat = `${checkInDay.getFullYear()}-${padding(
      checkInDay.getMonth() + 1,
    )}-${padding(checkInDay.getDate())}`;
    const checkOutFormat = `${checkOutDay.getFullYear()}-${padding(
      checkOutDay.getMonth() + 1,
    )}-${padding(checkOutDay.getDate())}`;

    const url = `/accommodationList?&date_picker_type=calendar&checkin=${checkInFormat}&checkout=${checkOutFormat}&adults=${adult}&children=${child}&infants=${infant}&query=${location}&source=structured_search_input_header&search_type`;

    return history.push(url);
  };

  const handleChange = value => {
    let result = [];
    if (value.length > 0) {
      const regExp = new RegExp(value, 'gi');
      result = locationList.filter(loc => loc.match(regExp)).slice(0, 5);
    }
    setLocation(value);
    return setMatchLocationList([...result]);
  };

  function changeLocation(area) {
    setLocation(area);
    // next to popup
    setPopupType('checkIn');
  }

  const hasCompanion = () => guestNum.adult > 0;

  const hasChildren = () => guestNum.child > 0 || guestNum.infant > 0;

  const isZero = grouptype => guestNum[grouptype] === 0;

  const checkCompanion = grouptype => {
    if (hasCompanion()) {
      setGuestNum(prevState => ({
        ...prevState,
        [grouptype]: guestNum[grouptype] + 1,
      }));
    } else {
      setGuestNum(prevState => ({
        ...prevState,
        [grouptype]: guestNum[grouptype] + 1,
        adult: 1,
      }));
    }
  };

  function changeGuestNum(type, grouptype) {
    if (type === '+') {
      if (grouptype === 'child' || grouptype === 'infant') {
        checkCompanion(grouptype);
      } else {
        setGuestNum(prevState => ({
          ...prevState,
          [grouptype]: guestNum[grouptype] + 1,
        }));
      }
    } else {
      if (isZero(grouptype)) return;
      if (grouptype === 'adult' && guestNum.adult === 1 && hasChildren()) return;

      setGuestNum(prevState => ({
        ...prevState,
        [grouptype]: guestNum[grouptype] - 1,
      }));
    }
  }

  function changeCheckInOutDay(type, timeStamp) {
    if (type === 'checkIn') {
      setCheckInDay(timeStamp);
      // next to popup
      setPopupType('checkOut');
    } else {
      setCheckOutDay(timeStamp);
      // next to popup
      setPopupType('guest');
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
    <SearchForm
      handleSubmit={handleSubmit}
      location={location}
      guestNum={guestNum}
      checkInDay={checkInDay}
      checkOutDay={checkOutDay}
      popupType={popupType}
      changePopupType={changePopupType}
      changeLocation={changeLocation}
      changeCheckInOutDay={changeCheckInOutDay}
      changeGuestNum={changeGuestNum}
      handleChange={handleChange}
      matchLocationList={matchLocationList}
      ref={refSearchForm}
    />
  );
}

export default SearchFormContainer;
