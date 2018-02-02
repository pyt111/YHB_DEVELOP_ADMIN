import Vue from 'vue';
import App from './App';
import router from './router';
import store from './store';
import Common from 'utils/util';
import './mock/index.js';  // 该项目所有请求使用mockjs模拟
import './login.js' 
import './ui.js' 

Vue.use(Common,{ someOption: true })
Vue.config.productionTip = false;
var vm=new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})


