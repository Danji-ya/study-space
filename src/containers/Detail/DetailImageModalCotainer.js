/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React, { useEffect, useRef, useState } from 'react';
import { imgBtnWrap } from '../../assets/css/detail/mainTitleStyle';
import Modal from '../../components/common/Modal';

const AllImgBtn = ({ onOpen }) => {
  return (
    <>
      <div css={imgBtnWrap} onClick={onOpen}>
        <svg>
          <circle cx="1.5" cy="1.5" r="1.5"></circle>
          <circle cx="1.5" cy="8.5" r="1.5"></circle>
          <circle cx="8.5" cy="1.5" r="1.5"></circle>
          <circle cx="8.5" cy="8.5" r="1.5"></circle>
          <circle cx="15.5" cy="1.5" r="1.5"></circle>
          <circle cx="15.5" cy="8.5" r="1.5"></circle>
          <circle cx="1.5" cy="15.5" r="1.5"></circle>
          <circle cx="8.5" cy="15.5" r="1.5"></circle>
          <circle cx="15.5" cy="15.5" r="1.5"></circle>
        </svg>
        <div>
          <span>사진 모두 보기</span>
        </div>
      </div>
    </>
  );
};

function DetailImageModalCotainer() {
  const [modalState, setModalState] = useState(false);

  const refModalPopup = useRef();

  function onClose() {
    setModalState(false);
  }

  function onOpen() {
    setModalState(true);
  }

  function handleClick(e) {
    if (!refModalPopup.current?.contains(e.target)) {
      if (modalState) onClose();
    }
  }

  useEffect(() => {
    window.addEventListener('click', handleClick);
    return () => {
      console.log('modalState 업데이트시에도 호출됨');
      window.removeEventListener('click', handleClick);
    };
  }, [modalState]);

  return (
    <>
      <AllImgBtn onOpen={onOpen} />
      <Modal
        ref={refModalPopup}
        modalState={modalState}
        onClose={onClose}
        width={'70vw'}
        height={'80vh'}
      >
        <div
          css={css`
            margin: 5% 10%;
            height: 90%;

            display: grid;
            gap: 5px;
            grid-template-columns: repeat(2, 1fr);
            grid-template-rows: repeat(3, 1fr);

            overflow: scroll;

            > div {
              height: 500px;
            }

            img {
              width: 100%;
              height: 100%;
              object-fit: cover;
            }

            div:first-of-type {
              grid-row: 1 / 2;
              grid-column: 1 / 3;
            }
          `}
        >
          <div>
            <img src="https://a0.muscache.com/im/pictures/208fe150-4a9a-4351-9c39-ba0a62b28504.jpg?im_w=960" />
          </div>
          <div>
            <img src="https://a0.muscache.com/im/pictures/c8a69aec-5bf2-45dd-a574-26f46611457b.jpg?im_w=480" />
          </div>
          <div>
            <img src="https://a0.muscache.com/im/pictures/dc54e563-bd9a-4375-a7b2-e300d1ba8ba5.jpg?im_w=480" />
          </div>
        </div>
      </Modal>
    </>
  );
}

export default DetailImageModalCotainer;
