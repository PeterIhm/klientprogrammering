
function handlePosition(position) {
    const latitude=position.coords.latitude;
    const longitude=position.coords.longitude;

    console.log(` Latitude: ${latitude}, Longitude: ${longitude}`)
    // position.innerHTML='Location';
    // locInfo.innerHTML= ` Latitude: ${latitude}, Longitude: ${longitude}` ;
}

function handleError(){
    console.log("Error")
}


function locate(){
    // const position = document.querySelector('#position');
    // const locInfo = document.querySelector('#locInfo');

    // position.innerHTML='Locating...'

    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(handlePosition, handleError)
    }
}





// function locate(){
//     const position = document.querySelector('#position');
//     const locInfo = document.querySelector('#locInfo');

//     position.innerHTML='Locating...'

//     if(navigator.geolocation){
//         function getPosition(options) {
//             return new Promise(function (resolve, reject) {
//               navigator.geolocation.getCurrentPosition(resolve, reject, options)
//             })
//           }
//         navigator.geolocation.getCurrentPosition((position) =>{
//             const latitude=position.coords.latitude;
//             const longitude=position.coords.longitude;

//             position.innerHTML='Location';
//             locInfo.innerHTML= ` Latitude: ${latitude}, Longitude: ${longitude}` ;
            


//         })
//     }
// }