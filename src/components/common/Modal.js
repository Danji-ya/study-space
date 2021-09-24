/** @jsxImportSource @emotion/react */
import { css, keyframes } from '@emotion/react';
import React, { forwardRef, useEffect, useState } from 'react';
import { closeBtn, modalBackground, modalContainer } from '../../assets/css/common/modalStyle';

const Modal = forwardRef(({ modalState, onClose, children, width, height }, ref) => {
  const [isSlideDown, setIsSlideDown] = useState(false);

  if (!modalState) return null;

  return (
    <div css={modalBackground}>
      <div ref={ref} css={modalContainer({ width, height, isSlideDown })}>
        <a onClick={onClose} css={closeBtn}>
          &#10094;
        </a>
        {children}
      </div>
    </div>
  );
});

export default Modal;
