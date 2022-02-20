import Vue from 'vue'
import App from './App.vue'
import router from './router/router'

// import VueLazyload from "./modules/vue-lazyload";
// Vue.config.productionTip = false
// Vue.use(VueLazyload, {
//   loading: 'http://localhost:9000/getImage/loading.gif',
//   error: 'http://localhost:9000/getImage/error.jpg',
//   preLoad: 1,
// });
import webp from './modules/webp';
Vue.use(webp);
new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
