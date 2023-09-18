(function(){
    const items = document.querySelector(".items");

    let isDown = false;

    let startX = 0;
    let tempScrollLeft = 0;
    let endX = 0;

    items.addEventListener("mousedown", function(e){

        items.classList.add('active');
        isDown = true;

        startX = e.pageX - items.offsetLeft;
        tempScrollLeft = items.scrollLeft;
    });

    items.addEventListener("mouseleave", function(){
        isDown = false;
        items.classList.remove('active');

    });

    items.addEventListener("mouseup", function(){
        isDown = false;
        items.classList.remove('active');

    });

    items.addEventListener("mousemove", function(e){
        if(!isDown) return;

        endX = e.pageX - items.offsetLeft;

        const walk = endX - startX;
        items.scrollLeft = tempScrollLeft - walk;
    });
})();