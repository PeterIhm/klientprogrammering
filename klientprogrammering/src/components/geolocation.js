export function getPosition(options) {
  return new Promise(function (resolve, reject) {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(resolve, reject, options)
    }
    else {
      reject('Vi kan tyvärr inte hitta din plats')
    }
  })
}

console.log(getPosition)