import React, { createContext, useCallback, useState } from 'react';
import { IToast, IToastState } from '../../types/toast'; 
import { uuidv4 } from '../../utils/common';

import CreateToastPortal from '../CreateToastPortal';
import Toast from '../Toast';

import Styled from './ToastProvider.style';

interface Props {
  children: React.ReactNode;
}

export const toastContext = createContext<((toast: IToast) => void) | null>(
  null,
);

function ToastProvider({ children }: Props) {
  const [toasts, setToasts] = useState<IToastState[]>([]);

  const createToast = useCallback((toast: IToast) => {
    setToasts((prevToasts) => [...prevToasts, { id: uuidv4(), ...toast }]);
  }, []);

  const hideToast = useCallback((toastId: string) => {
    setToasts((prevToasts) => prevToasts.filter(({ id }) => id !== toastId));
  }, []);

  return (
    <toastContext.Provider value={createToast}>
      <CreateToastPortal>
        <Styled.Container>
          {toasts.map((toast: IToastState) => (
            <Toast key={toast.id} hideToast={hideToast} {...toast} />
          ))}
        </Styled.Container>
      </CreateToastPortal>
      {children}
    </toastContext.Provider>
  );
}

export default ToastProvider;