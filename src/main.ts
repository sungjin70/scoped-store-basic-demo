import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ScopedStore from "vue-scoped-store"

Vue.config.productionTip = false

Vue.use(ScopedStore);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
