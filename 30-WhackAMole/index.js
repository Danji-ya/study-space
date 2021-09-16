(function(){
    const holes = document.querySelectorAll('.hole');
    const scoreBoard = document.querySelector('.score');
    const moles = document.querySelectorAll('.mole');
    const startBtn = document.querySelector('button');

    const minTime = 300;
    const maxTime = 800;
    const spendTime = 10000;

    let timer;
    let finishTimer;
    let lastIdx;
    let score = 0;

    function randomHole() {
        const idx = Math.floor(Math.random() * holes.length);

        if(idx === lastIdx) return randomHole();

        lastIdx = idx;
        return idx;
    }

    function randomTimer(min, max) {
        const random = Math.floor(Math.random() * (max - min) + min);
        const idx = randomHole();

        upMole(idx);

        timer = setTimeout(function(){
            downMole(idx);

            return randomTimer(minTime, maxTime);
        }, random);
    }

    function downMole(idx) {
        console.log('down', idx)
        holes[idx].classList.remove('up');
    }

    function upMole(idx) {
        console.log('up', idx)
        holes[idx].classList.add('up');
    }

    function startGame() {
        if(timer) clearGame();
        
        randomTimer(minTime, maxTime);

        finishTimer = setTimeout(function(){
            console.log('시간 끝');
            clearGame();
        }, spendTime);
    }

    function clearGame() {
        downMole(lastIdx);
        clearTimeout(timer);
        clearTimeout(finishTimer);

        scoreBoard.textContent = 0;
        score = 0;
    }

    function getScore(e) {
        if(!e.isTrusted) return;

        this.parentNode.classList.remove('up');
        scoreBoard.textContent = ++score;
    }

    startBtn.addEventListener("click", startGame);
    [...moles].map(mole => mole.addEventListener("click", getScore));
})();

