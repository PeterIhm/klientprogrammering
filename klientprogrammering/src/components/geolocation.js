/* This component is used to fetch the users location and is used in the EventsNearby view */
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
