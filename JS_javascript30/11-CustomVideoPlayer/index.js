(function() {
    const player = document.querySelector(".player");
    const video = document.querySelector(".viewer");
    const volumeBtn = document.querySelector(".volume");
    const playBtn = document.querySelector(".player-button");
    const volumeSlider = document.querySelector(".player-slider");
    const fullscreenBtn = document.querySelector(".fullscreen");
    const progress = document.querySelector(".progress");
    const progressBar = document.querySelector('.progress-filled');
    const progressBtn = document.querySelector('.progress-button');



    const togglePlay = (function() {
        let play = true;

        return function() {
            const icon = play ?  '❚ ❚' : '►';
            const method = video.paused ? 'play' : 'pause';
    
            playBtn.textContent = icon;
            video[method]();

            play = !play;
        }
    })();


    function updateVolume() {
        video[this.name] = this.value;
    }

    function toggleFullScreen() {
        if (document.fullscreenElement) {
            document.exitFullscreen();
        } else {
            player.requestFullscreen();
        }
    }

    function visibleVolumeSlider() {
        volumeSlider.style.visibility = "visible";
    }

    function hiddenVolumeSlider() {
        volumeSlider.style.visibility = "hidden";
    }

    function updateProgress(e) {
        const updateTime = (e.offsetX / progress.offsetWidth) * video.duration;

        video.currentTime = updateTime;
    }

    function updateProgressBar() {
        const btnHalfWidth = 7.5;
        //update Bar
        progressBar.style.flexBasis = `${(video.currentTime/video.duration) * 100}%`;
        
        //update Btn
        // progressBtn.style.left = `${(video.currentTime/video.duration) * progress.offsetWidth - btnHalfWidth}px`;
    }


    // function visibleProgressBtn() {
    //     progressBtn.style.visibility = "visible";
    // }

    // function hiddeneProgressBtn() {
    //     progressBtn.style.visibility = "hidden";
    // }

    // progress.addEventListener('mouseover', visibleProgressBtn);
    // progress.addEventListener('mouseout', hiddeneProgressBtn);






    video.addEventListener("click", togglePlay);
    video.addEventListener('timeupdate', updateProgressBar);


    playBtn.addEventListener("click", togglePlay);
    fullscreenBtn.addEventListener("click", toggleFullScreen);

    volumeBtn.addEventListener("mouseover", visibleVolumeSlider);
    volumeBtn.addEventListener("mouseout", hiddenVolumeSlider);
    volumeSlider.addEventListener("change", updateVolume);
    volumeSlider.addEventListener("mousemove", updateVolume);

    progress.addEventListener('click', updateProgress);

    let controllable = false;

    progress.addEventListener('mousemove', (e) => controllable && updateProgress(e));
    progress.addEventListener('mousedown', () => controllable = true);
    // 에러 방지
    document.querySelector('body').addEventListener('mouseup', (e) => {
        console.log('bubbling');
        controllable = false;
    });
})();