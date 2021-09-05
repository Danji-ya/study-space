(function(){
    const videoList = document.querySelectorAll(".videos li");
    const time = document.querySelector('.time');
    const totalSecond = [...videoList]
                            .map(video => video.dataset.time.split(":").map(parseFloat))
                            .reduce((acc, cur) => acc += cur[0] * 60 + cur[1], 0);
    
    const hours = Math.floor(totalSecond / 3600);
    const mins = Math.floor(totalSecond % 3600 / 60);
    const seconds = Math.floor(totalSecond % 3600 % 60);
    
    time.innerText = `${("0"+hours).slice(-2)} : ${("0"+mins).slice(-2)} : ${("0"+seconds).slice(-2)}`;
})();