(function(){
    const $displayTimeLeft = document.querySelector(".display__time-left");
    const $displayEndTime = document.querySelector(".display__end-time");
    const $timerControls = document.querySelector(".timer__controls");
    const $sendForm = document.querySelector("#custom");

    let timer;

    function countdown(seconds) {
        if(timer) clearInterval(timer); // for restart

        const startTime = new Date().getTime();
        const endTime = startTime + seconds * 1000; //getTime() = ms

        displayRemainingTime(seconds);
        displayEndTime(endTime);

        timer = setInterval(() => {
            const remainingTime = Math.round((endTime - new Date().getTime()) / 1000);
            if(remainingTime < 0) return clearInterval(timer);

            displayRemainingTime(remainingTime);
        }, 1000);
    }

    function displayRemainingTime(sec) {
        const mins = Math.floor(sec / 60);
        const seconds = sec % 60;

        $displayTimeLeft.textContent = `${('00' + mins).slice(-2)}:${('00' + seconds).slice(-2)}`;
    }

    function displayEndTime(endTime) {
        const time = new Date(endTime);

        $displayEndTime.textContent = `${('00' + time.getHours()).slice(-2)}:${('00' + time.getMinutes()).slice(-2)}`;
    }

    function clickAction(e) {
        if(e.target.classList.contains("timer__button")){
            countdown(e.target.dataset.time);
        }
    }

    function updateTimer(e) {
        e.preventDefault();

        countdown(this.minutes.value * 60);
        this.reset();
    }

    $timerControls.addEventListener("click", clickAction);
    $sendForm.addEventListener("submit", updateTimer);
})();
