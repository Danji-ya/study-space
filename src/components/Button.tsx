import React from 'react';
import { button } from '@/system/recipe/button.css';

const Button = () => {
  return <button className={button({ theme: 'orange' })}>버튼</button>;
};

export default Button;
