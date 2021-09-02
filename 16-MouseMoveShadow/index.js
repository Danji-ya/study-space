(function(){
    const hero = document.querySelector(".hero");
    const text = hero.querySelector("h1");



    hero.addEventListener("mousemove", function(e){
        const {offsetWidth: width, offsetHeight: height} = this;
        let {offsetX: x, offsetY: y} = e;

        const maxValue = 100;
        
        if(this !== e.target){
            x += e.target.offsetLeft;
            y += e.target.offsetTop;
        }

        console.log('x',x,'y',y)

        x = Math.round((x / width) * maxValue - maxValue/2);
        y = Math.round((y / height) * maxValue - maxValue/2);


        text.style.textShadow = `
        ${x}px ${y}px 0 rgba(255,0,255,0.7),
        ${x*-1}px ${y*-1}px 0 rgba(0,255,255,0.7),
        ${x}px ${y * -1}px 0 rgba(122,122,255,0.7),
        ${x * -1}px ${y}px 0 rgba(155,155,155,0.7)
        `;
    });
})();
