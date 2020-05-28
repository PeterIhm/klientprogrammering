/* This serviceclass is used to fetch data from Brottsplatskartans API */
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
                /* contentWOHTML is a help variable to remove the HTML tags from data.content attribute */
                let contentWOHTML = data.content.replace(/(<([^>]+)>)/ig, "");
                event.content = contentWOHTML
                event.link = data.external_source_link
                list.push(event)
            }
            return list
        }

        )
}

/* this function is used to fetch the users location (longitude & latitude) through the geolocation component */
async function getEventsNearby() {

    let pos = await getPosition()

    let url = `https://brottsplatskartan.se/api/eventsNearby?lat=${pos.coords.latitude}&lng=${pos.coords.longitude}&app=whatsthebuzzsve`
    return getEvents(url)

}

/* this function is used to create an URL from the users choice of 'län' from the dropdownmenu */
function createURLArea(query) {
    let url = 'https://brottsplatskartan.se/api/events/?area=' + query + '&app=whatsthebuzzsve'
    return getEvents(url)
}

/* this function creates a save URL of the users searchterm */
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