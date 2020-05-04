function getEventsNearby(url) {
    return fetch(url)
    .then(resp => {
        if (!resp.ok) {
            throw new Error(resp.statusText)
        }
        return resp.json()
    })
    .then (json => console.log(json)/*json.map(h => h.handelse)*/)
}

const BrottsplatsService = {
    eventsNearby: () => getEventsNearby('https://brottsplatskartan.se/api/eventsNearby?lat=57.70&lng=11.96')
}
Object.freeze(BrottsplatsService)

export default BrottsplatsService