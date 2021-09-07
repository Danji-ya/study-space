(function(){

    window.addEventListener('scroll', function(){
        const header = document.querySelector('header');
        const headerForm = document.querySelector('.header-form');
        const simpleForm = document.querySelector('.simple-query-form');

        if(window.scrollY > 0){
            header.classList.add('sticky');
            headerForm.classList.add('sticky');
            simpleForm.classList.add('sticky');

        } else {
            header.classList.remove('sticky');
            headerForm.classList.remove('sticky');
            simpleForm.classList.remove('sticky');
        }
    });

})();