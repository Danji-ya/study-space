import { ReactNode } from 'react';
import ReactDOM from 'react-dom';
import { TOAST_CONTAINER } from '../../constants/toast';

interface PortalProps {
  children: ReactNode;
}

function CreateToastPortal({ children }: PortalProps) {
  const container = document.getElementById(TOAST_CONTAINER);
  let newContainer;

  if (!container) {
    const $toast = document.createElement('div');
    $toast.setAttribute('id', TOAST_CONTAINER);

    newContainer = $toast;
    document.body.appendChild(newContainer);
  } else {
    newContainer = container;
  }

  return ReactDOM.createPortal(children, newContainer);
}

export default CreateToastPortal;