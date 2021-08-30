(function(){
    const slides = document.querySelectorAll('.slide-in');

    function debounce(callback, wait = 20){
        let timer;

        return function(){
            if(timer) clearTimeout(timer);
            timer = setTimeout(callback, wait);
        }
    }

    function toggleSlide(){
        [...slides].map(slide => {
            const isStart =  window.scrollY + window.innerHeight >= slide.offsetTop;
            const isPastEnd = window.scrollY  > slide.offsetTop + slide.offsetHeight;

            if(isStart && !isPastEnd){
                slide.classList.add('active');
            }else {
                slide.classList.remove('active');
            }
        });
    }

    window.addEventListener('scroll', debounce(toggleSlide));
})();
