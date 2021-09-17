/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React from 'react';
import { guestPopupContainer } from '../../assets/css/main/popupStyle';

function GuestPopup({ popupState }) {
  return (
    <div css={guestPopupContainer({ popupState })}>
      <h5>guestPopup</h5>
    </div>
  );
}

export default GuestPopup;
