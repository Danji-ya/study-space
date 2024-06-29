import { button } from '@styled-system/recipes';
import React from 'react';

const Button = () => {
  return <button className={button({ visual: 'solid' })}>버튼</button>;
};

export default Button;
