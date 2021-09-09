(function(){

    // default
    const header = document.querySelector('header');
    const headerForm = document.querySelector('.header-form');
    const simpleForm = document.querySelector('.simple-query-form');
    header.classList.add('sticky');
    headerForm.classList.add('sticky');
    simpleForm.classList.add('sticky');

    // for img slider
    const sliderContainers = document.querySelectorAll('.img-slider-container');

    class Slider {
        constructor(target){
            this.sliderContainer = target;
            this.dots = [...this.sliderContainer.querySelectorAll(".dot")];
            this.sliderRow = target.querySelector('.img-slider-row');
            this.imgLength = target.querySelectorAll('.img-slider-col').length * 100 - 100;
            this.sliderRow.style.width = `${this.imgLength + 100}%`;
            this.curPosition = 0;

            this.onEvent();
        }

        moveSlider(e) {
            const isMinMaxSlider = () => this.curPosition > this.imgLength || this.curPosition < 0;

            if(e.target.className.includes('prev')){
                this.curPosition-= 100;

                this.toggleBtn();
    
                if(isMinMaxSlider()) this.curPosition = 0;
    
                this.toggleDot(this.curPosition);
                this.sliderRow.style.marginLeft = `-${this.curPosition}%`;
    
            } else if(e.target.className.includes('next')){
                this.curPosition+= 100;

                this.toggleBtn();
    
                if(isMinMaxSlider()) this.curPosition = this.imgLength;
    
                this.toggleDot(this.curPosition);
                this.sliderRow.style.marginLeft = `-${this.curPosition}%`;
            }
        }

        onEvent(){
            // 요소가 아닌 해당 class 인스턴스 바인딩
            this.sliderContainer.addEventListener('click', this.moveSlider.bind(this));
        }

        toggleBtn() {
            const prev = this.sliderContainer.querySelector('.prev');
            const next = this.sliderContainer.querySelector('.next');
    
            const isMax = () => this.curPosition === this.imgLength;
    
            if(this.curPosition === 0){
                prev.style.visibility = 'hidden';
                next.style.visibility = 'visible';
            } else if (isMax()){
                prev.style.visibility = 'visible';
                next.style.visibility = 'hidden';
            } else {
                prev.style.visibility = 'visible';
                next.style.visibility = 'visible';
            }
        }

        toggleDot(value) {
            this.dots.map( (dot, idx) => {
                if(idx === (value / 100)) return dot.classList.add("active");
    
                dot.classList.remove("active");
            });
        };
    }


    function initMap() {

        var seoul = { lat: 37.5952092 ,lng: 126.9703659 };
        var map = new google.maps.Map(
        document.querySelector(".map"), {
            zoom: 14,
            center: seoul
        });
        
    }

    initMap();

    [...sliderContainers].map(sliderContainer => new Slider(sliderContainer));
})();