// default
const header = document.querySelector('header');
// const descriptionWrap = document.querySelector('.description-wrap');
// const feeWrap = document.querySelector('.fee-desc-wrap');

// const feeWrapWidth = feeWrap.offsetWidth;
// const feeWrapHeight = feeWrap.offsetHeight;
header.classList.add('sticky');


// function checkMaxScroll() {

//     const offsetBottom = descriptionWrap.offsetTop + descriptionWrap.offsetHeight;

//     const isMax = () => offsetBottom < window.scrollY + feeWrap.offsetHeight + feeWrap.offsetTop;

//     if(isMax()) {
//         descriptionWrap.classList.remove('fixed');
//         descriptionWrap.classList.add('end');
//     } else {
//         descriptionWrap.classList.remove('end');
//     }
// }


// function fixedFeeWrap() {


//     if(window.scrollY > descriptionWrap.offsetTop){

//         checkMaxScroll();

//         descriptionWrap.classList.add('fixed');
//         feeWrap.style.width = `${feeWrapWidth}px`;
//         // feeWrap.style.height = `${feeWrapHeight}px`;
//     } else {
//         descriptionWrap.classList.remove('fixed');
//     }
// }

// window.addEventListener('scroll', fixedFeeWrap);