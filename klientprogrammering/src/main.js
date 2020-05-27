import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import eventlist from './components/EventList.vue'
import Toasted from 'vue-toasted'


Vue.config.productionTip = false
Vue.use(Toasted)

router.beforeEach((to, from, next) => {

next()
to, from = this.$store.dispatch('defaultState')
console.log(to, from, next)

})

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