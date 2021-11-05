import * as math from './math.js';
import './style.css';
import nyancat from './nyancat.jpg';

math.sum(1, 2);


document.addEventListener('DOMContentLoaded', () => {
    document.body.innerHTML = `<img src="${nyancat}" />`;
});


// console.log(TWO);
// console.log(VERSION);
// console.log(api.domain);
console.log(process.env.NODE_ENV);