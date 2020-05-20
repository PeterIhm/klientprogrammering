import { getPosition } from '../components/geolocation.js'
function getEvents(url) {
    return fetch(url)
        .then(resp => { /* await */
            if (!resp.ok) {
                throw new Error(resp.statusText)
            }
            return resp.json()
        })
        .then(json => {
            let list = []
            for (let data of json.data) {
                let event = {}
                event.title = data.title_type
                event.location = data.location_string
                event.date = data.date_human
                event.info = data.description
                let contentWOHTML = data.content.replace(/(<([^>]+)>)/ig, "");
                event.content = contentWOHTML
                event.link = data.external_source_link
                list.push(event)
            }
            return list
        }
    /*json.map(h => h.handelse)*/)
}

function searchEvents(query) {
    let locationQuery = encodeURIComponent(query),
        url = 'https://brottsplatskartan.se/api/events/?location=' + locationQuery + '&app=whatsthebuzzsve'
    return fetch(url)
        .then(resp => { /* await */
            if (!resp.ok) {
                throw new Error(resp.statusText)
            }
            return resp.json()
        })
        .then(json => {
            let list = []
            for (let data of json.data) {
                let event = {}
                event.title = data.title_type
                event.location = data.location_string
                event.date = data.date_human
                event.info = data.description
                let contentWOHTML = data.content.replace(/(<([^>]+)>)/ig, "");
                event.content = contentWOHTML
                event.link = data.external_source_link
                list.push(event)
            }
            return list
        }
    /*json.map(h => h.handelse)*/)
}

async function getEventsNearby() {
    //  .then(() getEvents(`{let atlas = pos.coords;}`, )),
    let pos = await getPosition()

    let url = `https://brottsplatskartan.se/api/eventsNearby?lat=${pos.latitude}&lng=${pos.longitude}&app=whatsthebuzzsve`

    console.log(url)
    return getEvents(url)

}

const BrottsplatsService = {

    getEventsNearby,

    eventsByLocation: searchEvents,
    eventsByArea: () => getEvents('https://brottsplatskartan.se/api/events/?area=västra götalands län&app=whatsthebuzzsve')
}
Object.freeze(BrottsplatsService)

export default BrottsplatsService