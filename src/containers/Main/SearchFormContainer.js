/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React, { useEffect, useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import axiosInstance from '../../api-config';
import SearchForm from '../../components/Main/SearchForm';
import { setCheckin, setCheckout, setGuestNum, setLocation } from '../../modules/searchForm';
import { padding } from '../../utils/utils';

function SearchFormContainer({ isScroll }) {
  const history = useHistory();
  const dispatch = useDispatch();
  const { location, checkin, checkout, guestNum } = useSelector(state => state.searchForm);

  // 위치 검색 데이터 관련 나중에는 api로 대체
  const [locationList, setLocationList] = useState([]);
  const [matchLocationList, setMatchLocationList] = useState([]);

  // 팝업 관련
  const [popupType, setPopupType] = useState(undefined);
  const refSearchForm = useRef();

  const handleSubmit = () => {
    if (!location) return setPopupType('location');

    const { adult, child, infant } = guestNum;
    const checkinFormat =
      checkin &&
      `${checkin.getFullYear()}-${padding(checkin.getMonth() + 1)}-${padding(checkin.getDate())}`;
    const checkoutFormat =
      checkout &&
      `${checkout.getFullYear()}-${padding(checkout.getMonth() + 1)}-${padding(
        checkout.getDate(),
      )}`;

    const url = `/accommodationList?&date_picker_type=calendar&checkin=${checkinFormat}&checkout=${checkoutFormat}&adults=${adult}&children=${child}&infants=${infant}&query=${location}&source=structured_search_input_header&search_type`;

    return history.push(url);
  };

  const handleInputChange = value => {
    let result = [];
    if (value.length > 0) {
      const regExp = new RegExp(value, 'gi');
      result = locationList.filter(loc => loc.match(regExp)).slice(0, 5);
    }
    dispatch(setLocation(value));

    return setMatchLocationList([...result]);
  };

  function changeLocation(region) {
    dispatch(setLocation(region));
    // next to popup
    setPopupType('checkin');
  }

  const hasCompanion = () => guestNum.adult > 0;

  const hasChildren = () => guestNum.child > 0 || guestNum.infant > 0;

  const isZero = grouptype => guestNum[grouptype] === 0;

  const checkCompanion = grouptype => {
    if (hasCompanion()) {
      const value = { ...guestNum, [grouptype]: guestNum[grouptype] + 1 };
      dispatch(setGuestNum(value));
    } else {
      const value = { ...guestNum, [grouptype]: guestNum[grouptype] + 1, adult: 1 };
      dispatch(setGuestNum(value));
    }
  };

  function changeGuestNum(type, grouptype) {
    if (type === '+') {
      if (grouptype === 'child' || grouptype === 'infant') {
        checkCompanion(grouptype);
        return;
      }

      const value = { ...guestNum, [grouptype]: guestNum[grouptype] + 1 };
      dispatch(setGuestNum(value));
    } else if (type === '-') {
      if (isZero(grouptype)) return;
      if (grouptype === 'adult' && guestNum.adult === 1 && hasChildren()) return;

      const value = { ...guestNum, [grouptype]: guestNum[grouptype] - 1 };
      dispatch(setGuestNum(value));
    }
  }

  function changeCheckInOutDay(type, timeStamp) {
    if (type === 'checkin') {
      dispatch(setCheckin(timeStamp));
      // next to popup
      setPopupType('checkout');
    } else {
      dispatch(setCheckout(timeStamp));
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
      searchFormData={{ location, checkin, checkout, guestNum }}
      handleSubmit={handleSubmit}
      popupType={popupType}
      changePopupType={changePopupType}
      changeLocation={changeLocation}
      changeCheckInOutDay={changeCheckInOutDay}
      changeGuestNum={changeGuestNum}
      handleInputChange={handleInputChange}
      matchLocationList={matchLocationList}
      ref={refSearchForm}
    />
  );
}

export default SearchFormContainer;
