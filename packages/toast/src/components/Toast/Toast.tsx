import React, {useState} from 'react';
import cn from 'classnames';

import styles from './Toast.module.scss';
import { IToastState } from '../../types/toast';

interface Props extends IToastState {
  hideToast: (id: string) => void;
}

function Toast({
  id,
  title = '',
  message,
  duration = 1000000,
  type = 'success',
  hideToast,
}: Props) {
  const [isFadingOut, setIsFadingOut] = useState(false);
  const customDuration = {'animationDuration': `${duration/1000}s`};

  const defaultClassName = cn(
    styles.toast,
    styles[`toast--${type}`],
    {[styles['toast--inactive']]: isFadingOut}
  );

  const fadeOut = () => {
    setIsFadingOut(true);
    setTimeout(() => hideToast(id), 300);
  };

  const handleAnimationEnd = () => fadeOut();
  
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    fadeOut();
  };

  return (
    <div className={defaultClassName} role="alert">
      <div className={styles.body}>
        <div className={styles.contents}>
          <h6 className={styles.title}>{title}</h6>
          <p className={styles.message}>{message}</p>
        </div>
        <button type='button' onClick={handleClick} className={styles.button} aria-label="close" />
      </div>
      <div style={customDuration} className={styles.progressbar} onAnimationEnd={handleAnimationEnd} />
    </div>
  );
}

export default Toast;