function getEventsNearby(url) {
    return fetch(url)
        .then(resp => { /* await */
            if (!resp.ok) {
                throw new Error(resp.statusText)
            }
            return resp.json()
        })
        .then(json => {
            console.log(json.data)
            console.log(json.data[0])
        }
    /*json.map(h => h.handelse)*/)
}

function getEventsByLocation(url) {
    return fetch(url)
        .then(resp => { 
            if (!resp.ok) {
                throw new Error(resp.statusText)
            }
            return resp.json()
        })
        .then(json => {
            console.log(json.data)
            console.log(json.data[0])
        }
    /*json.map(h => h.handelse)*/)
}

function getEventsByArea(url) {
    return fetch(url)
    .then(resp => { 
        if (!resp.ok) {
            throw new Error(resp.statusText)
        }
        return resp.json()
    })
    .then (json => {
        console.log(json.data)
        console.log(json.data[0])
   }
    /*json.map(h => h.handelse)*/)
}

const BrottsplatsService = {
    eventsNearby: () => getEventsNearby('https://brottsplatskartan.se/api/eventsNearby?lat=57.70&lng=11.96'),
    eventsByLocation: () => getEventsByLocation('https://brottsplatskartan.se/api/events/?location=göteborg'),
    eventsByArea: () => getEventsByArea('https://brottsplatskartan.se/api/events/?area=västra götalands län')
}
Object.freeze(BrottsplatsService)

export default BrottsplatsService