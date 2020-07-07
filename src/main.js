import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from "axios"
import vant from "vant"
import VueJsonp from 'vue-jsonp'



// axios.defaults.baseURL = "/api/"

Vue.prototype.axios = axios;
//保存session 信息
//axios.defaults.withCredentials = true;
// 完整引入vant
import Vant from 'vant';
import 'vant/lib/index.css';
import goback from "./components/wtq/js/tz"
import "../public/font_2pwk3xyas9n/iconfont.css"
import "../public/js/jquery-1.11.3"
import checkLogin from  "./assets/apis/user/checkLogin"
Vue.prototype.checkLogin = checkLogin;

Vue.use(Vant);
Vue.config.productionTip = false
Vue.prototype.back = goback;
Vue.use(VueJsonp);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
