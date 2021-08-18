const keys = document.querySelectorAll('.key');

const keyCode = {
    'A': 65,
    'S': 83,
    'D': 68,
    'F': 70,
    'G': 71,
    'H': 72,
    'J': 74,
    'K': 75,
    'L': 76,
};


function playAudio(e) {
    const code = keyCode[e.key.toLocaleUpperCase()];
    const audio = document.querySelector(`audio[data-key="${code}"]`);
    const keyFrame = document.querySelector(`div[data-key="${code}"]`);

    if(!audio) return ;

    audio.pause();
    audio.currentTime = 0;
    audio.play();
    keyFrame.classList.add("playing");
}

function resetKeyFrame(e) {
    e.currentTarget.classList.remove("playing");
}

window.addEventListener("keydown",  playAudio);

[...keys].map(key => {
    key.addEventListener("transitionend", resetKeyFrame);
});