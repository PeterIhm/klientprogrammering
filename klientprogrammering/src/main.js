import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import eventlist from './components/EventList.vue'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  app,
  render: h => h(App),
}).$mount('#app')


Vue.component('event-list', eventlist)

let app = new Vue({
  el: '#eventlist'
})