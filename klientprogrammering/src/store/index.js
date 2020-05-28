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
    },
    /* this mutation clears the events array, so a user gets a clean page when the navigate to another view */
    clearEvents(state) {
      state.events = []
    }
  },
  actions: {
    search(context, searchTerm) {
      return BrottsplatsService.search(searchTerm).then(data => {
        context.commit('addEvents', data)
      });
    },
    eventsNearby(context) {
      return BrottsplatsService.getEventsNearby().then(data => context.commit('addEvents', data))
    },
    eventsByArea(context, selected) {
      return BrottsplatsService.eventsByArea(selected).then(data => context.commit('addEvents', data))
    },
     /* this action calls upon the clearEvents mutation through navigation guards - see main.js */
    defaultState(context) {
      context.commit('clearEvents')
    }
  },
  modules: {
  }
})
