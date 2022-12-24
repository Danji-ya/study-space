import React from 'react';
import { useRecoilState } from 'recoil';
import { toastState } from '../../store/toastState';
import { IToastState } from '../../types/toast'; 

import CreateToastPortal from '../CreateToastPortal';
import Toast from '../Toast';

import Styled from './ToastContainer.style';

function ToastContainer() {
  const [toasts, setToasts] = useRecoilState<IToastState[]>(toastState);

  const hideToast = (toastId: string) => {
    setToasts((prevToasts: IToastState[]) => prevToasts.filter(({ id }) => id !== toastId));
  };

  return (
    <CreateToastPortal>
      <Styled.Container>
        {toasts.map((toast: IToastState) => (
          <Toast key={toast.id} hideToast={hideToast} {...toast} />
        ))}
      </Styled.Container>
    </CreateToastPortal>
  );
}

export default ToastContainer;