import {getPosition} from '../components/geolocation.js'
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

async function getEventsNearby(){
  //  .then(() getEvents(`{let atlas = pos.coords;}`, )),
let pos = await getPosition()

let url = `https://brottsplatskartan.se/api/eventsNearby?lat=${pos.latitude}&lng=${pos.longitude}&app=whatsthebuzzswe}`

console.log(url)
return getEvents(url)

}

const BrottsplatsService = {

    getEventsNearby,
        
    eventsByLocation: () => searchEvents,
    eventsByArea: () => getEvents('https://brottsplatskartan.se/api/events/?area=västra götalands län')
}
Object.freeze(BrottsplatsService)

export default BrottsplatsService