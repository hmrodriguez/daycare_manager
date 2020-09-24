import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'
import './sass/app.scss'
import AppBootstrap from './bootstrap.js'

Vue.config.productionTip = false

Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)

AppBootstrap.createEventModels()

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
