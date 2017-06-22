// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios';
import store from './store';

/*css and js import*/
require('./dist/css/GE.css');
import MoblieUtil from './dist/js/moblieUtil.js'


Vue.prototype.$ajax = axios;
//Vue.prototype.$router = router;
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render:h=>h(App)
//template: '<App/>',
//components: { App }
})
