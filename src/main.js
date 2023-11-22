import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import VueGtag from 'vue-gtag'
import router from './router'

Vue.config.productionTip = false
Vue.use(VueGtag, {
  config: {
    id: 'G-5FK8YSJ92Z'
  }
}, router)

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
