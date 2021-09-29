/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React from 'react';
import { BiPlus, BiMinus } from 'react-icons/bi';
import {
  guestBtnWrap,
  guestContainer,
  guestItemContainer,
  guestTextWrap,
} from '../../assets/css/main/guestPopupStyle';
import { guestPopupContainer } from '../../assets/css/main/popupStyle';

function GuestPopup({ popupState, guestNum, changeGuestNum }) {
  return (
    <div css={guestPopupContainer({ popupState })}>
      <div css={guestContainer}>
        <div css={guestItemContainer}>
          <div>
            <h3>성인</h3>
            <p>만 13세 이상</p>
          </div>
          <div>
            <button
              css={guestBtnWrap({ minus: true, guestNumber: guestNum.adult })}
              onClick={() => changeGuestNum('-', 'adult')}
            >
              <BiMinus size={20} />
            </button>

            <div css={guestTextWrap}>{guestNum.adult}</div>
            <button css={guestBtnWrap} onClick={() => changeGuestNum('+', 'adult')}>
              <BiPlus size={20} />
            </button>
          </div>
        </div>
        <div css={guestItemContainer}>
          <div>
            <h3>어린이</h3>
            <p>만 2~12세</p>
          </div>
          <div>
            <button
              css={guestBtnWrap({ minus: true, guestNumber: guestNum.child })}
              onClick={() => changeGuestNum('-', 'child')}
            >
              <BiMinus size={20} />
            </button>

            <div css={guestTextWrap}>{guestNum.child}</div>
            <button css={guestBtnWrap} onClick={() => changeGuestNum('+', 'child')}>
              <BiPlus size={20} />
            </button>
          </div>
        </div>
        <div css={guestItemContainer}>
          <div>
            <h3>유아</h3>
            <p>만 2세 미만</p>
          </div>
          <div>
            <button
              css={guestBtnWrap({ minus: true, guestNumber: guestNum.infant })}
              onClick={() => changeGuestNum('-', 'infant')}
            >
              <BiMinus size={20} />
            </button>
            <div css={guestTextWrap}>{guestNum.infant}</div>
            <button css={guestBtnWrap} onClick={() => changeGuestNum('+', 'infant')}>
              <BiPlus size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GuestPopup;
