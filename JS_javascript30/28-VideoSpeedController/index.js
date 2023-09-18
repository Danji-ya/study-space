(function(){
    const video = document.querySelector('video');
    const speed = document.querySelector('.speed');
    const speedBar = document.querySelector('.speed-bar'); 

    const percentToMinMax = (percent) => {
        const min = 0.4;
        const max = 4;

        return (percent * (max - min) + min).toFixed(2);
    }

    const changeVideoSpeed = (percent) => {
        const videoSpeed = percentToMinMax(percent);

        speedBar.style.height = `${Math.round(percent * 100)}%`;
        speedBar.textContent = `${videoSpeed}x`;
        video.playbackRate = `${videoSpeed}`;
    }

    speed.addEventListener('mousemove', function(e){
        const posY = e.pageY - this.offsetTop;
        const percent = posY / this.offsetHeight;

        changeVideoSpeed(percent);
    });
})();
