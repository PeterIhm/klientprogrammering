function locate(){
    const position;

    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition((position) =>{
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;

        })
    }
}