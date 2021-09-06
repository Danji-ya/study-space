(function(){

    window.addEventListener('scroll', function(){
        const header = document.querySelector('header');
        const headerForm = document.querySelector('.header-form');
        console.log(header)
        if(window.scrollY > 0){
            header.classList.add('sticky');
            headerForm.style.visibility = 'hidden';
        } else {
            header.classList.remove('sticky');
            headerForm.style.visibility = 'visible';
        }
    });

})();