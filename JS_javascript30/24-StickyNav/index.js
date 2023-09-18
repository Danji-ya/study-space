(function(){
    const logo = document.querySelector('.logo');
    const nav = document.querySelector('#main');
    const siteWrap = document.querySelector('.site-wrap');
    const navOffsetTop = nav.offsetTop;

    function stickyNav(){
        if(window.scrollY >= navOffsetTop){
            document.body.classList.add('sticky');

            document.body.style.paddingTop = `${nav.offsetHeight}px`;
            siteWrap.style.transform = 'scale(1)';
        } else {
            document.body.classList.remove('sticky');

            document.body.style.paddingTop = 0;
            siteWrap.style.transform = 'scale(0.98)';
        }
    }

    window.addEventListener('scroll', stickyNav);
})();
