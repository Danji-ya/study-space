const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

const currentSlide = (e) => {
    e.preventDefault();

    const marginLeft = Number(e.target.getAttribute('data-value'));
    sliderController(marginLeft, 'usingDot');
    dotController(marginLeft);
}

const dotController = (function(){
    // default
    const dots = document.querySelectorAll(".dot");
    let dotIdx = 0;
    dots[dotIdx].classList.toggle("active");

    [...dots].map(dot => dot.addEventListener('click', currentSlide));
   
    return function(value) {
        // 100, 200, 300, 400
        dotIdx = (Math.abs(value) % 400 / 100) || 4;

        [...dots].map( (dot, idx) => {
            if(idx === dotIdx-1) return dot.classList.add("active");

            dot.classList.remove("active");
        });
    }
})();


const sliderController = (function() {
    //default
    const sliderRow = document.querySelector(".slider-row");
    const sliderCols = document.querySelectorAll(".slider-col");

    const DEFAULT_WIDTH = -100;
    let sliderMarginLeft = DEFAULT_WIDTH;
    let isDisabled = false;


    // copy & paste
    const clonedFirst = sliderCols[0].cloneNode(true);
    const clonedLast = sliderCols[sliderCols.length-1].cloneNode(true);
    sliderRow.insertAdjacentElement("afterbegin", clonedLast);
    sliderRow.insertAdjacentElement("beforeend", clonedFirst);



    return function(value, type = '') {
        if (isDisabled) {

            console.log('아직 클릭 불가능');
            return;
        } else {

            if(type) sliderMarginLeft = value;
            else sliderMarginLeft += value;
    
            sliderRow.style.transition = `all 0.5s`;
            sliderRow.style.marginLeft= `${sliderMarginLeft}%`;
    
            if (sliderMarginLeft === 0) {
                // go to LastChild
                sliderMarginLeft = -400;
                isDisabled = !isDisabled;

                setTimeout(function() {
                    isDisabled = !isDisabled;
                    sliderRow.style.transition = 'none';
                    sliderRow.style.marginLeft= `${sliderMarginLeft}%`;
                }, 500);
            }
    
            if (sliderMarginLeft < -400) {
                // go to firstChild
                sliderMarginLeft = DEFAULT_WIDTH;
                isDisabled = !isDisabled;
    
                setTimeout(function() {
                    isDisabled = !isDisabled;
                    sliderRow.style.transition = 'none';
                    sliderRow.style.marginLeft= `${sliderMarginLeft}%`;
                }, 500);
            }

            dotController(sliderMarginLeft);
        }
    }
})();

prevBtn.addEventListener("click", () => sliderController(100));
nextBtn.addEventListener("click", () => sliderController(-100));

// setInterval(() => sliderController(-100), 5000);
