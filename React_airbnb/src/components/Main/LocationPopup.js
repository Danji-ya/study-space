/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React from 'react';
import { locationPopupContainer } from '../../assets/css/main/popupStyle';

const locationRow = props => css`
  display: flex;
  width: 400px;
  flex-direction: column;
  padding: 15px 0px;
`;

const locationCol = props => css`
  display: flex;
  padding: 8px 32px 8px 16px;

  svg {
    height: 22px;
    width: 22px;
    display: block;
    fill: currentcolor;
  }
  &:hover {
    background: rgba(165, 165, 165, 0.3);
    cursor: pointer;
  }
`;

const locationIconWrap = props => css`
  width: 46px;
  height: 46px;
  background: rgb(241, 241, 241);
  border-radius: 8px;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const locationText = props => css`
  flex: 1;
  display: flex;
  align-items: center;
  padding-left: 15px;
  font-size: 14px;
`;

const LocationItem = ({ item, changeLocation }) => {
  return (
    <li css={locationCol} onClick={() => changeLocation(item)}>
      <div css={locationIconWrap}>
        <svg viewBox="0 0 24 24">
          <path d="m12 13c-1.6562848 0-3-1.3434662-3-2.9994439 0-1.65708993 1.3437152-3.0005561 3-3.0005561 1.6573971 0 3 1.34346617 3 3.0005561 0 1.6559777-1.3426029 2.9994439-3 2.9994439m-.0010745-10c-3.86277368 0-6.99503645 3.09628261-6.99503645 6.91572385-.15345985 4.02308935 4.59013139 9.08416075 6.35071535 10.81932575.3584233.3532672.9312701.3532672 1.2896934 0 1.7595329-1.735165 6.5031241-6.7962364 6.3507153-10.81932575 0-3.81944124-3.1322627-6.91572385-6.9960876-6.91572385"></path>
        </svg>
      </div>
      <div css={locationText}>{item}</div>
    </li>
  );
};

function LocationPopup({ matchLocationList, popupState, changeLocation }) {
  return (
    <div css={locationPopupContainer({ popupState })}>
      {matchLocationList.length > 0 && (
        <ul css={locationRow}>
          {matchLocationList.map((location, idx) => (
            <LocationItem key={idx} item={location} changeLocation={changeLocation} />
          ))}
        </ul>
      )}
    </div>
  );
}

export default LocationPopup;
