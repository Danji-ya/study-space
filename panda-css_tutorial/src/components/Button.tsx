import { button } from '@styled-system/recipes';
import { css, cx } from '@styled-system/css';
import React from 'react';
import { background } from '@/theme/utils/background';

const Button = () => {
  return (
    <button
      className={cx(
        css({
          display: 'inline-flex',
          xl: {
            background: 'orange.100',
          },
        }),
        button({ visual: 'solid' })
      )}
    >
      버튼
    </button>
  );
};

export default Button;
