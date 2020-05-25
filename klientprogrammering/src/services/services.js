import { getPosition } from '../components/geolocation.js'
function getEvents(url) {
    return fetch(url)
        .then(resp => { 
            if (!resp.ok) {
                throw new Error(resp.statusText)
            }
            return resp.json()
        })
        .then(json => {
            let list = []
            for (let data of json.data) {
                let event = {}
                event.id = data.id
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

    let pos = await getPosition()

let url = `https://brottsplatskartan.se/api/eventsNearby?lat=${pos.coords.latitude}&lng=${pos.coords.longitude}&app=whatsthebuzzsve`
    console.log(url)
    return getEvents(url)

}

function createURLArea(query) {
    let url = 'https://brottsplatskartan.se/api/events/?area=' + query + '&app=whatsthebuzzsve'
    return getEvents(url)
}

function createURLLocation(query) {
    let locationQuery = encodeURIComponent(query),
    url = 'https://brottsplatskartan.se/api/events/?location=' + locationQuery + '&app=whatsthebuzzsve'
    return getEvents(url)
}

const BrottsplatsService = {
    getEventsNearby,
    search: createURLLocation,
    eventsByArea: createURLArea
}
Object.freeze(BrottsplatsService)

export default BrottsplatsService