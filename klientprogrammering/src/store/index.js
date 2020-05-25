import Vue from 'vue'
import Vuex from 'vuex'
import BrottsplatsService from '@/services/services.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    events: []
  },
  mutations: {
    addEvents(state, newEvents) {
    state.events = newEvents
    }
  },
  actions: {
    search(context, searchTerm) {
      BrottsplatsService.search(searchTerm).then(data => {
        context.commit('addEvents', data) 
      });
    },
    eventsNearby(context) {
      BrottsplatsService.getEventsNearby().then(data => context.commit('addEvents', data))
    },
    eventsByArea(context, selected) {
      BrottsplatsService.eventsByArea(selected).then(data => context.commit('addEvents', data))
    }
  },
  modules: {
  }
})
