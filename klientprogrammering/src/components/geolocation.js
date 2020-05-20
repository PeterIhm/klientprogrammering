function locate(){
    const position = document.querySelector('#position');
    const locInfo = document.querySelector('#locInfo');

    position.innerHTML='Locating...'

    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition((position) =>{
            const latitude=position.coords.latitude;
            const longitude=position.coords.longitude;

            position.innerHTML='Location';
            locInfo.innerHTML= ` Latitude: ${latitude}, Longitude: ${longitude}` ;
            


        })
    }
}