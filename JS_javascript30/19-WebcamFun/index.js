(function(){
    const video = document.querySelector('.player');
    const takePhotoBtn = document.querySelector('.take-photo');
    const videoOffBtn = document.querySelector('.video-off');
    const videoOnBtn = document.querySelector('.video-on');
    const canvas = document.querySelector('.photo');
    const ctx = canvas.getContext('2d');
    const strip = document.querySelector('.strip');
    const snap = document.querySelector('.snap');


    function getVideo() {
        const options = { 
            video:true, 
            audio:false 
        };  

        navigator.mediaDevices.getUserMedia(options)
        .then(localMediaStream => {
            video.srcObject = localMediaStream;
            video.play();
        })
        .catch(err => {
            console.error("error", err);
        });
    }

    function paintToCanvas() {
        const {videoWidth: width, videoHeight: height} = video;
        canvas.width = width;
        canvas.height = height;
    
        return setInterval(() => {
            ctx.drawImage(video, 0, 0, width, height);

            // visible button
            takePhotoBtn.style.visibility = "visible";
            videoOffBtn.style.visibility = "visible";
            videoOnBtn.style.visibility = "visible";
        }, 16);
    }

    function clearVideo() {
        const stream = video.srcObject;
        const tracks = stream.getTracks();
      
        tracks.forEach(track => track.stop());
        video.srcObject = null;

        ctx.clearRect(0, 0, canvas.width, canvas.height);
    }

    function takePhoto() {
        snap.currentTime = 0;
        snap.play();

        const photoURL = canvas.toDataURL('image/jpeg');
        const link = document.createElement('a');
        link.href = photoURL;
        link.setAttribute('download', 'undefined');
        link.innerHTML = `<img src="${photoURL}" />`;
        strip.insertBefore(link, strip.firstChild);
    }

    // load Video
    getVideo();

    video.addEventListener('canplay', paintToCanvas);
    takePhotoBtn.addEventListener('click', takePhoto);
    videoOffBtn.addEventListener('click', clearVideo);
    videoOnBtn.addEventListener('click', getVideo);
})();
