function getPosition(options) {
  var atlas = pos.coords()
    return new Promise(function (resolve, reject) {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(resolve, reject, options)
      }
      else {
        reject()
      }
    })
  }
  export function getPosition()
