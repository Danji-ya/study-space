(function(){
    window.addEventListener('scroll', function(){
        const header = document.querySelector('header');

        if(window.scrollY > 0){
            header.classList.add('sticky');
        } else {
            header.classList.remove('sticky');
        }
    });

})();