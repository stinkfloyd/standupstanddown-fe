import Vue from 'vue'
import Vuex from 'vuex'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import router from './router'
import App from './App.vue'
import TeamsStore from './stores/TeamsStore'

Vue.use(BootstrapVue)
Vue.config.productionTip = false

Vue.use(Vuex)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  data: {
    teams: TeamsStore.data,
  },
  methods: {
    mounted() {
      console.log("mounted")
    },
  },
})
