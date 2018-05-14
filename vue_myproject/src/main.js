// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import App from './layout'
import router from './router/index.js'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import axios from 'axios';

Vue.use(Vuex);
Vue.use(ElementUI);
Vue.prototype.$axios = axios;
import store from './components/store/'

// const store = new Vuex.Store({
//     state:{
//         count:10
//     },
//     actions:{
//         async addServer({commit}){
//             const data = await fetch("http://127.0.0.1:8080/api/books").then(data=>data.json());
//             console.log(data);
//             commit("addServer",data)
//         }
//     }

// })
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
