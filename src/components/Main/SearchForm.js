/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React, { forwardRef } from 'react';
import {
  guestInputWrap,
  searchForm,
  searchFormCol,
  searchFormSumbitBtn,
  serachFormDivide,
} from '../../assets/css/common/searchFormStyle';
import SearchIcon from '../common/SearchIcon';
import CalendarPopup from './CalendarPopup';
import GuestPopup from './GuestPopup';
import LocationPopup from './LocationPopup';

const SearchForm = forwardRef(
  (
    {
      handleSubmit,
      location,
      guestNum,
      checkInDay,
      checkOutDay,
      changeCheckInOutDay,
      popupType,
      changePopupType,
      changeLocation,
      changeGuestNum,
      handleChange,
      matchLocationList,
    },
    ref,
  ) => {
    const headCount = guestNum.adult + guestNum.child;
    const checkInFormat = checkInDay && `${checkInDay.getMonth() + 1}월 ${checkInDay.getDate()}일`;
    const checkOutFormat =
      checkOutDay && `${checkOutDay.getMonth() + 1}월 ${checkOutDay.getDate()}일`;

    return (
      <div css={searchForm({ popupType })} ref={ref}>
        <div name="location" css={searchFormCol} onClick={changePopupType}>
          <h5>위치</h5>
          <input
            onChange={e => handleChange(e.target.value)}
            name="location"
            type="text"
            autoComplete="off"
            placeholder="어디로 여행가세요?"
            value={location || ''}
          />
        </div>
        <LocationPopup
          matchLocationList={matchLocationList}
          popupState={popupType === 'location'}
          changeLocation={changeLocation}
        />
        <div css={serachFormDivide}></div>
        <div name="checkIn" css={searchFormCol} onClick={changePopupType}>
          <h5>체크인</h5>
          <p>{checkInFormat ? `${checkInFormat}` : `날짜 입력`}</p>
        </div>
        <div css={serachFormDivide}></div>
        <div name="checkOut" css={searchFormCol} onClick={changePopupType}>
          <h5>체크아웃</h5>
          <p>{checkOutFormat ? `${checkOutFormat}` : `날짜 입력`}</p>
        </div>
        <CalendarPopup
          popupState={popupType === 'checkIn' || popupType === 'checkOut'}
          checkInDay={checkInDay}
          checkOutDay={checkOutDay}
          changeCheckInOutDay={changeCheckInOutDay}
        />
        <div css={serachFormDivide}></div>
        <div name="guest" css={searchFormCol} onClick={changePopupType}>
          <div css={guestInputWrap}>
            <h5>인원</h5>
            <p>
              {headCount
                ? `게스트 ${headCount}명${guestNum.infant > 0 ? `, 유아 ${guestNum.infant}명` : ''}`
                : '게스트 추가'}
            </p>
          </div>
        </div>
        <div css={searchFormSumbitBtn} onClick={handleSubmit}>
          <SearchIcon />
        </div>
        <GuestPopup
          popupState={popupType === 'guest'}
          guestNum={guestNum}
          changeGuestNum={changeGuestNum}
        />
      </div>
    );
  },
);

export default SearchForm;
