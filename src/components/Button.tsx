import { button } from '@styled-system/recipes';
import { css, cx } from '@styled-system/css';
import React from 'react';

const Button = () => {
  return (
    <button
      className={cx(
        css({
          display: 'inline-flex',
        }),
        button({ visual: 'solid' })
      )}
    >
      버튼
    </button>
  );
};

export default Button;
