import {getPosition} from '.src/components/geolocation.js'
function getEvents(url) {
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

function searchEvents(query) {
    let locationQuery = encodeURIComponent(query),
    url = 'https://brottsplatskartan.se/api/events/?location=' + locationQuery
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
const BrottsplatsService = {

    getPosition().then(() => 
    getEvents(`https://brottsplatskartan.se/api/eventsNearby?lat=${position.coords.latitude}&lng=${position.coords.longitude}}`)),
    eventsByLocation: () => searchEvents,
    eventsByArea: () => getEvents('https://brottsplatskartan.se/api/events/?area=västra götalands län')
}
Object.freeze(BrottsplatsService)

export default BrottsplatsService