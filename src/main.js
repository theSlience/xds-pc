/*
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2020-06-30 17:15:00
 * @LastEditors: sueRimn
 * @LastEditTime: 2020-08-03 15:56:31
 */
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
/* eslint-disable */
import Vue from "vue";
import App from "./App";
import Axios from "axios";
import store from "./store";
import router from "./router";
import Router from "vue-router";
import ElementUI from "element-ui";
// import './assets/icon/iconfont.css';
// 引入node自带的querystring模块，处理post提交表单数据
import "element-ui/lib/theme-chalk/index.css";

// 引入进度条 nprogress
import NProgress from "nprogress";
// 引入进度条样式
import "nprogress/nprogress.css";

// 轮播图
// import 'swiper/dist/css/swiper.css'
// import VueAwesomeSwiper from 'vue-awesome-swiper'

// 注入适配组件
import './utils/flexible'

import BaiduMap from 'vue-baidu-map';
Vue.use(BaiduMap, {
  ak: '6UtrfBlBhVlhpEIVPv1NUDBKjDZGF47x'
})

Vue.use(Router);
Vue.use(ElementUI);
Vue.prototype.$axios = Axios;

Vue.config.productionTip = false;

// 进度条简单配置
NProgress.inc(0.2);
NProgress.configure({
  easing: "ease",
  speed: 500,
  showSpinner: false
});

router.beforeEach((to, from, next) => {
  NProgress.start();
  next();
});

router.afterEach(() => {
  NProgress.done();
});
var _hmt = _hmt || [];
(function () {
  var hm = document.createElement("script");
  hm.src = "https://hm.baidu.com/hm.js?64378980052626b280e581fa26c7ca37";
  var s = document.getElementsByTagName("script")[0];
  s.parentNode.insertBefore(hm, s);
})();
/* eslint-disable no-new */

router.beforeEach((to, from, next) => {
  if (_hmt) {
    if (to.path) {
      _hmt.push(['_trackPageview', '/#' + to.fullPath]);
    }
  }
  next();
});
new Vue({
  el: "#app",
  store,
  // 启用路由
  router,
  components: {
    App
  },
  template: "<App/>"
});
