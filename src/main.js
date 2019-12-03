import Vue from 'vue'
import App from './App.vue'
import './style.css'
import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import VueRouter from 'vue-router'

Vue.use(VueRouter)
Vue.use(BootstrapVue);

import Home from './components/Navbar.vue'
import Listing from './components/Listing.vue'
import MovieDetail from './components/MovieDetail.vue'

const router = new VueRouter({
  routes: [
    { path: '/', component: Home},
    { path: '/search/:page', component: Listing},
    { path: '/movie/', component: MovieDetail},
  ],
  mode: 'history'
})



new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
