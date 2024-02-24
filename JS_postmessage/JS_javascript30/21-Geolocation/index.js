(function(){
    const locationBtn = document.querySelector('.location-btn');
    const text = document.querySelector('.position');

    const getLocation = () => {
        if(navigator.geolocation){
            navigator.geolocation.getCurrentPosition(pos => {
                text.textContent = `Latitude: ${pos.coords.latitude} °, Longitude: ${pos.coords.longitude} °`;
            }, err => {
                text.textContent =`error ❌`;
            });
        } else {
            text.textContent = 'Geolocation is not supported by your browser';
        }
        
    };

    locationBtn.addEventListener('click', getLocation);
})();