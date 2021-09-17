/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React from 'react';
import { locationPopupContainer } from '../../assets/css/main/popupStyle';

function LocationPopup({ popupState }) {
  return (
    <div css={locationPopupContainer({ popupState })}>
      <h5>locationPopup</h5>
    </div>
  );
}

export default LocationPopup;
