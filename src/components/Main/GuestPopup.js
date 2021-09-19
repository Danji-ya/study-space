/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React from 'react';
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from 'react-icons/ai';
import { BiPlus, BiMinus } from 'react-icons/bi';
import { guestPopupContainer } from '../../assets/css/main/popupStyle';

const guestWrap = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: black;
  width: 100%;

  h3 {
    font-size: 16px;
    font-weight: 700;
    line-height: 24px;
  }

  p {
    font-size: 14px;
    font-weight: 400;
    line-height: 18px;
  }
`;

const guestTypeWrap = props => css`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;

  padding: 15px 3px;

  :not(:last-child) {
    border-bottom: 1px solid rgb(235, 235, 235);
  }

  > div:nth-of-type(2) {
    display: flex;
    align-items: center;

    button {
      outline: none;
      border-radius: 50%;
      border: 1px solid rgb(235, 235, 235);
      background: transparent;
      width: 32px;
      height: 32px;
      display: flex;
      align-items: center;
      justify-content: center;

      :hover {
        border: 1px solid rgb(176, 176, 176);
        cursor: pointer;
      }
    }
    > div {
      padding: 0 10px;
    }
  }
`;

function GuestPopup({ popupState }) {
  return (
    <div css={guestPopupContainer({ popupState })}>
      <div css={guestWrap}>
        <div css={guestTypeWrap}>
          <div>
            <h3>성인</h3>
            <p>만 13세 이상</p>
          </div>
          <div>
            <button>
              <BiMinus size={20} />
            </button>

            <div>0</div>
            <button>
              <BiPlus size={20} />
            </button>
          </div>
        </div>
        <div css={guestTypeWrap}>
          <div>
            <h3>어린이</h3>
            <p>만 2~12세</p>
          </div>
          <div>
            <button>
              <BiMinus size={20} onClick={() => console.log('hi')} />
            </button>

            <div>0</div>
            <button>
              <BiPlus size={20} />
            </button>
          </div>
        </div>
        <div css={guestTypeWrap}>
          <div>
            <h3>유아</h3>
            <p>만 2세 미만</p>
          </div>
          <div>
            <button>
              <BiMinus size={20} onClick={() => console.log('hi')} />
            </button>
            <div>0</div>
            <button>
              <BiPlus size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GuestPopup;
