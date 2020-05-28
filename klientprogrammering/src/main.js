import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import eventlist from './components/EventList.vue'
import Toasted from 'vue-toasted'


Vue.config.productionTip = false
Vue.use(Toasted)

/* changes the apps state to 'default' upon navigation so the user doesn't see old search results */
router.beforeEach((to, from, next) => {
  store.dispatch("defaultState")
  next()
})
Vue.component('event-list', eventlist)

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')