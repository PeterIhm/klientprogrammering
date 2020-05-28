export function getPosition(options) {
  return new Promise(function (resolve, reject) {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(resolve, reject, options)
    }
    else {
      reject()
    }
  })
}

//console.log(getPosition)